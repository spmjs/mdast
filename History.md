
0.7.0 / 2015-02-25
==================

* Fix fenced code block support (66a763a)
* Add support for blank lines (ad61b1e)
* Fix Setext heading support (27c4a3b)
* Fix ATX heading support (0568582)

0.6.0 / 2015-02-23
==================

* Refactor code style in `lib/expressions.js` (1d84c60)
* Add CommonMark paragraph parsing (2dda62f)
* Add iojs, node 0.12 to travis (465d2fc)
* Update browserify (965592d)

0.5.3 / 2015-02-20
==================

* Add `AUTHORS` (bd40fcf)
* Fix default value for `fence` in `Readme.md` (1545df1)
* Add more verbose project description (30b7490)
* Remove double space in example (fce6485)
* Refactor `History.md` (b3b86ee)
* Fix bug with tabs following code block fences (dfc3432)
* Update mdast dependency (e6d9d9d)

0.5.2 / 2015-02-19
==================

* Refactor to improve performance on repeated character (196ef1d)

0.5.1 / 2015-02-19
==================

* Remove ATX headers when not followed by white space (1baa543)
* Fix miscellaneous emphasis issues (3666c78)
* Fix empty list-item from throwing (d7793ac)
* Fix miscellaneous horizontal rule issues (0a6a783)

0.5.0 / 2015-02-17
==================

* Add tab support (a051f84)

0.4.1 / 2015-02-15
==================

* Update mdast dependency (c5c3c37)
* Add mdast as third argument to plug-ins (00a9b9f)

0.4.0 / 2015-02-15
==================

* Refactor module to use more constants instead of literal strings (1163134)
* Remove ensured new line at end of file (f4f0cc9)
* Refactor istanbul ignore, error message (4c4e172)
* Remove support for `referenceFootnotes: false` (ed8416e)
* Add `lib/expressions.js` with precompiled expressions (d8fe197)
* Refactor module (7c45751)
* Add support for escaped pipes in table cells (b7a3f69)
* Fix bug in node@0.10 re invalid error exit code (c557bc6)

0.3.0 / 2015-02-08
==================

* Add man docs for mdast(1) (f44182a)
* Refactor cli to use commander (1a108e2)
* Refactor to simplify options validation (da6ae75)
* Add support for YAML front matter (a09fbe8)
* Update mdast, eslint as dev-dependencies (d14f27e)
* Replace file name underscores with dashes in `test/` (efde50f)
* Fix option casing in `cli.js` (b244333)
* Merge branch 'feature/stringification/prefer-spaced-tables' (3baffd4)
* Add docs for `options.spacedTable` (ce680c0)
* Add support for `spacedTable` (a726982)
* Add tests for incorrect `spacedTable` option (39bd79a)
* Add fixtures for spaced table style (67a4488)
* Merge branch 'feature/stringification/prefer-loose-tables' (a12ab6c)
* Add docs for `options.looseTable` (1d9dc58)
* Add support for `looseTable` (bd9d35c)
* Add tests for incorrect `looseTable` option (ad72c72)
* Add fixtures for loose table style (ee925bc)
* Add auto inferring of input file if an output file is provided (3b3b799)
* Add `fence` parse option to `Readme.md` (0c41167)
* Add `example.js` to `.npmignore`, `bower.json` ignore (3f565e4)

0.2.0 / 2015-02-02
==================

* Fix `mdast.js` (94aaf42)
* Merge branch 'feature/add-line-and-column-position' (cafbe3d)
* Add `position` objects to nodes (83c10ae)
* Add `trimRightLines` function to `lib/utilities.js` (8699992)
* Add `build-usage` task to render `example.js` to `Readme.md` (9018c02)
* Add `example.js` to lint tasks (2996cee)
* Add `example.js` (a9630a1)
* Remove `requireMultipleVarDecl` rule from `.jscs.json` (0c3be65)
* Add `mdast`, `mdast-usage` as dev-dependencies (0447038)
* Fix markdown formatting in `History.md` by using `mdast` (d56e481)
* Fix markdown formatting in `Readme.md` by using `mdast` (e56f8ef)
* Fix build (7bc61e3)

0.1.12 / 2015-01-26
===================

