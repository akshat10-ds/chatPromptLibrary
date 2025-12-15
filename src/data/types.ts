export type CategoryId =
  | 'risk-analysis'
  | 'clause-extraction'
  | 'compliance-review'
  | 'contract-comparison'
  | 'summary-insights'
  | 'negotiation-support';

export type ToolId = 'docusign-ai' | 'claude' | 'chatgpt' | 'gemini' | 'other';

export type OutputType =
  | 'risk-report'
  | 'clause-list'
  | 'compliance-checklist'
  | 'comparison-matrix'
  | 'executive-summary'
  | 'negotiation-brief'
  | 'other';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type SortOption = 'newest' | 'oldest' | 'most-upvoted' | 'alphabetical';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  // Extended editorial content
  longDescription?: string;
  useCases?: string[];
  benefits?: string[];
  bestFor?: string[];
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: CategoryId;
  tags: string[];
  author?: string;
  exampleOutput?: string;
  urls?: string[];
  // Metadata fields
  tools?: ToolId[];
  outputType?: OutputType;
  difficulty?: DifficultyLevel;
  useCount?: number;
  createdAt?: string;
  // Marketing presentation fields
  valueProp?: string;
  timeToComplete?: string;
  bestFor?: string[];
  relatedPrompts?: string[];
}

export interface FilterState {
  search: string;
  category: CategoryId | 'all';
  tags: string[];
  tools?: ToolId[];
  outputType?: OutputType | 'all';
  difficulty?: DifficultyLevel | 'all';
}
