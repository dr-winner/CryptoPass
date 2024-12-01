"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { ConnectWalletButton } from "./auth/connect-wallet-button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">CryptoPass</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/flights" className="transition-colors hover:text-foreground/80">Flights</Link>
            <Link href="/transport" className="transition-colors hover:text-foreground/80">Transport</Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">About</Link>
          </nav>
        </div>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <ConnectWalletButton />
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-b bg-background p-4 md:hidden"
        >
          <nav className="flex flex-col space-y-4">
            <Link href="/flights" className="text-foreground/80 transition-colors hover:text-foreground">Flights</Link>
            <Link href="/transport" className="text-foreground/80 transition-colors hover:text-foreground">Transport</Link>
            <Link href="/about" className="text-foreground/80 transition-colors hover:text-foreground">About</Link>
          </nav>
        </motion.div>
      )}
    </nav>
  );
}