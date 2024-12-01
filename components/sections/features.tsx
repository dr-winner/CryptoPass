"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Zap, Coins } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "End-to-end encrypted payments using blockchain technology",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Book flights and transportation worldwide without borders",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Confirm your travel instantly with crypto payments",
  },
  {
    icon: Coins,
    title: "Multi-Currency",
    description: "Support for major cryptocurrencies and tokens",
  },
];

export function FeaturesSection() {
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
          Why Choose CryptoPass?
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Experience the future of travel booking with our innovative platform
        </p>
      </motion.div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 rounded-lg bg-primary/10 p-3">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}