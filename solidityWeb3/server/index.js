require('dotenv').config();
const web3 = require('./web3');
const contract = require('./contract');
const EthereumTx = require('ethereumjs-tx').Transaction;

//from metamask
ownerAccount = '0xbB8F59b1B9784De0DBa59B8fC42B3c7e8085c84C';
account2 = '0x93551618d1a62b4a2abbe6f7486d259a5fbb136c';
const privateKey1 = Buffer.from(process.env.PRIVATE_ADDRESS_1, 'hex');

async function isError(func) {
	let f;
	try {
		f = await func;
	} catch (e) {
		console.log('***********Errror!', e);
	}
	return f;
}

async function readFunctions() {
	var balanceOf = await contract.methods.balanceOf(account2).call();
	var name = await contract.methods.name.call();
	var ownerOf = await contract.methods.ownerOf(666).call();
	var symbol = await contract.methods.symbol.call();
	var tokenByIndex = await contract.methods.tokenByIndex(0).call();
	var totalSupply = await contract.methods.totalSupply().call();

	console.log('balance:', balanceOf.toString());
	console.log('name:', name);
	console.log('ownerOf:', ownerOf);
	console.log('symbol:', symbol);
	console.log('tokenByIndex:', tokenByIndex.toString());
	console.log('totalSupply:', totalSupply.toString());
}

async function writefunctions() {
	const txCount = await isError(web3.eth.getTransactionCount(ownerAccount));

	const txObject = {
		nonce: web3.utils.toHex(txCount),
		gasLimit: web3.utils.toHex(800000),
		gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
		to: '0x8a22ddaAa35402BD73d0ab75485ef7643cDa3AA8',
		data: contract.methods.mint(account2, '111').encodeABI()
	};

	const tx = new EthereumTx(txObject, { chain: 'rinkeby' });
	tx.sign(privateKey1);

	const serializedTransaction = tx.serialize();
	raw = '0x' + serializedTransaction.toString('hex');

	txHash = web3.eth.sendSignedTransaction(raw);
	console.log(txHash);
}

isError(writefunctions());
//isError(readFunctions());
