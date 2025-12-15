'use client';

import { Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePromptFilters } from '@/hooks/usePromptFilters';
import { Sidebar } from '@/components/layout/Sidebar';
import { UseCaseCard } from '@/components/prompts/UseCaseCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { Search, SlidersHorizontal, X, LayoutGrid, List } from 'lucide-react';
import { SortOption, prompts as allPrompts, categories } from '@/data';
import Link from 'next/link';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'most-upvoted', label: 'Most Upvoted' },
  { value: 'alphabetical', label: 'A-Z' },
];

function PromptLibrary() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const {
    search,
    category,
    tags,
    tools,
    outputType,
    difficulty,
    sort,
    filteredPrompts,
    counts,
    setSearch,
    setCategory,
    toggleTag,
    toggleTool,
    setOutputType,
    setDifficulty,
    setSort,
    clearFilters,
    hasActiveFilters,
  } = usePromptFilters();

  // Count active filters (only category, tags, and output type)
  const activeFilterCount =
    (category !== 'all' ? 1 : 0) +
    tags.length +
    (outputType !== 'all' ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Filters Sidebar Overlay */}
      <AnimatePresence>
        {isFiltersOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsFiltersOpen(false)}
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-screen w-80 bg-surface border-r border-border-subtle z-50 overflow-y-auto"
            >
              <Sidebar
                activeCategory={category}
                onCategoryChange={(cat) => {
                  setCategory(cat);
                }}
                selectedTags={tags}
                onTagToggle={toggleTag}
                selectedOutputType={outputType}
                onOutputTypeChange={setOutputType}
                counts={counts}
                isOpen={true}
                onClose={() => setIsFiltersOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <p className="label-sm mb-4">Agreement Analysis</p>
          <h1 className="display-xl text-text-primary mb-6">
            Prompts for every stage of contract review
          </h1>
          <p className="body-lg max-w-2xl mx-auto mb-10">
            From risk identification to negotiation support, explore {allPrompts.length} expert-crafted prompts designed to accelerate your agreement workflow.
          </p>

          {/* Search and Filters Row */}
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3 items-center">
              {/* Filters Button */}
              <button
                type="button"
                onClick={() => setIsFiltersOpen(true)}
                className="flex items-center gap-2 px-4 py-3 bg-surface border border-border-subtle rounded-lg text-text-secondary hover:text-text-primary hover:border-border transition-colors"
              >
                <SlidersHorizontal size={18} />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 bg-brand-purple text-white text-xs font-medium rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Search Input */}
              <div className="flex-grow relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search use cases"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-surface border border-border-subtle rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-border transition-colors"
                />
              </div>

              {/* Grid/List Toggle */}
              <div className="flex items-center bg-surface border border-border-subtle rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-background text-text-primary'
                      : 'text-text-tertiary hover:text-text-secondary'
                  }`}
                >
                  <LayoutGrid size={16} />
                  <span>Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors ${
                    viewMode === 'list'
                      ? 'bg-background text-text-primary'
                      : 'text-text-tertiary hover:text-text-secondary'
                  }`}
                >
                  <List size={16} />
                  <span>List</span>
                </button>
              </div>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-2 mt-4 justify-center"
              >
                {category !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-purple text-white text-sm rounded-full">
                    {categories.find(c => c.id === category)?.name}
                    <button
                      type="button"
                      onClick={() => setCategory('all')}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border text-text-primary text-sm rounded-full"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
                {outputType !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border text-text-primary text-sm rounded-full">
                    {outputType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    <button
                      type="button"
                      onClick={() => setOutputType('all')}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors ml-2"
                >
                  Clear all
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Active Filters & Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm text-text-secondary">
              {filteredPrompts.length === 1
                ? '1 prompt'
                : `${filteredPrompts.length} prompts`}
            </span>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-text-tertiary hover:text-text-primary transition-colors"
              >
                <X size={14} />
                Clear filters
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-tertiary">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="px-2 py-1 text-sm bg-transparent text-text-primary focus:outline-none cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Use Cases Grid/List */}
        {filteredPrompts.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredPrompts.map((prompt, index) => (
                <UseCaseCard key={prompt.id} prompt={prompt} index={index} />
              ))}
            </div>
          ) : (
            <div className="border border-border-subtle rounded-lg overflow-hidden bg-surface">
              {/* List Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-border-subtle bg-background text-xs font-medium uppercase tracking-wider text-text-tertiary">
                <div className="col-span-5">Title</div>
                <div className="col-span-2">Author</div>
                <div className="col-span-2">Category</div>
                <div className="col-span-3">Best For</div>
              </div>
              {/* List Items */}
              {filteredPrompts.map((prompt, index) => {
                const promptCategory = categories.find(c => c.id === prompt.category);
                return (
                  <Link
                    key={prompt.id}
                    href={`/prompt/${prompt.id}`}
                    className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border-subtle last:border-b-0 hover:bg-background transition-colors group"
                  >
                    <div className="col-span-5">
                      <h3 className="font-medium text-text-primary group-hover:text-brand-purple transition-colors">
                        {prompt.title}
                      </h3>
                    </div>
                    <div className="col-span-2 text-sm text-text-secondary">
                      {prompt.author || 'Docusign'}
                    </div>
                    <div className="col-span-2 text-sm text-text-secondary">
                      {promptCategory?.name || prompt.category}
                    </div>
                    <div className="col-span-3 flex flex-wrap gap-1">
                      {prompt.bestFor?.slice(0, 2).map((audience) => (
                        <span
                          key={audience}
                          className="text-xs px-2 py-0.5 bg-accent-light text-text-secondary rounded"
                        >
                          {audience}
                        </span>
                      ))}
                      {prompt.bestFor && prompt.bestFor.length > 2 && (
                        <span className="text-xs text-text-tertiary">
                          +{prompt.bestFor.length - 2}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )
        ) : (
          <EmptyState onClearFilters={clearFilters} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-tertiary">
            <p>Docusign Agreement Analysis</p>
            <p>Expert prompts for contract review</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-text-secondary">Loading...</div>
        </div>
      }
    >
      <PromptLibrary />
    </Suspense>
  );
}
