"use client";

import { motion } from "framer-motion";
import { Search, CreditCard, Plane } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Find your perfect flight or transport option",
  },
  {
    icon: CreditCard,
    title: "Pay with Crypto",
    description: "Secure payment with your preferred cryptocurrency",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Receive instant confirmation and travel details",
  },
];

export function HowItWorksSection() {
  return (
    <section className="container py-24 bg-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Book your next journey in three simple steps
        </p>
      </motion.div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <step.icon className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {step.description}
            </p>
            {index < steps.length - 1 && (
              <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-border sm:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}