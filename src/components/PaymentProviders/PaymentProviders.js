import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MKButton from "components/MKButton";

import Web3 from "web3";

import metamaskIcon from "assets/images/logos/metamask-logo.svg";
import phantomIcon from "assets/images/logos/phantom-icon.svg";
import solflareIcon from "assets/images/logos/solflare-logo.svg";
import { useConnection } from "@solana/wallet-adapter-react";

import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback } from "react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { Transaction, SystemProgram, Keypair } from "@solana/web3.js";

const options = ["Metamask", "Phantom", "Solflare"];
const walletColors = ["metamask", "phantom", "solflare"];
const walletIcons = [metamaskIcon, phantomIcon, solflareIcon];

export default function PaymentProviders({ amount }) {
  //States
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  //Hooks for Solana
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const toAddress = "0x73c6fd23Ae4B6054228D1b206920C263133C5ec7";

  const handleClick = useCallback(async () => {
    console.log("Public Key: ", publicKey);

    if (!publicKey) throw new WalletNotConnectedError();

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: Keypair.generate().publicKey, // Transfer lamports to a new random account, this would be your token account
        lamports: 1,
      })
    );

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, "processed");

    // Metamask
    if (selectedIndex == 0) {
      const wei = Web3.utils.toWei(amount, "ether");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          const userAccount = accounts[0];
          console.log("Connected to MetaMask:", userAccount);
          // Request payment

          // Web3.eth.estimateGas({ to: toAddress, value: wei }).then((gasAmount) => {
          //   console.log("gasAmount: ", gasAmount);
          // });

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
    // Phantom
    else if (selectedIndex == 1) {
    }
    // Solflare
    else if (selectedIndex == 2) {
    }
  }, [publicKey, sendTransaction, connection, selectedIndex, amount]);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        color="inherit"
        aria-label="Payment Providers"
        size="small"
        sx={{ flexGrow: 1 }}
      >
        <MKButton
          onClick={handleClick}
          color={walletColors[selectedIndex]}
          startIcon={
            <img
              src={walletIcons[selectedIndex]}
              alt="wallet icon"
              style={{ width: "30px", height: "30px" }}
            />
          }
          size="small"
          sx={{ flexGrow: 1 }}
        >
          Deposit with {options[selectedIndex]}
        </MKButton>
        <MKButton
          color={walletColors[selectedIndex]}
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select payment strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </MKButton>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