* Add test for throwing on errors in plug-ins (160c8d1)
* Add throwing on errors in plug-ins (b8fb34f)
* Update eslint (45d874e)

0.1.11 / 2015-01-25
===================

* Remove `backpedal` from `tokenizeBlock` in `lib/parse.js` (04a7327)
* Merge branch 'feature/simplify-escapes' (9202130)
* Add support for `escape` node (28f449d)
* Fix fixtures for new escape node (fb4c1ef)
* Add new `escape` node to `doc/Nodes.md` (afc1fce)
* Add test support for new `escape` node (31bdc03)
* Add docs for `--output`, `-o` CLI flags to `Readme.md` (86bccfd)
* Add `--output`, `-o` CLI flags (c21a99d)
* Add tests for `--output` CLI flag (8f1f3b1)
* Add docs for `mdast.use()` to `Readme.md` (683adf6)
* Add `build.js` to `.gitignore`, `.npmignore`, `bower.json` ignore (6ee164d)

0.1.10 / 2015-01-24
===================

* Update build (22794c2)
* Merge branch 'bug/fix-linked-image' (146c5d0)
* Add fixtures for links, images in links (cbc572e)
* Add check to inline tokenizer if a match is eaten (95a3831)
* Add link check to nested image/links (19dd972)
* Fix typo in `Readme.md` (eb7df0b)

0.1.9 / 2015-01-24
==================

* Add UMD as an installation method in `Readme.md` (5aec802)
* Add `index.js`, `lib/` to bower ignore (82c15ee)
* Remove bower dependencies due to UMD build (d2042cf)
* Add `mdast.js` to bowers `main` instead of `index.js` (23f2cf4)
* Add `mdast.js`, `mdast.min.js` (47dc79a)
* Add `mdast.js`, `mdast.min.js` to `.npmignore` (702a196)
* Add `postbuild-bundle` npm script target to compress module (5036ee5)
* Add `bundle` npm script target to browserify module (cf7fb28)
* Add esmangle as a dev-dependency (8d522f8)
* Add browserify as a dev-dependency (17f33b2)
* Fix bug in node@0.10 re require error exit code (da7590c)

0.1.8 / 2015-01-21
==================

* Add missing `lib/utilities.js` to `component.json` (b6d3ff7)
* Merge branch 'feature/add-plugin-support' (e4dc8c3)
* Add assertions for plugins to `test/cli.sh` (e3486d5)
* Add failure on invalid plugin to cli (e15aa0a)
* Add assertions for plugins to `test/index.js` (200872c)
* Rename `ware` internally from `parser` to `ware` (1e9c43f)
* Add cli plugin usage to `Readme.md` (8f3c0ce)
* Add plugin support to cli (6532998)
* Fix plugin implementation (729796e)
* Add example plugin to `test/plugin.js` (224f59f)
* Add initial draft of plugin implementation (5b38ca2)
* Add ware as a dependency (5fd5a2b)

0.1.7 / 2015-01-20
==================

* Update copyright notice in `LICENSE` to include 2015 (a85ad95)
* Refactor license in `Readme.md` (bd94033)
* Add link to whole license in `Readme.md` (1667d67)
* Refactor fences code blocks in `Readme.md` (4d20047)
* Update npm script targets in `package.json` (84d33fb)
* Update eslint (05ec0e0)
* Fix incorrect links in documentation (668df9e)
* Update `doc/Options.md` with footnote definitions (da48b7e)
* Merge branch 'feature/footnote-definition-node' (9646dc5)
* Update `lib/stringify.js` to compile footnote definitions (a14614a)
* Update `lib/parse.js` to expose footnote definitions (d8aac89)
* Update `test/index.js` to validate footnote definition (66392a0)
* Update fixtures for footnote definition (157f782)
* Add docs for footnote definition to `doc/Nodes.md` (c0b2866)
* Merge branch 'feature/empty-fenced-code-blocks' (67e1b49)
* Add stringification as fenced code blocks when missing value and language (1afc355)
* Add support for missing `value` in `renderCodeBlock` (a333b09)
* Fix expression for empty fenced code blocks (9010b89)
* Add fixtures for empty fences code blocks (add4e84)
* Add `options.closeAtx` to `Readme.md` (ad3398e)
* Merge branch 'feature/stringification/escape-less-dashes' (6106814)
* Remove extraneous escapes on invalid list bullets (d1f78ee)
* Merge branch 'feature/stringification/prefer-closed-atx' (f0d22d6)
* Add docs for `options.closeAtx` (e6859cb)
* Add support for `closeAtx` (8f3fd26)
* Add tests for incorrect `closeAtx` options (92e7d34)
* Add fixtures for closed ATX styles (50ed9d6)

