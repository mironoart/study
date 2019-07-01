require('dotenv').config();
const web3 = require('./web3');
const contract = require('./contract');

async function isError(func) {
	let f;
	try {
		f = await func;
	} catch (e) {
		console.log('***********Errror!', e);
	}
	return f;
}

//from metamask
account1 = '0xbb8f59b1b9784de0dba59b8fc42b3c7e8085c84c';

const privateKey1 = Buffer.from(process.env.PRIVATE_ADDRESS_1, 'hex');

async function test() {
	let txHash;
	let txCount;
	let raw;

	const data =
		'0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820478bd0acca031c0761031bf3cba25fd77b786fa0f53144b9eeb48c6e2b5056c90029';

	// Build transaction
	txCount = await web3.eth.getTransactionCount(account1);
	const txObject = {
		nonce: web3.utils.toHex(txCount),
		gasLimit: web3.utils.toHex(1000000), // Because its contract
		gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
		data: data
	};

	// Sign transactions
	const tx = new EthereumTx(txObject, { chain: 'rinkeby' });
	tx.sign(privateKey1);
	const serializedTransaction = tx.serialize();
	raw = '0x' + serializedTransaction.toString('hex');

	//Broadcast Transaction
	txHash = await web3.eth.sendSignedTransaction(raw);
	console.log(txHash);
}

isError(test());
