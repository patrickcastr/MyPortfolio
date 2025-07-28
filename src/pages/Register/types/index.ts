export interface RegisterItem {
  id: string;
  facility: string;
  plant: string;
  asset: string;
  category: string;
  expiryDate: string;
  status: 'Open' | 'In Progress' | 'Closed' | 'Overdue';
  reviewed: boolean;
}

export interface RegisterFilters {
  id: string;
  facility: string;
  plant: string;
  asset: string;
  category: string;
  status: string;
  reviewed: string;
}