0.1.6 / 2015-01-13
==================

* Add missing jsdoc comments to `test/index.js` (a748d14)
* Add custom compiler to `mdast.stringify()` (85e22a5)
* Add custom parser to `mdast.parse()` (c5c6289)
* Add test for custom compiler to `mdast.stringify()` (be21cc3)
* Add test for custom parser to `mdast.parse()` (38f1f3e)
* Add exposure of `Compiler` on `mdast.stringify` (9ef9390)
* Add exposure of `Parser` on `mdast.parse` (f0af4ae)
* Merge branch 'feature/add-line-and-column-position' (556b9d2)
* Add duo to install methods (b813f24)
* Add links to install methods to `Readme.md` (5da914a)
* Add standardised state methods (8d4db87)
* Remove description of `gfm` parse option being better at paragraphs (d40ad60)
* Add better description to `pedantic` parse option (8436c3d)
* Refactor `lib/parse.js` (9cfe84b)
* Refactor `lib/parse.js` to merge `BlockLexer`, `InlineLexer`, `Parser` (d796675)
* Refactor to prepare `Parser` to tokenise with less context (f4e581e)
* Refactor to prepare `BlockLexer` to tokenise with less context (5eb610b)
* Refactor to construct `InlineLexer` when constructing `Parser` (c5064cc)
* Add shared lexer info to new `shared` object in `lib/parse.js` (8546d30)
* Remove `footnote` property on `root` when `footnotes: false` (bee0d12)
* Rename `Lexer` to `BlockLexer` in `lib/parse.js` (8cf2a7d)
* Remove `Parser.parse` method in `lib/parse.js` (4e18216)
* Remove `top` parameter for block-level tokenizers (7cffcda)
* Add `trimLeft` and `trimRight` to `lib/utilities` (6d72af3)
* Refactor `InlineLexer` in `lib/parse.js` (c9082f1)
* Refactor Lexer in `lib/parse.js` (9c10dbc)
* Remove `footnote-` prefix from generated footnote IDs (3139523)
* Merge branch 'master' into feature/add-line-and-column-position (8aa8afc)
* Merge branch 'feature/stringification/preferred-code-fence-style' (36c9885)
* Remove `markdown` language tag from code-fences to fix GitHub (8a9e73d)
* Add example for `options.fence` (8f00d1b)
* Add support for preferred code fence markers (2090588)
* Fix missing comma (b7b25b3)
* Add fixture for code fence markers (fd4ac34)
* Add test for incorrect code fence marker (7c8d780)
* Add better handling of incorrect parse options (91c2a53)
* Add copy to stringification settings in (c9ad382)
* Move `raise` method to `lib/utilities.js` (65b7832)
* - Refactor lots of regular expressions to be simpler
* Add error when stringifying unknown nodes (8114e8e)

0.1.5 / 2015-01-01
==================

* Remove `cli.js` form `.npmignore` (2660d85)
* Remove options description from `Readme.md` (6b7ce6b)
* Refactor API in `Readme.md` (7592c62)
* Add build script to generate `Options.md` (4ce3d44)
* Add `script/` and `doc/` to bower ignore, `.npmignore` (0fd9da4)
* Add `doc/Options.md` (8375837)
* Add missing new-line character in `Readme.md` (ce34a40)
* Update CLI usage in `Readme.md` (fdfbdeb)
* Remove nodes containing information from `Readme.md` (1234c23)
* Add `doc/Nodes.md` containing refactored AST information (2240454)
* Fix overflowing `logo.svg` (8f5893a)

0.1.4 / 2014-12-30
==================

