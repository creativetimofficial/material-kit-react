import React from "react";
import MKButton from "components/MKButton";
import Web3 from "web3";

function BetButton({ amount }) {
  // const handleButtonClick = async () => {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     try {
  //       await window.ethereum.enable();
  //     } catch (error) {
  //       console.error("User denied account access");
  //     }
  //   }
  // };

  async function placeBet() {
    const toAddress = "0x73c6fd23Ae4B6054228D1b206920C263133C5ec7";

    const wei = Web3.utils.toWei(amount, "ether");

    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        const userAccount = accounts[0];
        console.log("Connected to MetaMask:", userAccount);
        // Request payment

        const paymentDetails = {
          to: toAddress,
          from: userAccount,
          value: wei, // 1 ETH in wei
          gas: "100000", // Gas limit
        };

        window.ethereum
          .request({
            method: "eth_sendTransaction",
            params: [paymentDetails],
          })
          .then((txHash) => {
            console.log("Transaction sent:", txHash);

            // Handle payment confirmation
            // Listen for transaction confirmation events or poll the blockchain for the transaction status
          })
          .catch((error) => {
            console.error("Payment request failed:", error);
          });
      })
      .catch((error) => {
        console.error("Failed to connect to MetaMask:", error);
      });
  }

  return (
    <MKButton color="primary" onClick={placeBet}>
      Deposit Points
    </MKButton>
  );
}

export default BetButton;
