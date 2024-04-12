import React from "react";
import MKButton from "components/MKButton";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as buffer from "buffer";

window.Buffer = buffer.Buffer;

const BetButton = ({ amount }) => {
  const wallet = useWallet();
  const reciever = Keypair.generate();

  async function createTransaction() {
    if (!wallet.publicKey) {
      console.log("Could not get the public key");
      return;
    }

    if (!reciever.publicKey) {
      console.log("could not get reciever public key");
    }

    const connection = new Connection(
      //This must also be paid for i assume?
      //"https://solana-mainnet.core.chainstack.com/9c6edcd1282837e03c335e5a6dc7fd46",

      "https://api.devnet.solana.com",
      "processed"
    );

    const response = await fetch("/presentation/bet");
    const data = await response.text();

    //console.log("Data object:", data);
    const price = parseFloat(data);
    //console.log("Price object:", price);

    console.log("Cost of Transaction:", amount * (1/price), "SOL");

    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: reciever.publicKey,
        //This needs to actually account for dollar to sol conversion
        lamports: parseInt(LAMPORTS_PER_SOL * (amount * (1/price))),
      })
    );

    try {
      const signature = await wallet.sendTransaction(tx, connection);
      return signature;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <MKButton onClick={createTransaction} color="primary">
        Send Money!!!
      </MKButton>
      <WalletMultiButton />
    </React.Fragment>
  );
};

export default BetButton;
