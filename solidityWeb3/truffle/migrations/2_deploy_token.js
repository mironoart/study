const ERC721SimpleContract = artifacts.require('ERC721SimpleContract.sol');

module.exports = function(deployer) {
	deployer.deploy(ERC721SimpleContract);
};
