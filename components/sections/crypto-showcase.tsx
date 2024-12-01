"use client";

import { motion } from "framer-motion";

const cryptoCurrencies = [
  { name: "Bitcoin", symbol: "BTC", icon: "₿" },
  { name: "Ethereum", symbol: "ETH", icon: "Ξ" },
  { name: "USDC", symbol: "USDC", icon: "$" },
  { name: "BNB", symbol: "BNB", icon: "BNB" },
  { name: "XRP", symbol: "XRP", icon: "XRP" },
];

export function CryptoShowcase() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Supported Cryptocurrencies
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Pay with your preferred digital currency
        </p>
      </motion.div>
      <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-8">
        {cryptoCurrencies.map((crypto, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold">
              {crypto.icon}
            </div>
            <h3 className="text-lg font-semibold">{crypto.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {crypto.symbol}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}