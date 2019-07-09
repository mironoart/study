const MyToken = artifacts.require('MyToken');

require('chai').should()

contract('MyToken', accounts => {

    describe('token attributes', function () {
        const _name = 'My Token';
        const _symbol = 'MTK';
        const _decimals = 18;


        beforeEach(async function () {
            this.token = await MyToken.new(_name, _symbol, _decimals);
        })

        it('has the correct name', async function () {
            const name = await this.token.name();
            name.should.equal(_name);
        })

        it('has the correct symbol', async function () {
            const symbol = await this.token.symbol();
            symbol.should.equal(_symbol);

        })

        it('has the correct decimals', async function () {
            const decimals = (await this.token.decimals()).toNumber();
            decimals.should.equal(_decimals);

        })

    })
})
