# Overline Protobufs

Protocol buffer definitions are in `protos/` directory

## Updates, changes

If you want to make a change to a protocol buffer definition, you're then supposed to update all generated implementations and release a new version

steps:
- make desired changes in .proto file
- javascript
    - `npm run proto`
    - add all changes files in `impl/javascript/`
    - raise version in `package.json`

## Javascript

Javascript / Typescript generated classes are in `impl/javascript/` directory

### Usage

- add `@overline/proto` as dependency into you project
- import classes and use them:

```javascript
const { BcBlock } = require('@overline/proto/impl/javascript/core_pb')
const b = new BcBlock()
b.setHash('a8212d5a65f579c2018b19172be34e4422a93c8437f8e7c19ddc8cad15353862')
console.log(b.toObject())
```
