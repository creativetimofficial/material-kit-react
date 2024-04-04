import React from "react";
import MKButton from "components/MKButton";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as buffer from "buffer";



window.Buffer = buffer.Buffer;

const BetButton = ({ amount }) => {

  const wallet = useWallet();
  const reciever = Keypair.generate();


  async function createTransaction() {
    if (!wallet.publicKey) {
      console.log("Could not get the public key")
      return 
    }

    if(!reciever.publicKey){
      console.log("could not get reciever public key")
    }

    const connection = new Connection(clusterApiUrl('testnet'), "processed")

    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: reciever.publicKey,
        //This needs to actually account for dollar to sol conversion
        lamports: LAMPORTS_PER_SOL * 0.1,
      })
    );
    
    const signature = await wallet.sendTransaction(tx, connection);

    return signature
  }

  return (
      <React.Fragment>
        <MKButton onClick={createTransaction} color="primary">Send Money!!!</MKButton>
        <WalletMultiButton />
      </React.Fragment>
    );
  }

  export default BetButton;
