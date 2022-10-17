const address = "0x74A51366A6aEcf541ee229E55558eF92c3F7180B";
const ABI = JSON.parse(
  fs.readFileSync("./../../../build/contracts/Betting.json")
).abi;

export { address, ABI };
