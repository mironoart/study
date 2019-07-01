const web3 = require('./web3');
const abi = require('./contractABI.json');

const contract = new web3.eth.Contract(abi, '0x8a22ddaAa35402BD73d0ab75485ef7643cDa3AA8');

module.exports = contract;
