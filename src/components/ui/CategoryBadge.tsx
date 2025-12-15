'use client';

import { CategoryId, categories } from '@/data';
import {
  AlertTriangle,
  FileSearch,
  ShieldCheck,
  GitCompare,
  Lightbulb,
  Scale,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  AlertTriangle,
  FileSearch,
  ShieldCheck,
  GitCompare,
  Lightbulb,
  Scale,
};

interface CategoryBadgeProps {
  categoryId: CategoryId;
}

export function CategoryBadge({ categoryId }: CategoryBadgeProps) {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return null;

  const Icon = iconMap[category.icon];

  return (
    <span className="category-badge">
      {Icon && <Icon size={12} />}
      {category.name}
    </span>
  );
}
