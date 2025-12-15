'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Users, CheckCircle, Target, AlertTriangle, FileSearch, ShieldCheck, GitCompare, Lightbulb, Scale } from 'lucide-react';
import { Category, Prompt } from '@/data';
import { PromptCard } from './PromptCard';

interface CategorySectionProps {
  category: Category;
  prompts: Prompt[];
  onTagClick?: (tag: string) => void;
  defaultExpanded?: boolean;
}

const categoryIcons: Record<string, React.ElementType> = {
  AlertTriangle,
  FileSearch,
  ShieldCheck,
  GitCompare,
  Lightbulb,
  Scale,
};

export function CategorySection({
  category,
  prompts,
  onTagClick,
  defaultExpanded = true,
}: CategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const Icon = categoryIcons[category.icon] || FileSearch;

  return (
    <section className="mb-12">
      {/* Category Header - Clickable to expand/collapse */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group"
      >
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-elevated border border-border-subtle flex items-center justify-center">
            <Icon size={24} className="text-text-secondary" />
          </div>

          {/* Title and description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-text-primary group-hover:text-text-secondary transition-colors">
                {category.name}
              </h2>
              <span className="px-2 py-0.5 text-xs font-medium bg-surface-elevated text-text-secondary rounded-full">
                {prompts.length} {prompts.length === 1 ? 'prompt' : 'prompts'}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-auto"
              >
                <ChevronDown size={20} className="text-text-tertiary group-hover:text-text-secondary transition-colors" />
              </motion.div>
            </div>
            <p className="text-text-secondary mt-1">
              {category.description}
            </p>
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {/* Editorial Content */}
            {category.longDescription && (
              <div className="mb-6 pl-16">
                <p className="text-text-secondary leading-relaxed max-w-3xl">
                  {category.longDescription}
                </p>
              </div>
            )}

            {/* Use Cases, Benefits, Best For - Compact row */}
            {(category.useCases || category.benefits || category.bestFor) && (
              <div className="mb-8 pl-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Use Cases */}
                {category.useCases && category.useCases.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target size={14} className="text-text-tertiary" />
                      <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
                        Common Use Cases
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {category.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                          <ChevronRight size={14} className="text-text-tertiary mt-0.5 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {category.benefits && category.benefits.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle size={14} className="text-text-tertiary" />
                      <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
                        Key Benefits
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle size={12} className="text-text-tertiary mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Best For */}
                {category.bestFor && category.bestFor.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users size={14} className="text-text-tertiary" />
                      <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
                        Best For
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.bestFor.map((audience, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 text-xs font-medium bg-surface-elevated text-text-secondary rounded-md border border-border-subtle"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Prompts Grid */}
            <div className="pl-16">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {prompts.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} onTagClick={onTagClick} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
