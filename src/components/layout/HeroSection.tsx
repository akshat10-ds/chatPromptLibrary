'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  totalPrompts: number;
}

export function HeroSection({ totalPrompts }: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="page-hero"
    >
      <p className="eyebrow">Agreement Analysis</p>
      <h1 className="display-xl text-text-primary mb-6">
        Prompts for every stage of contract review
      </h1>
      <p className="body-lg max-w-2xl mx-auto">
        From risk identification to negotiation support, explore {totalPrompts} expert-crafted prompts designed to accelerate your agreement workflow.
      </p>
    </motion.div>
  );
}
