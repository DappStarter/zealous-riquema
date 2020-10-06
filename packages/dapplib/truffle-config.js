require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note situate comfort install clock flame gas'; 
let testAccounts = [
"0xa000d31756da5faa9a7d8eb7c2b8e332e1ef1c81ee82f94913277f2807089713",
"0xc3bd037f62f3e97328c86b84f66b5fb85bf7a7dbce43d16dc21ac108da6b17fa",
"0x0f6486bf481d359723439ece1b714a6fc9a16bcf1d2464517fda54bf94ababa5",
"0xfd92eede3ada7ffc9d986d183632351096a752271bff2a981c87034791288c22",
"0x2e7ad234b3212d9f72eaee5d3f44a2ad4675cc83c2aa7ca54ebbbb2271d50b0a",
"0x056f227accfa030145d387cd916df903af7d5d3d5f11622eedba8fbdd3565079",
"0xfee313c2a3d3a2f81b5b8bd8722b0a18ac2f4ddc92a85b3531211e2714c8ef26",
"0x4618896074513c3d12a1b97f13bbcf5e1dddf02a30ee7809c4338b0ffa956fce",
"0x1c23ee1d3013546e20671beeaddfca6eed02e2b15e951c937239175d193c9e8b",
"0x77c93bc16b7deacd34cf3d56009316767e6654b84bc4379ae391e70208b6c731"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
