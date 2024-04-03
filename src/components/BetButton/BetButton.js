import React from "react";
import MKButton from "components/MKButton";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { Program, AnchorProvider, web3, BN } from "@project-serum/anchor";
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import idl from "../../idl.json";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { decode } from "@project-serum/anchor/dist/cjs/utils/bytes/hex";
import * as buffer from "buffer";
import { bs58 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { Key } from "@mui/icons-material";


window.Buffer = buffer.Buffer;

const BetButton = ({ amount }) => {

  const wallet = useWallet();
  const baseAccount = web3.Keypair.generate();

  async function createTransaction() {
    if (!wallet.publicKey) {
      console.log("Could not get the public key")
      return
    }

    const privateKey = new Uint8Array(bs58.decode(process.env['PRIVATE_KEY']))

    const sender = Keypair.fromSecretKey(privateKey)

    const reciever = Keypair.generate()

    const connection = new Connection(clusterApiUrl('devnet'), "processed")

      (async () => {
        const tx = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: sender.publicKey,
            toPubkey: reciever.publicKey,
            lamports: LAMPORTS_PER_SOL * 0.001,
          })
        )
        const signature = await sendAndConfirmTransaction(connection, tx, [sender])

      } 

  return (
      <React.Fragment>
        <MKButton onClick={createTransaction}>Send Money!!!</MKButton>
        <WalletMultiButton />
      </React.Fragment>
    );
  }

  export default BetButton;
