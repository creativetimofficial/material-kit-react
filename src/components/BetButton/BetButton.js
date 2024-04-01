import React from "react";
import MKButton from "components/MKButton";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { Program, AnchorProvider, web3, BN } from "@project-serum/anchor";
import { Connection } from "@solana/web3.js";
import idl from "../../idl.json";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const BetButton = ({ amount }) => {
  const wallet = useAnchorWallet();
  const baseAccount = web3.Keypair.generate();

  function getProvider() {
    if (!wallet) {
      return null;
    }
    const network = "http://192.168.1.197:8899";
    const connection = new Connection(network, "processed");

    const provider = new AnchorProvider(connection, wallet, { preflightCommitment: "processed" });
    return provider;
  }

  async function createCounter() {
    const provider = getProvider();
    if (!provider) {
      throw "Provider is null";
    }
    const a = JSON.stringify(idl);
    const b = JSON.parse(a);
    const program = new Program(b, idl.metadata.address, provider);
    try {
      await program.methods
        .initialize()
        .accounts({
          myAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: web3.SystemProgram.programId,
        })
        .signers([baseAccount])
        .rpc();

      const account = await program.account.myAccount.fetch(baseAccount.publicKey);
      console.log("Account: ", account);
    } catch (err) {
      console.log("transaction error", err);
    }
  }

  async function increment() {
    const provider = getProvider();
    if (!provider) {
      throw "Provider is null";
    }

    const a = JSON.stringify(idl);
    const b = JSON.parse(a);
    const program = new Program(b, idl.metadata.address, provider);
    try {
      await program.methods
        .increment()
        .accounts({
          myAccount: baseAccount.publicKey,
        })
        .rpc();

      const account = await program.account.myAccount.fetch(baseAccount.publicKey);
      console.log("Account: ", account.data.toString());
    } catch (err) {
      console.log("transaction error", err);
    }
  }

  return (
    <React.Fragment>
      <button onClick={createCounter}>Create Counter</button>
      <button onClick={increment}>Increment</button>
      <WalletMultiButton />
    </React.Fragment>
   );
};

export default BetButton;
