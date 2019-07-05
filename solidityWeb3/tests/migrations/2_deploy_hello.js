const lablaco = artifacts.require('./LablacoContract');

module.exports = function(deployer) {
	deployer.deploy(lablaco);
};
