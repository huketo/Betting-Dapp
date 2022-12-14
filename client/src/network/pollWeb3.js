import Web3 from "web3";
import store from "./../store/index";

const pollWeb3 = () => {
  const web3 = new Web3(Web3.currentProvider);

  setInterval(() => {
    if (!web3 || store.state.web3.web3Instance) {
      return;
    }

    if (web3.eth.coinbase !== store.state.web3.coinbase) {
      const newCoinbase = web3.eth.coinbase;
      web3.eth.getBalance(web3.eth.coinbase, (err, newBalance) => {
        if (err) {
          console.log(err);
        } else {
          store.dispatch("updateWeb3", {
            coinbase: newCoinbase,
            balance: parseInt(newBalance, 10),
          });
        }
      });
    } else {
      web3.eth.getBalance(store.state.web3.coinbase, (err, newBalance) => {
        if (err) {
          console.log(err);
        } else if (parseInt(newBalance, 10) !== store.state.web3.balance) {
          store.dispatch("updateWeb3", {
            coinbase: store.state.web3.coinbase,
            balance: newBalance,
          });
        }
      });
    }
  }, 700);
};

export default pollWeb3;
