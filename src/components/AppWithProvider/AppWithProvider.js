import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, useAnchorWallet, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  TrustWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Program, AnchorProvider, web3, BN } from "@project-serum/anchor";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import React, { useMemo } from "react";
import idl from "../../idl.json";

require("@solana/wallet-adapter-react-ui/styles.css");

const AppWithProvider = ({ children }) => {
  // The clusterApiUrl function returns the RPC endpoint for the specified network.
  // the network can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

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


export default AppWithProvider;
