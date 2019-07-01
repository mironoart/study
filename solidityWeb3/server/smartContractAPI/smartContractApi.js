const EthereumTx = require('ethereumjs-tx').Transaction;
const web3 = require('./web3');
const abi = require('./ABI.json');
const contract = new web3.eth.Contract(abi, process.env.SMART_CONTRACT_ADDRESS);

class SmartContractApi {
	static async balanceOfAccount(account) {
		return await contract.methods.balanceOf(account).call();
	}
	static async getNameOfContract() {
		return await contract.methods.name.call();
	}
	static async getOwnerOfToken(tokenId) {
		return await contract.methods.ownerOf(tokenId).call();
	}
	static async getSymbolOfToken() {
		return await contract.methods.symbol.call();
	}
	static async getTokenByIndex(index) {
		return await contract.methods.tokenByIndex(index).call();
	}
	static async getTotalSupply() {
		return await contract.methods.totalSupply().call();
	}

	static async mint(toAddress, tokenId) {
		const txCount = await isError(web3.eth.getTransactionCount(ownerAccount));

		const txObject = {
			nonce: web3.utils.toHex(txCount),
			gasLimit: web3.utils.toHex(800000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
			to: process.env.SMART_CONTRACT_ADDRESS,
			data: contract.methods.mint(toAddress, tokenId).encodeABI()
		};

		const tx = new EthereumTx(txObject, { chain: 'rinkeby' });
		tx.sign(process.env.OWNER_PRIVATE_KEY);

		const serializedTransaction = tx.serialize();
		raw = '0x' + serializedTransaction.toString('hex');

		txHash = await web3.eth.sendSignedTransaction(raw);
		console.log(txHash);
	}

	static async transfer(fromAddress, toAddress, tokenId) {
		const txCount = await isError(web3.eth.getTransactionCount(ownerAccount));

		const txObject = {
			nonce: web3.utils.toHex(txCount),
			gasLimit: web3.utils.toHex(800000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
			to: process.env.SMART_CONTRACT_ADDRESS,
			data: contract.methods.safeTransferFrom(fromAddress, toAddress, tokenId).encodeABI()
		};

		const tx = new EthereumTx(txObject, { chain: 'rinkeby' });
		tx.sign(process.env.OWNER_PRIVATE_KEY);

		const serializedTransaction = tx.serialize();
		raw = '0x' + serializedTransaction.toString('hex');

		txHash = await web3.eth.sendSignedTransaction(raw);
		console.log(txHash);
	}
}

module.exports = SmartContractApi;
