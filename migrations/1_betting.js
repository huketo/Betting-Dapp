const Betting = artifacts.require("./../contracts/Betting.sol");

module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Betting);
};
