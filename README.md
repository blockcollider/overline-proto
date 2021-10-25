# Overline Protobufs

Protocol buffer definitions are in `protos/` directory

This is not usable with `yarn 1.x` as a "raw dependency" (e.g. from github) due to yarn 1.x not running lifecycle scripts properly (see [yarn#5047](https://github.com/yarnpkg/yarn/issues/5047) issue)

## Updates, changes

If you want to make a change to a protocol buffer definition, you're then supposed to update all generated implementations and release a new version

steps:
- make desired changes in .proto file
- javascript
    - `npm run proto`
    - add all changes files in `impl/javascript/`
- rust - noop, see Rust section here

## Releasing new version

- do your work in topic branch, then merge to master
- when merged in master, you can then run `npx release-it` to take care of all the steps except the final `npm publish`
- wait until build in CI for the newly pushed tag finished
- you can then run `npm run publish-package`
- BEWARE: when adding new language implementation, release-it has to also bump the version in the other languages package descriptor first and also this list needs step for publishing the respective package

## Language specific guides

### Javascript

Javascript / Typescript generated classes are in `impl/javascript/proto/`
directory in the repository, if you want to inspect them. But when using a this
package as a dependency, you can import them as e.g `const { Block } =
require('@overline-proto/proto/core_pb')`

#### Usage

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

## Rust

Rust implementation is a noop for now - we use
[PROST!](https://docs.rs/prost/latest/prost/) as protocol buffers implementation
in Rust which which takes care of building the protocol buffers in the cargo
project you use it in. The directory exists only for the purpose of
completeness.

Intended way of use now is to add protos directory with the .proto files as a git submodule.

### Usage

See [prost_build](https://docs.rs/prost-build/0.9.0/prost_build/) documentation for more examples.

`build.rs`:

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    prost_build::compile_protos(
        &[
            "<path_to_protos>/protos/bc.proto",
            "<path_to_protos>/protos/core.proto",
            "<path_to_protos>/protos/db.proto",
            "<path_to_protos>/protos/miner.proto",
            "<path_to_protos>/protos/p2p.proto",
            "<path_to_protos>/protos/rover.proto",
            "<path_to_protos>/protos/wireless.proto",
        ],
        &["<path_to_protos>/protos/"],
    )?;
    Ok(())
}
```

`src/lib.rs`:

```rust
pub mod proto {
    pub mod core {
        include!(concat!(env!("OUT_DIR"), "/bc.core.rs"));
    }
}
```
