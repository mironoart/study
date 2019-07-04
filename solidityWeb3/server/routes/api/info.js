const router = require('express').Router();

const abi = require('../../abi.json');
const smartContract = require('../../smartContractAPI/smartContractApi.js');

const ownerAddress = process.env.OWNER_ADDRESS;
const ownerPrivateKey = process.env.OWNER_PRIVATE_KEY;
const smartContractAddress = process.env.SMART_CONTRACT_ADDRESS;

const contract = new smartContract(smartContractAddress, abi, ownerAddress, ownerPrivateKey);

router.get('/nameOfContract', getNameOfContract);
router.get('/symbolOfToken', getSymbolOfToken);
router.get('/totalSupply', getTotalSupply);
router.get('/balanceOfAccount', balanceOfAccount);
router.get('/ownerOfToken', getOwnerOfToken);
router.get('/tokenByIndex', getTokenByIndex);

router.post('/mintToken', mintToken);
router.post('/transferToken', transferToken);

async function getNameOfContract(req, res) {
	try {
		const nameOfContract = await contract.getNameOfContract();
		res.status(200).send(nameOfContract.toString());
	} catch (e) {
		res.status(400).json(e);
	}
}

async function getSymbolOfToken(req, res) {
	try {
		const symbol = await contract.getSymbolOfToken();
		res.status(200).send(symbol.toString());
	} catch (e) {
		res.status(400).json(e);
	}
}

async function getTotalSupply(req, res) {
	try {
		const supply = await contract.getTotalSupply();
		res.status(200).send(supply.toString());
	} catch (e) {
		res.status(400).json(e);
	}
}

async function balanceOfAccount(req, res) {
	const accountAddress = req.body.accountAddress;
	try {
		const balanceOfAccount = await contract.balanceOfAccount(accountAddress);
		res.status(200).send(balanceOfAccount.toString());
	} catch (e) {
		res.status(400).json(e);
	}
}

async function getOwnerOfToken(req, res) {
	const tokenId = req.body.tokenId;
	try {
		const ownerOfToken = await contract.getOwnerOfToken(tokenId);
		res.status(200).send(ownerOfToken.toString());
	} catch (e) {
		res.status(400).json(e);
	}
}

async function getTokenByIndex(req, res) {
	const index = req.body.index;

	try {
		const token = await contract.getTokenByIndex(index);
		res.status(200).send(token.toString());
	} catch (e) {
		res.status(400).json(e);
	}
}

async function mintToken(req, res) {
	const { to, tokenId } = req.body;

	try {
		const txHash = await contract.mint(to, tokenId);
		res.status(200).send(txHash);
	} catch (err) {
		res.status(400).json(e);
	}
}

async function transferToken(req, res) {
	const { from, to, tokenId } = req.body;
	console.log(req.body);

	try {
		const response = await contract.transfer(from, to, tokenId);
		res.status(200).send(response.toString());
	} catch (e) {
		res.status(400).send(e);
	}
}

module.exports = router;
