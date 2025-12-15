'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { prompts, categories, OutputType } from '@/data';
import { VoteButtons } from '@/components/ui/VoteButtons';
import { CopyButton } from '@/components/prompts/CopyButton';
import { useVoteContext } from '@/contexts/VoteContext';
import { ArrowLeft, Clock, Users } from 'lucide-react';

const outputTypeLabels: Record<OutputType, string> = {
  'risk-report': 'Risk Report',
  'clause-list': 'Clause List',
  'compliance-checklist': 'Compliance Checklist',
  'comparison-matrix': 'Comparison Matrix',
  'executive-summary': 'Executive Summary',
  'negotiation-brief': 'Negotiation Brief',
  other: 'Other',
};

export default function PromptDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { vote, getVoteCount, getUserVote } = useVoteContext();
  const promptId = params.id as string;

  const prompt = prompts.find((p) => p.id === promptId);
  const category = prompt ? categories.find((c) => c.id === prompt.category) : null;

  if (!prompt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-1 text-text-primary mb-4">
            Prompt not found
          </h1>
          <button
            onClick={() => router.push('/')}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  // Parse the prompt content to identify sections
  const promptLines = prompt.content.split('\n');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/90 backdrop-blur-sm border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <motion.button
            onClick={() => router.back()}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back</span>
          </motion.button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Category eyebrow */}
            <p className="label-sm mb-4">{category?.name || prompt.category}</p>

            {/* Title */}
            <h1 className="display-lg text-text-primary mb-4">
              {prompt.title}
            </h1>

            {/* Description */}
            <p className="body-lg max-w-2xl mb-6">
              {prompt.description}
            </p>

            {/* Value Proposition */}
            {prompt.valueProp && (
              <div className="value-prop mb-8">
                {prompt.valueProp}
              </div>
            )}

            {/* Metadata row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-tertiary pb-8 border-b border-border-subtle">
              {prompt.author && (
                <span>By {prompt.author}</span>
              )}
              {prompt.timeToComplete && (
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>{prompt.timeToComplete}</span>
                </div>
              )}
              {prompt.outputType && (
                <span>{outputTypeLabels[prompt.outputType]}</span>
              )}
            </div>
          </motion.div>

          {/* Best For Section */}
          {prompt.bestFor && prompt.bestFor.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users size={16} className="text-text-tertiary" />
                <h2 className="heading-3 text-text-primary">Best for</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {prompt.bestFor.map((audience) => (
                  <span key={audience} className="best-for-badge">
                    {audience}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Understand the prompt */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="narrative-section"
          >
            <div className="section-number">1</div>
            <div className="section-content">
              <h2 className="section-title">Describe the task</h2>
              <p className="section-body">
                This prompt helps you {prompt.description.toLowerCase().replace(/\.$/, '')}.
                Copy it into your AI assistant and customize the bracketed placeholders with your specific details.
              </p>
            </div>
          </motion.section>

          {/* Step 2: The Prompt */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="narrative-section"
          >
            <div className="section-number">2</div>
            <div className="section-content">
              <h2 className="section-title">Give your AI the prompt</h2>
              <p className="section-body mb-6">
                Copy this prompt and paste it into Docusign AI or your preferred AI assistant.
                Replace any text in [brackets] with your specific information.
              </p>

              {/* Prompt Container */}
              <div className="prompt-input-container">
                <span className="prompt-label">Prompt</span>
                <div className="p-6 pt-8">
                  <div className="flex justify-end mb-4">
                    <CopyButton content={prompt.content} />
                  </div>
                  <pre className="font-mono text-sm text-text-secondary whitespace-pre-wrap leading-relaxed">
                    {prompt.content}
                  </pre>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Step 3: What you'll get */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="narrative-section"
          >
            <div className="section-number">3</div>
            <div className="section-content">
              <h2 className="section-title">What you'll receive</h2>
              <p className="section-body mb-6">
                {prompt.outputType
                  ? `You'll get a structured ${outputTypeLabels[prompt.outputType].toLowerCase()} with actionable insights.`
                  : 'You\'ll receive a structured analysis with actionable insights.'
                }
              </p>

              {/* Example Output if available */}
              {prompt.exampleOutput && (
                <div className="claude-output">
                  <pre className="font-mono text-sm text-text-secondary whitespace-pre-wrap leading-relaxed">
                    {prompt.exampleOutput}
                  </pre>
                </div>
              )}
            </div>
          </motion.section>

          {/* Step 4: Follow-up suggestions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="narrative-section"
          >
            <div className="section-number">4</div>
            <div className="section-content">
              <h2 className="section-title">Refine and iterate</h2>
              <p className="section-body">
                Once you have initial results, you can ask follow-up questions to dive deeper into specific areas.
              </p>

              <div className="follow-up-grid">
                <div className="follow-up-card">
                  "Can you elaborate on the highest-risk items?"
                </div>
                <div className="follow-up-card">
                  "What specific language changes would you recommend?"
                </div>
                <div className="follow-up-card">
                  "How does this compare to standard industry terms?"
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tags */}
          {prompt.tags && prompt.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-12 pt-8 border-t border-border-subtle"
            >
              <p className="label-sm mb-3">Related topics</p>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Voting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border-subtle"
          >
            <div className="flex items-center justify-between">
              <p className="text-text-secondary">Was this prompt helpful?</p>
              <VoteButtons
                voteCount={getVoteCount(prompt.id)}
                userVote={getUserVote(prompt.id)}
                onUpvote={() => vote(prompt.id, 'upvote')}
                onDownvote={() => vote(prompt.id, 'downvote')}
                size="md"
              />
            </div>
          </motion.div>

        </article>
      </main>
    </div>
  );
}
