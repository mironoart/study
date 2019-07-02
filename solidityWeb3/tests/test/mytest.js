var HelloWorld = artifacts.require('HelloWorld')

contract('HelloWorld', accounts => {
	it('should put 1000 coins in the owners account', async () => {
		const instance = await HelloWorld.deployed()
		const balance = await instance.balance.call(accounts[0])
		const isTestPass = assert.equal(balance.valueOf(), 1000, "1000 wasn't in the account")
		return isTestPass
	})

	it('should return the name Filip', async () => {
		const instance = await HelloWorld.deployed()
		const name = await instance.getName.call()
		const isTestPass = assert.equal(name, 'Filip', 'the name was not filip')
		return isTestPass
	})

	it('should return the name Bob', async function() {
		const instance = await HelloWorld.deployed()
		await instance.setName('Bob')
		const name = await instance.getName.call()
		const isTestPass = assert.equal(name, 'Bob', 'the name was not Bob')
		return isTestPass
	})
})
