import Web3 from "web3";
import { address, ABI } from "./betContract";

const getContract = new Promise((resolve, reject) => {
  const web3 = new Web3(window.web3.currentProvider);
  const betContract = new web3.eth.Contract(ABI, address);
  // const betContractInstance = betContract.at(address);
  // resolve(betContractInstance);
  resolve(betContract);
});

export default getContract;
