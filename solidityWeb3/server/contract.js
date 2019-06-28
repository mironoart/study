const web3 = require('./web3');
const abi = require('./contractABI.json');

const contract = new web3.eth.Contract(abi, '0x78C0382Fe085dA7EaF450F0DfFFfe22e8537b328');

module.exports = contract;