* Update benchmark results in `Readme.md` (852c1ef)
* Update stringification options in `Readme.md` to reflect changes in 3f5d136 (7049bb3)
* Rename `horizontal-rule` stringification options to `rule` (da1c223)
* Rename `setext-headings` stringification option to `setext` (3f5d136)
* Remove `prefer` before several stirngification options (17b2668)
* Remove multiple new lines from CLI by using stdout instead of console (c8a6a39)
* Remove multiple new lines after the stringified AST (b1aaabd)
* Fix bug in CLI with exit code when provided with invalid file path (bea737e)
* Add mention of same file input output to `cli.js` (6b8aee0)
* Update code example in `Readme.md` to reflect changes in a1a5a09 (b3ea773)
* Fix bug in longest-repetition at end of input (9da5536)
* Merge branch 'feature/add-cli' (5aa392a)
* Add CLI useage to `Readme.md` (2a261b5)
* Fix typo in CLIs options (2201691)
* Fix typo in package description (de94a32)
* Add test for missing input to `test/cli.sh` (8e88164)
* Remove commented tests in `test/cli.sh` (e2579b6)
* Fix comment in CLIs help (a7ef1f3)
* Add `test-cli` npm script target to `package.json` (13807c4)
* Add `test/cli.sh` (d55c001)
* Add `lint-cli` npm script target to `package.json` (ec682f1)
* Add CLI (301d834)
* Add `cli.js` (d788807)
* Add `cli`, `bin` to package keywords (7dc0dbf)

0.1.3 / 2014-12-28
==================

* Merge branch 'feature/stringification/preferred-code-block-style' (cde17e9)
* Add documentation for preferred code block-style (3a0b498)
* Add support for preferred code block-style (2d9efe0)
* Add tests for incorrect code block-style options (7ae7635)
* Add fixtures preferred code block-style (b7ad069)
* Merge branch 'feature/stringification/preferred-footnote-style' (337b7d0)
* Add documentation for stringification with reference footnote options (f30b5d9)
* Add support for stringification with reference footnote options (0a56d54)
* Move internal copy method over to `lib/utilities.js` (2a2256c)
* Add tests for incorrect reference footnote options (feb3051)
* Add fixtures for stringification of inline- and reference-style footnotes (320d027)
* Merge branch 'bug/parse/formatting-in-nested-footnotes' (373ff32)
* Fix a bug when nested footnotes contain formatting (814ad3d)
* Merge branch 'bug/parse/fix-generating-unique-footnote-ids' (5067adf)
* Fix a bug when generating footnote ids (2f33abe)
* Merge branch 'feature/stringification/preferred-link-style' (6d2214a)
* Add documentation for stringification with reference link options (d601f5c)
* Add support for stringification with reference link options (2d36069)
* Add tests for incorrect setext header options (d06b77c)
* Add tests for incorrect reference link options (9b74973)
* Add fixtures for stringification of inline- and reference-style links (e68ac89)
* Merge branch 'feature/stringification/less-escaped-characters' (c72bdd0)
* Remove escape from exclamation-marks (1d09c86)
* Remove escape from dots when not preceded by a digit (e82f1b0)
* Remove superfluous escaped full-stops from fixtures (a1a5a09)
* Update jscs-jsdoc (bb01118)

0.1.2 / 2014-12-26
==================

* Merge branch 'feature/stringification/emphasis-and-strong' (c6b5025)
* Add support for stringification with emphasis options (b7fd038)
* Add support for stringification with emphasis options (7dfd330)
* Add tests for incorrect emphasis options (8d0e3ab)
* Add fixtures for setting strong and emphasis style (ad0c6e2)
* Refactor table-stringification (9314048)
* Merge branch 'feature/add-prefered-horizontal-rule-stringification' (da69db1)
* Add docs for `options.horizontalRule` to `Readme.md` (7f2fbf8)
* Add support for stringification with horizontal-rule options (dbbf839)
* Add tests for incorrect horizontal-rule options (439d050)
* Add fixtures for setting horizontal-rule styles (c57247b)
* Merge branch 'feature/add-prefered-bullet-stringification' (6faf93a)
* Add docs for `options.button` to `Readme.md` (43846a5)
* Add test for stringification with invalid bullet option (0045306)
* Add support for stringification with bullet options for unordered lists (bb6b4bd)
* Add fixtures for setting bullets for unordered lists (a3a8566)
* Add support for testing fixtures with options (2196690)

