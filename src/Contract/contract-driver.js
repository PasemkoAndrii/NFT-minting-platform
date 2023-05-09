import contractABI from "./contractABI";
import {
  infuraETHProvider,
  contractAddress,
  accountAddress,
  accountKey
} from "./contract-params";

import Web3 from "web3";

const web3 = new Web3(infuraETHProvider);
export const contract = new web3.eth.Contract(contractABI, contractAddress);

export const mintNewNFT = async (addressNFT, ownerAddress) => {
  const tx = {
    from: accountAddress,
    to: contractAddress,
    data: contract.methods.mintNew(addressNFT, ownerAddress).encodeABI()
  };

  await web3.eth.estimateGas(tx, (err, gas) => {
    if (gas) {
      tx.gas = gas;
    }
    if (err) {
      console.log(err);
    }
  });

  const signedTx = await web3.eth.accounts.signTransaction(tx, accountKey);

  web3.eth.sendSignedTransaction(signedTx.rawTransaction, (err, res) => {
    if (err) {
      console.log(err);
    }
    if (res) {
      console.log("Minted!", res);
    }
  });
};

export const getMintingEvents = async () => {
  let pastEvents = [];
  let mintingData = [];

  await contract.getPastEvents(
    "NewTokenMinted",
    { fromBlock: "earliest" },
    (err, res) => {
      if (err) {
        console.log("getMintingEventsError", err);
      }
      pastEvents = res.map((el) => el.returnValues.tokenURI);
    }
  );

  pastEvents = pastEvents.map((el) =>
    el.replace("ipfs://", "https://ipfs.io/ipfs/")
  );

  const test = pastEvents.map((el) =>
    fetch(el)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err)
  );

  await Promise.all(test).then((res) => (mintingData = res));
  mintingData = mintingData.filter((el) => el.image);
  mintingData = mintingData.map((el) => {
    const newImageUri = el.image.replace("ipfs://", "https://ipfs.io/ipfs/");
    return { ...el, image: newImageUri };
  });
  return mintingData;
};

export const contractSetMethod = async (setMethod, methodParams) => {
  const tx = {
    from: accountAddress,
    to: contractAddress,
    data: setMethod(methodParams).encodeABI()
  };

  await web3.eth.estimateGas(tx, (err, gas) => {
    if (gas) {
      tx.gas = gas;
    }
    if (err) {
      console.log(err);
    }
  });

  const signedTx = await web3.eth.accounts.signTransaction(tx, accountKey);

  web3.eth.sendSignedTransaction(signedTx.rawTransaction, (err, res) => {
    if (err) {
      console.log(err);
    }
    if (res) {
      console.log("contractSetMethod", res);
    }
  });
};

export const contractGetMethod = async (getMethod, params) => {
  let response;
  await getMethod().call((err, res) => {
    if (err) {
      console.log("contractGetMethod", err);
    }
    if (res) {
      response = res;
    }
  });

  return response;
};
