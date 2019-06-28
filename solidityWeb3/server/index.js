require('dotenv').config();
const web3 = require('./web3');
const EthereumTx = require('ethereumjs-tx').Transaction;
/***************************************************************************** */

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
account2 = '0x93551618d1a62b4a2abbe6f7486d259a5fbb136c';

const privateKey1 = Buffer.from(process.env.PRIVATE_ADDRESS_1, 'hex');
const privateKey2 = Buffer.from(process.env.PRIVATE_ADDRESS_2, 'hex');

async function test() {
	let txHash;
	let txCount;
	let raw;

	// Build transaction
	txCount = await isError(web3.eth.getTransactionCount(account1));

	const txObject = {
		nonce: web3.utils.toHex(txCount),
		to: account2,
		value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
		gasLimit: web3.utils.toHex(21000),
		gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
	};

	// Sign transactions
	const tx = new EthereumTx(txObject, { chain: 'rinkeby' });
	tx.sign(privateKey1);
	const serializedTransaction = tx.serialize();
	raw = '0x' + serializedTransaction.toString('hex');

	//Broadcast Transaction
	txHash = await isError(web3.eth.sendSignedTransaction(raw));
}
test();

/********************************************************************************** */
/* 
async function test() {
	let res;
	let res2;
	try {
		res = await web3.eth.getBalance(account1);
		res2 = await web3.eth.getBalance(account2);
	} catch (e) {
		console.log('***********************************', e);
	}
	console.log(web3.utils.fromWei(res, 'ether'));
	console.log(web3.utils.fromWei(res2, 'ether'));
}
test();
 */

/* 
async function test() {
	let res;
	try {
		res = await contract.methods.mint().call();
	} catch (e) {
		console.log(e);
	}
	console.log(res);
}
test();
 */
/* 
contract.methods
	.name()
	.call()
	.then((err, result) => {
		console.log(err);
		console.log(result);
	});
 */
