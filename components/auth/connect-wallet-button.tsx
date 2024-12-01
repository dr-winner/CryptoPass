"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useWeb3Auth } from "@/hooks/use-web3-auth";
import { toast } from "sonner";

export function ConnectWalletButton() {
  const { connectWallet, isConnecting, error } = useWeb3Auth();

  const handleConnect = async () => {
    try {
      await connectWallet();
      toast.success("Successfully connected wallet");
    } catch (err) {
      toast.error(error || "Failed to connect wallet");
    }
  };

  return (
    <Button
      onClick={handleConnect}
      disabled={isConnecting}
      className="gap-2"
    >
      <Wallet className="h-5 w-5" />
      {isConnecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
}