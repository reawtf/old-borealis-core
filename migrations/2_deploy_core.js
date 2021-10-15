const BorealisERC20 = artifacts.require("BorealisERC20");
const BorealisPair = artifacts.require("BorealisPair");
const BorealisFactory = artifacts.require("BorealisFactory");
const _feeToSetter = '0x6d38A527407adE9E5bADA4501d8C4508262b97E3';

module.exports = function (deployer) {
  deployer.deploy(BorealisERC20);
  deployer.deploy(BorealisPair);
  deployer.deploy(BorealisFactory,_feeToSetter);
};
