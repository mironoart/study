require('dotenv').config();
const express = require('express');
const smartContract = require('./smartContractAPI/smartContractApi');
const abi = require('./abi.json');

const app = express();

/* 
//const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/auth', auth);
*/

const ownerAddress = process.env.OWNER_ADDRESS;
const ownerPrivateKey = process.env.OWNER_PRIVATE_KEY;
const smartContractAddress = process.env.SMART_CONTRACT_ADDRESS;
const account2 = '0x93551618d1a62b4a2abbe6f7486d259a5fbb136c';
const account3 = '0xAF06c8AD44E4019Fc2639fb35ACD3A7260122263';
const contract = new smartContract(smartContractAddress, abi, ownerAddress, ownerPrivateKey);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
	console.log(`Server running on port ${port}`);
	const temp = await contract.transfer(account2, account3, 61);

	console.log(temp.toString());
});
