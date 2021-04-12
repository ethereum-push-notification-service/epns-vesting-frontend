// This address points to a dummy ERC20 contract deployed on Ethereum Mainnet,
// Goerli, Kovan, Rinkeby and Ropsten. Replace it with your smart contracts.
const addresses = {
  ceaErc20: "0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815",
  epnscore: "0xb02E99b9634bD21A8e3E36cc7adb673287A8FeaC",
  dai: "0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108",
  aDai: "0xcB1Fe6F440c49E9290c3eb7f158534c2dC374201",
  epnsToken: "0xf418588522d5dd018b425E472991E52EBBeEEEEE",
  fundsDistributorFactory: {
    strategicAllocationFactory: "0x4F2a8c211De3752FDFe2bC45737509dA8490eb28",
    advisorsFactory: "0x809A48D85E68610d01Cd4a9c88E694aeFc858CFE",
    teamFactory: "0x876DfF9043CFEdA0277031C7242744d6Fd3BC749",
    investorsAllocationFactory: "0xb10926Ab97774c3d08a7ED4bC7e65eb0AD09bb3d",
  },
  vestedReserves: {
    commReserves: "0x6f59b37E9EabeCA527504988C3c7D6D6E77e827A",
    foundationA: "0xF1A0baa73205E97D9478752562d06F6dD5daEa2f",
    foundationB: "0x16b41A27dBD3E14F09AB1D57499Bf6738f23812A",
  },
  commUnlockedReserves: "0x0cc23a784F9753FA3359dC3aC261a6593cCf214e",
};

export default addresses;
