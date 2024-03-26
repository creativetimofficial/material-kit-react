import {
  ConnectionProvider,
  WalletProvider,
  WalletModalProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  TrustWalletAdapter,
  SolflareWalletAdapter,
  SolanaMobileWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

const AppWithProvider = ({ children }) => {
  // The clusterApiUrl function returns the RPC endpoint for the specified network.
  // the network can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Testnet;

  // The endpoint variable is set to the RPC endpoint for the specified network.
  const endpoint = useMemo(() => {
    clusterApiUrl(network), [network];
  });

  //@Solana/wallet-adapter-wallets is a package that provides wallet adapters for various Solana wallets.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new TrustWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new SolanaMobileWalletAdapter(),
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