0.1.1 / 2014-12-25
==================

* Fix incorrect IDL in `Readme.md` (2cf8fd4)
* Fix incorrect link in `Readme.md` (8c052c0)
* Add proper `parse`, `stringify` docs to `Readme.md` (7c1a9a5)
* Add useage example for setext-heading stringification to docs (f10e0b9)
* Add support for stringification to setex-style headings (eae5300)
* Add fixtures for setex style headings (835b31b)
* Add support for testing stringified output (365a4bc)
* Add stringification of final new-line (bfceec8)
* Remove stringification of superfluous new-lines (7267bbd)
* Refactor `lib/parse.js` to cache expressions (b986fe2)
* Refactor `test/index.js` to use constants (deb8328)
* Refactor `lib/stringify.js` to use constants (2699e17)
* Refactor `lib/parse.js` to use constants (ecb9248)
* Refactor to adhere to strict jsdoc style (8db0db8)
* Add jscs-jsdoc configuration to `.jscs.json` (7fc2a99)
* Add jscs-jsdoc as a dev-dependency (cf51e63)
* Refactor npm scripts for changes in npm (d2da45d)
* Update markdown-table (d7c4332)

0.1.0 / 2014-12-11
==================

* Refactor `benchmark.js` (5e292b4)
* Update keywords, description in `package.json`, `component.json`, `bower.json` (0ddb468)
* Refactor `Readme.md` (c0a5e0f)
* Add badges for travis, coveralls to `Readme.md` (2ed78e4)
* Add `logo.svg` (0ef2ddb)
* Add missing `new` operator to `lib/stringify.js` (d34d099)
* Fix malformed `bower.json` (5f25ad6)
* Fix incorrect script reference in `component.json` (b4e5995)
* Add strict mode to `index.js` (7df8c8a)
* Refactor `bower.json` (2d71079)
* Move `lib/stringify/index.js` to `lib/stringify.js` (a554432)
* Move `lib/parse/index.js` to `lib/parse.js` (54fc3ac)
* Add npm deployment to `.travis.yml` (35d2315)
* Remove `before_install` script in `.travis.yml` (8969054)
* Remove `Makefile` (79b6908)
* Refactor `.npmignore` (b3d6606)
* Refactor `.gitignore` (c38fe50)
* Add broader version ranges to `package.json` (ebb59d6)
* Update eslint (fa518e6)
* Update matcha (b4092a7)
* Update mocha (c551efa)
* Refactor npm scripts in `package.json` (8e48c03)
* Move `test/mdast.spec.js` to `test/index.js` (5b1e18d)
* Move `spec/` to `test/` (8e34272)
* Move `benchmark/index.js` to `benchmark.js` (1bba064)
* Refactor to disallow spaces after object keys (a29d222)
* Add `.eslintrc` (18a0343)
* Fix spacing around inline-code containing backticks (a5d617f)
* Refactor to simplify `spec/mdast.spec.js` (6cc8d23)
* Add benchmark for `mdast.stringify` (8c911ef)
* Merge branch 'bug/fix-links' (8db4a26)
* Remove failing fixtures (a2c5ce5)

0.1.0-rc.2 / 2014-12-10
=======================

* Add block-level nodes to every list-item (ab376d7)

0.1.0-rc.1 / 2014-12-07
=======================

