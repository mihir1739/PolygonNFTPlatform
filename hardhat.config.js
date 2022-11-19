require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
const private_key = process.env.PRIVATE_KEY;
const rpc = process.env.POLYGON_URL;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    polygon: {
      url: rpc,
      accounts: [private_key]
    },
  },
  solidity: {
    version: "0.5.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}