'use client';

import { OutputType } from '@/data';
import { FileOutput } from 'lucide-react';

interface MetadataFiltersProps {
  selectedOutputType: OutputType | 'all';
  onOutputTypeChange: (type: OutputType | 'all') => void;
}

const outputTypes: { id: OutputType | 'all'; label: string }[] = [
  { id: 'all', label: 'All Types' },
  { id: 'risk-report', label: 'Risk Report' },
  { id: 'clause-list', label: 'Clause List' },
  { id: 'compliance-checklist', label: 'Compliance Checklist' },
  { id: 'comparison-matrix', label: 'Comparison Matrix' },
  { id: 'executive-summary', label: 'Executive Summary' },
  { id: 'negotiation-brief', label: 'Negotiation Brief' },
  { id: 'other', label: 'Other' },
];

export function MetadataFilters({
  selectedOutputType,
  onOutputTypeChange,
}: MetadataFiltersProps) {
  return (
    <div>
      {/* Output Type Filter */}
      <div>
        <div className="flex items-center gap-2 text-text-tertiary mb-3">
          <FileOutput size={14} />
          <h4 className="text-xs font-medium uppercase tracking-wider">Output Type</h4>
        </div>
        <select
          value={selectedOutputType}
          onChange={(e) => onOutputTypeChange(e.target.value as OutputType | 'all')}
          className="w-full px-3 py-2 text-sm bg-background border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-text-secondary transition-colors"
        >
          {outputTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
