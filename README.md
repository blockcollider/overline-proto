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

Javascript / Typescript generated classes are in `impl/javascript/proto/`
directory in the repository, if you want to inspect them. But when using a this
package as a dependency, you can import them as e.g `const { Block } =
require('@overline-proto/proto/core_pb')`

### Usage

- add `@overline/proto` as dependency into you project
- import classes and use them:

```javascript
const { BcBlock, BlockchainHeaders } = require('@overline/proto/proto/core_pb')
const { WirelessBcBlock } = require('@overline/proto/proto/wireless_pb')
const { codec } = require('@overline/proto/util/wireless-bridge')

console.log(new BcBlock().toObject())

const block = new BcBlock()
block.setBlockchainHeaders(new BlockchainHeaders())
const rawWirelessBcBlock = codec.encodeBcBlockForWireless(block.serializeBinary())
console.log(WirelessBcBlock.deserializeBinary(rawWirelessBcBlock).toObject())
```
