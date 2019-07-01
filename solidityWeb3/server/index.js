require('dotenv').config();

const express = require('express');
//const bodyParser = require('body-parser');

const app = express();
/* 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/auth', auth);


//from metamask
account2 = '0x93551618d1a62b4a2abbe6f7486d259a5fbb136c';
ownerAccount = process.env.OWNER_ACCOUNT;
const privateKey1 = Buffer.from(process.env.OWNER_PRIVATE_KEY, 'hex');


 */

const smartContract = require('./smartContractAPI/smartContractApi');

const port = process.env.PORT || 5000;

app.listen(port, async () => {
	console.log(`Server running on port ${port}`);
	const temp = await smartContract.balanceOfAccount('0xbB8F59b1B9784De0DBa59B8fC42B3c7e8085c84C');
	console.log(temp.toString());
});
