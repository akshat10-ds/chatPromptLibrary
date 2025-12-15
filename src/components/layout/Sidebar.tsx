'use client';

import { CategoryId, getAllTags, OutputType } from '@/data';
import { CategoryFilter } from '@/components/filters/CategoryFilter';
import { TagFilter } from '@/components/filters/TagFilter';
import { MetadataFilters } from '@/components/filters/MetadataFilters';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { X } from 'lucide-react';

interface SidebarProps {
  activeCategory: CategoryId | 'all';
  onCategoryChange: (category: CategoryId | 'all') => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  selectedOutputType: OutputType | 'all';
  onOutputTypeChange: (type: OutputType | 'all') => void;
  counts?: Record<CategoryId | 'all', number>;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({
  activeCategory,
  onCategoryChange,
  selectedTags,
  onTagToggle,
  selectedOutputType,
  onOutputTypeChange,
  counts,
  isOpen,
  onClose,
}: SidebarProps) {
  const allTags = getAllTags();

  return (
    <>
      {/* Sidebar */}
      <aside className="h-full">
        <div className="p-6">
          {/* Header with title and close button */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-text-tertiary mb-1">
                Docusign
              </p>
              <h1 className="heading-2 text-text-primary">
                Agreement Analysis
              </h1>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="label-sm mb-3">
              Categories
            </h3>
            <CategoryFilter
              activeCategory={activeCategory}
              onChange={onCategoryChange}
              counts={counts}
            />
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="label-sm mb-3">
              Tags
            </h3>
            <TagFilter
              tags={allTags}
              selectedTags={selectedTags}
              onToggle={onTagToggle}
            />
          </div>

          {/* Output Type Filter */}
          <div className="mb-8">
            <h3 className="label-sm mb-3">
              Output Type
            </h3>
            <MetadataFilters
              selectedOutputType={selectedOutputType}
              onOutputTypeChange={onOutputTypeChange}
            />
          </div>

          {/* Theme Toggle */}
          <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between">
            <span className="text-sm text-text-secondary">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
