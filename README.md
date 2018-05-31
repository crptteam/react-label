# react-label

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Set of react label components.

## Usage

```javascript

import { TwoLineLabel, SIZES } from  "@crpt/react-label";


<TwoLineLabel heading={<span>Ta-daaa</span>}>This is content</TwoLineLabel>

```

| PropName | Description | Example |
|---|---|---|
| heading: Any  | Heading content. |  `<TwoLineLabel heading={<span>Ta-daaa</span>}>This is content</TwoLineLabel>` |
| size: String  | Size of label. |  `<TwoLineLabel heading={<span>Ta-daaa</span>} size={SIZES.small}>This is content</TwoLineLabel>` |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
