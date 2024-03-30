import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  useAnchorWallet,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  TrustWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Program, getProvider, web3, BN } from "@project-serum/anchor";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import React, { useMemo, ReactNode } from "react";

const AppWithProvider = ({ children }) => {
  // The clusterApiUrl function returns the RPC endpoint for the specified network.
  // the network can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Testnet;

  // The endpoint variable is set to the RPC endpoint for the specified network.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  //@Solana/wallet-adapter-wallets is a package that provides wallet adapters for various Solana wallets.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new TrustWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const Content = () => {
  const wallet = useAnchorWallet();

  function myProvider() {
    if (!wallet) {
      return null;
    }
    const network = "http://localhost:3000";
    const connection = new Connection(network, "processed");

    const provider = new getProvider(connection, wallet, { preflightCommitment: "processed" });
    return provider;
  }
  return (
    <div>
      <h1>Anchor Wallet</h1>
      <button onClick={myProvider}>Get Provider</button>
    </div>
  );
};

export default AppWithProvider;
