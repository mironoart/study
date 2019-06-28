const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/d324ab6757d84beeae6d7471e3184d55'));

module.exports = web3;
