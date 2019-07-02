const EthereumTx = require('ethereumjs-tx').Transaction;
const web3 = require('./web3');

class SmartContractApi {
	constructor(smartContractAddress, abi, ownerAddress, ownerPrivateKey) {
		this.ownerAddress = ownerAddress;
		this.privateKey = Buffer.from(ownerPrivateKey, 'hex');
		this.smartContractAddress = smartContractAddress;
		this.contract = new web3.eth.Contract(abi, smartContractAddress);
	}

	balanceOfAccount(account) {
		return this.contract.methods.balanceOf(account).call();
	}
	getNameOfContract() {
		return this.contract.methods.name.call();
	}
	getOwnerOfToken(tokenId) {
		return this.contract.methods.ownerOf(tokenId).call();
	}
	getSymbolOfToken() {
		return this.contract.methods.symbol.call();
	}
	getTokenByIndex(index) {
		return this.contract.methods.tokenByIndex(index).call();
	}
	getTotalSupply() {
		return this.contract.methods.totalSupply().call();
	}

	async mint(toAddress, tokenId) {
		const txCount = await web3.eth.getTransactionCount(this.ownerAddress);

		const txObject = {
			nonce: web3.utils.toHex(txCount),
			gasLimit: web3.utils.toHex(800000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
			to: this.smartContractAddress,
			data: this.contract.methods.mint(toAddress, tokenId).encodeABI()
		};

		const tx = new EthereumTx(txObject, { chain: 'rinkeby' });
		tx.sign(this.privateKey);

		const serializedTransaction = tx.serialize();
		const raw = '0x' + serializedTransaction.toString('hex');

		txHash = await web3.eth.sendSignedTransaction(raw);
		console.log(txHash);
	}

	async transfer(fromAddress, toAddress, tokenId) {
		const txCount = await web3.eth.getTransactionCount(this.ownerAddress);

		const txObject = {
			nonce: web3.utils.toHex(txCount),
			gasLimit: web3.utils.toHex(800000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
			to: this.smartContractAddress,
			data: this.contract.methods.safeTransferFrom(fromAddress, toAddress, tokenId).encodeABI()
		};

		const tx = new EthereumTx(txObject, { chain: 'rinkeby' });
		tx.sign(this.privateKey);

		const serializedTransaction = tx.serialize();
		const raw = '0x' + serializedTransaction.toString('hex');

		txHash = await web3.eth.sendSignedTransaction(raw);
		console.log(txHash);
	}
}

module.exports = SmartContractApi;
