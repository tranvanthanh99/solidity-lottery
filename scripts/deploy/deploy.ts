import { ethers } from "hardhat";
import {
  deployContract,
  deployMultiContract,
  deployContractUpgradeable,
  deployMultiContractUpgradeable,
} from "../utils/contract";

async function main() {}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
