import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RegisterFilters as FilterType } from '../types';

interface RegisterFiltersProps {
  filters: FilterType;
  onFilterChange: (field: keyof FilterType, value: string) => void;
}

export default function RegisterFilters({ filters, onFilterChange }: RegisterFiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
      <Input
        placeholder="Filter by ID..."
        value={filters.id}
        onChange={(e) => onFilterChange('id', e.target.value)}
      />
      <Input
        placeholder="Filter by Facility..."
        value={filters.facility}
        onChange={(e) => onFilterChange('facility', e.target.value)}
      />
      <Input
        placeholder="Filter by Plant..."
        value={filters.plant}
        onChange={(e) => onFilterChange('plant', e.target.value)}
      />
      <Input
        placeholder="Filter by Asset..."
        value={filters.asset}
        onChange={(e) => onFilterChange('asset', e.target.value)}
      />
      <Input
        placeholder="Filter by Category..."
        value={filters.category}
        onChange={(e) => onFilterChange('category', e.target.value)}
      />
      <Select 
        value={filters.status} 
        onValueChange={(value) => onFilterChange('status', value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="All Statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Statuses</SelectItem>
          <SelectItem value="Open">Open</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Closed">Closed</SelectItem>
          <SelectItem value="Overdue">Overdue</SelectItem>
        </SelectContent>
      </Select>
      <Select 
        value={filters.reviewed} 
        onValueChange={(value) => onFilterChange('reviewed', value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Review Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Reviews</SelectItem>
          <SelectItem value="true">Reviewed</SelectItem>
          <SelectItem value="false">Not Reviewed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
