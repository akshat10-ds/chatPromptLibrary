'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Prompt, categories } from '@/data';

interface UseCaseCardProps {
  prompt: Prompt;
  index?: number;
}

export function UseCaseCard({ prompt, index = 0 }: UseCaseCardProps) {
  const category = categories.find((c) => c.id === prompt.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <Link href={`/prompt/${prompt.id}`} className="block h-full">
        <article className="use-case-card">
          <span className="card-category">
            {category?.name || prompt.category}
          </span>

          <h3 className="card-title">
            {prompt.title}
          </h3>

          <p className="card-description">
            {prompt.description}
          </p>

          {prompt.bestFor && prompt.bestFor.length > 0 && (
            <div className="card-meta">
              {prompt.bestFor.slice(0, 3).map((audience) => (
                <span key={audience} className="best-for-badge">
                  {audience}
                </span>
              ))}
            </div>
          )}
        </article>
      </Link>
    </motion.div>
  );
}
