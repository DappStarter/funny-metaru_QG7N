require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strategy razor spice comic inside light army gate'; 
let testAccounts = [
"0xec8ebfe6d62f4937e0797935ed3df9e1d8d6dd2ee26ed27774d163988df7e644",
"0xc0460ecca117a5e684e5de7d86d3ef3933a90091fd5e5942e012ef10d60d3767",
"0x7612e640a7fd59cc2d6b9330bed65264c5f3164da72911dbe797d0e2f0af2051",
"0x117f237aaf4e2464fcf686ed21832897f7799f549a1799429e1617a9c106c2c0",
"0x63e7533ec15e832ccc4c0820a70308505a21b2c304028d6b00494615eccaf5dc",
"0x92810a672903888e28c51c79d8a251827c917573cc605cdbd9e039edb5df679c",
"0xce0d0e146fe80f9b143b67e13ffb1fc216ff3ff85a3102ea873d3e27337dd35d",
"0x8b1d6ba6d5008697ed6305ef910ed7280c5ff6e0550ba60ebb0a04dba534fb44",
"0x05aa7c0da0b2b1a59d2dfaab30d64945a0b3b01a0e5c74c63c3c9f3398716515",
"0x7d0997177096ab479e46169cf6a836e14b609a7d081b37e289832dfd6bdbe434"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


