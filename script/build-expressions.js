'use strict';

/*
 * Dependencies.
 */

var fs = require('fs');

/*
 * Methods.
 */

var write = fs.writeFileSync;

/*
 * Expressions.
 */

var EXPRESSION = /(^|[^\[])\^/g;

/**
 * Clean an expression.
 *
 * @param {RegExp|string} expression
 * @return {string}
 */
function cleanExpression(expression) {
    return (expression.source || expression).replace(EXPRESSION, '$1');
}

/*
 * Exports.
 */

var expressions = {};
var rules = {};
var tables = {};
var gfm = {};
var footnotes = {};
var yaml = {};
var pedantic = {};
var commonmark = {};
var commonmarkGFM = {};
var breaks = {};
var breaksGFM = {};

expressions.rules = rules;
expressions.tables = tables;
expressions.gfm = gfm;
expressions.footnotes = footnotes;
expressions.yaml = yaml;
expressions.pedantic = pedantic;
expressions.commonmark = commonmark;
expressions.commonmarkGFM = commonmarkGFM;
expressions.breaks = breaks;
expressions.breaksGFM = breaksGFM;

/*
 * Block helpers.
 */

rules.newline = /^\n([ \t]*\n)*/;

rules.bullet = /(?:[*+-]|\d+\.)/;

rules.code = /^((?: {4}|\t)[^\n]*\n?([ \t]*\n)*)+/;

rules.horizontalRule = /^[ \t]*([-*_])( *\1){2,} *(?=\n|$)/;

rules.heading =
    /^([ \t]*)(#{1,6})([ \t]*)([^\n]*?)[ \t]*#*[ \t]*(?=\n|$)/;

commonmark.heading =
    /^([ \t]*)(#{1,6})(?:([ \t]+)([^\n]+?))??(?:[ \t]+#+)?[ \t]*(?=\n|$)/;

rules.lineHeading =
    /^(\ {0,3})([^\n]+?)[ \t]*\n\ {0,3}(=|-){1,}[ \t]*(?=\n|$)/;

rules.linkDefinition =
    /^[ \t]*\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?=\n|$)/;

rules.blockText = /^[^\n]+/;

rules.item = new RegExp(
    '^([ \\t]*)(' +
        cleanExpression(rules.bullet) +
    ')[ \\t][^\\n]*(?:\\n(?!\\1' +
        cleanExpression(rules.bullet) +
    '[ \\t])[^\\n]*)*',
'gm');

rules.list = new RegExp(
    '^' +
    '([ \\t]*)' +
    '(' + cleanExpression(rules.bullet) + ')' +
    '(' +
        '(?:[ \\t][\\s\\S]+?)' +
        '(?:' +

            /*
             * Modified Horizontal rule:
             */

            '\\n+(?=\\1?(?:[-*_][ \\t]*){3,}(?:\\n|$))' +
            '|' +

            /*
             * Modified Link Definition:
             */

            '\\n+(?=' + cleanExpression(rules.linkDefinition) + ')' +
            '|' +

            '\\n{2,}(?![ \\t])(?!\\1' +
                cleanExpression(rules.bullet) +
            '[ \\t])' +
            '|' +

            '\\s*$' +
        ')' +
    ')'
);

rules.blockquote = new RegExp(
    '^([ \\t]*>[^\\n]+(\\n(?!' +

    cleanExpression(rules.linkDefinition) +

    ')[^\\n]+)*)+'
);


commonmark.blockquote = new RegExp(
    rules.blockquote.source.replace('(?!', '(?!' +
        cleanExpression(rules.horizontalRule).replace(/\\1/g, '\\3') +
        '|'
    )
);

var inlineTags = '(?!' +
        '(?:' +
            'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|' +
            'var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|' +
            'span|br|wbr|ins|del|img' +
        ')\\b' +
    ')' +
    '\\w+(?!:' +
        '\\/|[^\\w\\s@]*@' +
    ')\\b';

rules.html = new RegExp(
    '^[ \\t]*(?:' +

        /*
         * HTML comment.
         */

        cleanExpression('<!--[\\s\\S]*?-->') +
        '[ \\t]*(?:\\n|\\s*$)|' +

        /*
         * Closed tag.
         */

        cleanExpression('<(' + inlineTags + ')[\\s\\S]+?<\\/\\1>') +
        '[ \\t]*(?:\\n{2,}|\\s*$)|' +

        /*
         * Closing tag.
         */

        cleanExpression(
            '<' + inlineTags + '(?:"[^"]*"|\'[^\']*\'|[^\'">])*?>'
        ) +
        '[ \\t]*' +
        '(?:\\n{2,}|\\s*$)' +
    ')'
);

rules.paragraph = new RegExp(
    '^(?:(?:' +
        '[^\\n]+\\n?' +
        '(?!' +
            cleanExpression(rules.horizontalRule) +
            '|' +
            cleanExpression(rules.heading) +
            '|' +
            cleanExpression(rules.lineHeading) +
            '|' +
            cleanExpression(rules.blockquote) +
            '|' +
            cleanExpression('<' + inlineTags) +
            '|' +
            cleanExpression(rules.linkDefinition) +
        ')' +
    ')+)'
);

/*
 * GFM + Tables Block Grammar
 */

tables.table =
    /^( *\|(.+))\n( *\|( *[-:]+[-| :]*)\n)((?: *\|.*(?:\n|$))*)/;

tables.looseTable =
    /^( *(\S.*\|.*))\n( *([-:]+ *\|[-| :]*)\n)((?:.*\|.*(?:\n|$))*)/;

/*
 * GFM Block Grammar.
 */

gfm.fences =
    /^( *)(([`~])\3{2,})[ \t]*([^\s`~]+)?[ \t]*(?:\n([\s\S]*?))??(?:\n\ {0,3}\2\3*[ \t]*(?=\n|$)|$)/;

gfm.paragraph = new RegExp(
    rules.paragraph.source.replace('(?=\\n|$)|', '(?=\\n|$)|' +
        cleanExpression(gfm.fences).replace(/\\2/g, '\\4').replace(/\\3/g, '\\5') +
        '|' +
        cleanExpression(rules.list).replace(/\\1/g, '\\8') +
        '|'
    )
);

/*
 * Footnote block grammar
 */

footnotes.footnoteDefinition =
    /^( *\[\^([^\]]+)\]: *)([^\n]+(\n+ +[^\n]+)*)/;

/*
 * YAML front matter.
 */

yaml.yamlFrontMatter = /^-{3}\n([\s\S]+?\n)?-{3}/;

/*
 * Inline-Level Grammar.
 */

rules.escape = /^\\([\\`*{}\[\]()#+\-.!_>])/;

rules.autoLink = /^<([^ >]+(@|:\/)[^ >]+)>/;

rules.tag = /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/;

rules.invalidLink = /^(!?\[)((?:\[[^\]]*\]|[^\[\]])*)\]/;

rules.strong = /^(_)_([\s\S]+?)__(?!_)|^(\*)\*([\s\S]+?)\*\*(?!\*)/;

rules.emphasis =
    /^\b(_)((?:__|[\s\S])+?)_\b|^(\*)((?:\*\*|[\s\S])+?)\*(?!\*)/;

rules.inlineCode = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/;

rules.break = /^ {2,}\n(?!\s*$)/;

rules.text = /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/;

rules.inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;

rules.href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

rules.link = new RegExp(
    '^(!?\\[)(' +
        cleanExpression(rules.inside) +
    ')\\]\\(' +
        cleanExpression(rules.href) +
    '\\)'
);

rules.referenceLink = new RegExp(
    '^(!?\\[)(' +
        cleanExpression(rules.inside) +
    ')\\]\\s*\\[([^\\]]*)\\]'
);

/*
 * GFM inline Grammar.
 */

gfm.escape = new RegExp(
    rules.escape.source.replace('])', '~|])')
);

gfm.url = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/;

gfm.deletion = /^~~(?=\S)([\s\S]*?\S)~~/;

gfm.text = new RegExp(
    rules.text.source.replace(']|', '~]|').replace('|', '|https?:\\/\\/|')
);

/*
 * Pedantic Inline Grammar.
 */

pedantic.strong =
    /^(_)_(?=\S)([\s\S]*?\S)__(?!_)|^(\*)\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/;

pedantic.emphasis =
    /^(_)(?=\S)([\s\S]*?\S)_(?!_)|^(\*)(?=\S)([\s\S]*?\S)\*(?!\*)/;

/*
 * CommonMark and CommonMark + GFM.
 */

/**
 * Replace zero or more spaces or tabs with
 * between 0 and 3 spaces.
 *
 * @param {RegExp} expression
 * @return {RegExp}
 */
function commonmarkParagraph(expression) {
    return new RegExp(expression.source
        .replace(cleanExpression(rules.lineHeading) + '|', '')
        .replace(/\[ \\t\]\*/g, function () {
            return '\\ {0,3}';
        })
    );
}

commonmark.paragraph = commonmarkParagraph(rules.paragraph);
commonmarkGFM.paragraph = commonmarkParagraph(gfm.paragraph);

/*
 * GFM + Line Breaks Inline Grammar
 */

breaks.break = new RegExp(rules.break.source.replace('{2,}', '*'));
breaks.text = new RegExp(rules.text.source.replace('{2,}', '*'));

breaksGFM.text = new RegExp(
    gfm.text.source.replace('{2,}', '*')
);

/*
 * Write.
 */

var content;

content = '/* This file is generated by `script/build-expressions.js` */\n' +
    'module.exports = {\n' +
    Object.keys(expressions).map(function (key) {
        var map = expressions[key];
        var result;

        result = '  \'' + key + '\': {\n';

        result += Object.keys(map).map(function (name) {
            return '    \'' + name + '\': ' + map[name].toString();
        }).join(',\n');

        return result + '\n  }';
    }).join(',\n') +
    '\n};\n';

write('lib/expressions.js', content);
