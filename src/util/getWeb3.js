import Web3 from "web3";

const getWeb3 = () => {
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      // Modern dapp browsers
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);

        try {
          // Request account access
          await window.ethereum.enable();
          resolve(web3);
        } catch (err) {
          reject(err);
        }
      } else if (window.web3) {
        //   Legacy dapp browsers
        const web3 = window.web3;
        resolve(web3);
      } else {
        //   Fallback to localhost
        try {
          const url = "http://localhost:8545";
          const provider = new Web3.providers.HttpProvider(url);
          const web3 = new Web3(provider);
          resolve(web3);
        } catch (err) {
          reject(err);
        }
      }
    });
  });
}
export default getWeb3;
