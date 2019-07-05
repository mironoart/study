var LablacoContract = artifacts.require('LablacoContract');

contract('LablacoContract', accounts => {
	it('Name of contract ', async () => {
		const instance = await LablacoContract.deployed();
		const name = await instance.name.call();
		const isTestPass = assert.equal(name, 'Lablaco', 'Name is not match');
		return isTestPass;
	});

	it('Symbol of contract ', async () => {
		const instance = await LablacoContract.deployed();
		const symbol = await instance.symbol.call();
		const isTestPass = assert.equal(symbol, 'LBL', 'Symbol is not match');
		return isTestPass;
	});

	it('Mint of contract ', async () => {
		const instance = await LablacoContract.deployed();
		const hash = await instance.addItemToBlockchain(5, 12345, 'Shirt', 'Mike');
		//console.log(hash);
	});

	it('Tottal Supply of contract ', async () => {
		const instance = await LablacoContract.deployed();
		const totalSupply = await instance.totalSupply();
		const isTestPass = assert.equal(totalSupply, 1, 'TotalSupply is not match');
		return isTestPass;
	});
	it('Balance of Acc ', async () => {
		const instance = await LablacoContract.deployed();
		const balance = await instance.balanceOf('0x55d351e2736f96a6efc94ad789d948aa5683789b');
		const isTestPass = assert.equal(balance.toString(), 1, 'Balance is not match');
		return isTestPass;
	});

	it('Owner of Token ', async () => {
		const instance = await LablacoContract.deployed();
		const owner = await instance.ownerOf(5);
		const isTestPass = assert.equal(
			owner.toLowerCase(),
			'0x55d351e2736f96a6efc94ad789d948aa5683789b',
			'Owner is not match'
		);
		return isTestPass;
	});

	it('Item Info', async () => {
		const instance = await LablacoContract.deployed();
		const { itemId, userId, itemName, userName } = await instance.items(0);

		const isTestPass = assert.equal(5, Number(itemId), 'Item is not match');
		return isTestPass;
	});
});
