"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plane, Wallet } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Travel the World with Crypto
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Book flights and transportation services globally using your favorite cryptocurrencies. Fast, secure, and borderless.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-2">
                <Plane className="h-5 w-5" />
                Book a Flight
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Wallet className="h-5 w-5" />
                Connect Wallet
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="h-full w-full rounded-lg bg-background p-6">
                {/* Add animated booking interface mockup here */}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}