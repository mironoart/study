const lobaco = artifacts.require('./LobacoContract');

module.exports = function(deployer) {
	deployer.deploy(lobaco);
};
