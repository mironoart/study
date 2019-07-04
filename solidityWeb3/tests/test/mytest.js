var LobacoContract = artifacts.require('LobacoContract');

contract('LobacoContract', accounts => {
	it('Name of contract ', async () => {
		const instance = await LobacoContract.deployed();
		const name = await instance.name.call();
		const isTestPass = assert.equal(name, 'Lobaco', 'Name is not match');
		return isTestPass;
	});

	it('Symbol of contract ', async () => {
		const instance = await LobacoContract.deployed();
		const symbol = await instance.symbol.call();
		const isTestPass = assert.equal(symbol, 'LBL', 'Symbol is not match');
		return isTestPass;
	});

	it('Mint of contract ', async () => {
		const instance = await LobacoContract.deployed();
		const hash = await instance.mint('0xf7c4477270b47da11459cbbdaa169f3d560f7c05', 333);
	});

	it('Tottal Supply of contract ', async () => {
		const instance = await LobacoContract.deployed();
		const totalSupply = await instance.totalSupply();
		const isTestPass = assert.equal(totalSupply, 1, 'TotalSupply is not match');
		return isTestPass;
	});
	it('Balance of Acc ', async () => {
		const instance = await LobacoContract.deployed();
		const balance = await instance.balanceOf('0xf7c4477270b47da11459cbbdaa169f3d560f7c05');
		const isTestPass = assert.equal(balance, 1, 'TotalSupply is not match');
		return isTestPass;
	});

	it('Owner of Token ', async () => {
		const instance = await LobacoContract.deployed();
		const owner = await instance.ownerOf(333);
		const isTestPass = assert.equal(
			owner.toLowerCase(),
			'0xf7c4477270b47da11459cbbdaa169f3d560f7c05',
			'TotalSupply is not match'
		);
		return isTestPass;
	});
});
