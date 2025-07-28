import { useState, useMemo } from 'react';
import { RegisterItem, RegisterFilters } from '../types';
import { mockData } from '../data/mockData';

export function useRegisterData() {
  const [data, setData] = useState<RegisterItem[]>(mockData);
  const [filters, setFilters] = useState<RegisterFilters>({
    id: '',
    facility: '',
    plant: '',
    asset: '',
    category: '',
    status: '',
    reviewed: '',
  });

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return (
        item.id.toLowerCase().includes(filters.id.toLowerCase()) &&
        item.facility.toLowerCase().includes(filters.facility.toLowerCase()) &&
        item.plant.toLowerCase().includes(filters.plant.toLowerCase()) &&
        item.asset.toLowerCase().includes(filters.asset.toLowerCase()) &&
        item.category.toLowerCase().includes(filters.category.toLowerCase()) &&
        (filters.status === '' || item.status === filters.status) &&
        (filters.reviewed === '' || 
         (filters.reviewed === 'true' && item.reviewed) ||
         (filters.reviewed === 'false' && !item.reviewed))
      );
    });
  }, [data, filters]);

  const handleFilterChange = (field: keyof RegisterFilters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const clearFilters = () => {
    setFilters({
      id: '',
      facility: '',
      plant: '',
      asset: '',
      category: '',
      status: '',
      reviewed: '',
    });
  };

  const handleNewItem = () => {
    // TODO: Implement new item creation
    console.log('New item clicked');
  };

  const handleEditItem = (item: RegisterItem) => {
    // TODO: Implement edit functionality
    console.log('Edit item:', item);
  };

  const handleDeleteItem = (id: string) => {
    // TODO: Implement delete with confirmation
    console.log('Delete item:', id);
    setData(prev => prev.filter(item => item.id !== id));
  };

  const handleViewItem = (item: RegisterItem) => {
    // TODO: Implement view item details
    console.log('View item:', item);
  };

  return {
    data,
    filteredData,
    filters,
    handleFilterChange,
    clearFilters,
    handleNewItem,
    handleEditItem,
    handleDeleteItem,
    handleViewItem,
  };
}
