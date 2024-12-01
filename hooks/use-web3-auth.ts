"use client";

import { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import { SiweMessage } from "siwe";
import { ethers } from "ethers";

export function useWeb3Auth() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = useCallback(async () => {
    try {
      setIsConnecting(true);
      setError(null);

      if (!window.ethereum) {
        throw new Error("Please install MetaMask or another Web3 wallet");
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to CryptoPass",
        uri: window.location.origin,
        version: "1",
        chainId: 1,
        nonce: await fetch("/api/auth/nonce").then((res) => res.text()),
      });

      const signature = await signer.signMessage(message.prepareMessage());

      const response = await signIn("web3", {
        message: JSON.stringify(message),
        signature,
        redirect: false,
      });

      if (response?.error) {
        throw new Error(response.error);
      }

      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect wallet");
      throw err;
    } finally {
      setIsConnecting(false);
    }
  }, []);

  return {
    connectWallet,
    isConnecting,
    error,
  };
}