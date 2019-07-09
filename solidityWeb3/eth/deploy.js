const path = require('path');
const fs = require('fs');

const abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data/abi/src_LobacoContract_sol_LobacoContract.abi')));
const bytecode = fs.readFileSync(path.resolve(__dirname, 'data/bin/src_LobacoContract_sol_LobacoContract.bin'));

const Web3 = require('web3');
const web3 = new Web3(`http://${process.env.GETH_URL}:8545`);

const addressrc = fs.existsSync(path.resolve(__dirname, 'data', '.addressrc'))
	? fs.readFileSync(path.resolve(__dirname, 'data', '.addressrc'), 'utf8')
	: false;
const waitPort = require('wait-port');

const params = {
	host: process.env.GETH_URL,
	port: 8545
};

const deploy = async (abi, bytecode) => {
	const [account] = await web3.eth.getAccounts();
	const myContract = new web3.eth.Contract(abi, addressrc, {
		from: account,
		gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
		gas: 2000000 // gasLimit
	});

	return myContract
		.deploy({
			data: '0x' + bytecode,
			arguments: [account, 12000]
		})
		.send({
			from: account,
			gas: 2000000,
			gasPrice: '20000000000'
		})
		.then(async newContractInstance => {
			try {
				(await addressrc) &&
					myContract.methods.balanceOf(account).call() < 12000 &&
					(newContractInstance.options.address = addressrc);
			} catch (e) {}
			console.log('CONTRACT ADDRESS', newContractInstance.options.address);
			fs.writeFileSync(path.resolve(__dirname, 'data', '.addressrc'), newContractInstance.options.address);
			console.log(myContract.methods);
		});
};

waitPort(params).then(() => deploy(abi, bytecode));
