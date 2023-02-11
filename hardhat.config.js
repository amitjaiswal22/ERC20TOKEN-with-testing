require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  gasReporter:{
    enabled:true,
    currency:"INR",
    noColors:true,
    outputFile:"gasReport.txt",
    coinmarketcap:"838aab7c-3b21-41a5-8e2b-68210ac703b6",
    token:"matic",
  }
};