* Add near-finished stringifier (260ca45)
* Fix test for changes in inline-code/code (9f9a0bd)
* Fix loose list-items by adding paragraph-nodes where needed (ff604ee)
* Fix multiple direct sibling blockquotes from appearing (2a9462d)
* Fix `undefined` in strings when using line-breaks inside list-items (add8de0)
* Add inline-code node for code-spans (a4a9abb)
* Remove null-type for table alignment (743ac9f)
* Add better errors for fixtures in spec (a01ad74)
* Add white-space trimming to code-blocks (258a5cc)
* Refactor position of `title` attribute in parse-output (9d2aa88)
* Add he to API to decode HTML entities in `text` (f0a8843)
* Fix style issues in API (bb7ab06)
* Update copyright in Readme.md (94d5279)
* Remove testling (45a2457)
* Refactor property order in bower.json, package.json, component.json (eda2b4e)
* Update .gitignore, .npmignore (295a784)
* Add he as a dependency (fa1686b)
* Update eslint, jscs, mocha (ca17296)
* Fix incorrect repo url (082c6d1)
* Refactor table output (d09da47)
* Add initial work for both parse and stringify functionality (20dedde)
* Refactor inline lexer (d32fce5)
* Add missing continue statement (ae506ec)
* Remove extraneous rule in eslint target (68e725f)
* Refactor outputting similar nodes (1266d71)
* Remove conditional assignment (b1cbadc)
* Add benchmark to docs (5170d2f)
* Add a faster option setting mechanism (7012903)
* Add a simpler regular expression builder (74b17cf)
* Remove unneeded noop (59eb0c5)

0.0.3 / 2014-08-02
==================

* Add documentation for settings (200c12d)
* Fix option mechanism so different settings can work together (ccbd4d9)
* Add functionality to merge HTML nodes (a8de527)
* Fix mailto removal in implicit links (56cf803)
* Add more verbose comments (2bbcd9d)
* Fix typo in docs (4bcb0e6)

0.0.2 / 2014-07-31
==================

* Add docs for nodes (7ca9bf6)
* Rename cells > rows for tables (3b6ec59)
* Fix a typo where images had an "href" attribute instead of "src" (6413123)
* Fix a bug where an internal type (looseItem) was exposed (bd528d3)
* Fix documentation for b7b5b44 (15d1e5c)
* Refactored API so results are wrapped in a root token, resulting in easier footnote finding (b7b5b44)
* Fininshed renaming: marked > mdast (cbadc46)
* Added initial functionality for footnotes (feb9f52)
* Fix a bug where multiple text tokens were not merged (bcbefb8)
* Refactor fixture-loading mechanism (a305087)
* Refactored readme (2cef93f)
* Renamed README > Readme (38aa366)
* Removed build.js (8cf2070)
* Added changelog (84b17b9)
* Update travis (f87d151)
* Refactor bower.json (a018d93)
* Refactor component.json (410868f)
* Added testling (05ef1f3)
* Update mocha (551766e)
* Refactored package.json (a921818)
* Removed robotskirt, showdown, markdown (8f7a14b)
* Added benchmark (efa5710)
* Fixed npm script targets; initial benchmark (e470335)
* Removed bin, doc, man (91a161c)
* Renamed lib/mdast.js > index.js (3b7c751)
* Removed marked tests (41c97d7)
* Added more istanbul ignore comments for error reporting code (e7ca49b)
* Added a unit test for images with empty alt attributes (f6358a8)
* Made token types and variables more verbose (211695b)
* Inlined peek in api (9082a7a)
* Added unit tests for automatic email detection (652d059)
* Added two istanbul ignore comments for error reporting code (300c411)
* Removed an extraneous debug message, removed a dead statement (f0b54d5)
* Fixed an istanbul-ignore comment (9839346)
* Added unit tests for pedantic list items (stricter definition) (1cd72d4)
* Added unit tests for pedantic code blocks (persistant trailing whitespace) (4fa9d8a)
* Added a unit test for images with a title (d6c24cd)
* Removed two uncovered branches from spec (ed66d62)
* Added inline pedantic fixtures (4e9362d)
* Removed functionality to exposing inline lexer (17cd6be)
* removed smartLists options and moved it to pedantic; added fixtures (866fd20)
* Added a tables:false fixture (90ab051)
* Added functionality to use options through fixture filenames (0343bcc)
* Refactored merge; added istanbul ignore coverage comments (1b7967e)
* Add unit test linting; add coverage (66dd3dc)
* Fixed style (e3f2857)
* Refactor; things are working (ae5dc9e)
* Major refactor, JSON is now given instead of HTML (24f7d44)
* Refactored .jscs.json to indent with 2 instead of four spaces (409758d)
* Add myself as a copyright holder to LICENSE (237d979)
* Refactor for mdast (19585b8)

Forked from [marked](https://github.com/chjj/marked).
