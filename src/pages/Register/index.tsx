import RegisterHeader from './components/RegisterHeader';
import RegisterFilters from './components/RegisterFilters';
import RegisterTable from './components/RegisterTable';
import { useRegisterData } from './hooks/useRegisterData';

export default function Register() {
  const {
    data,
    filteredData,
    filters,
    handleFilterChange,
    clearFilters,
    handleNewItem,
    handleEditItem,
    handleDeleteItem,
    handleViewItem
  } = useRegisterData();

  return (
    <div className="container mx-auto py-8 px-4">
      <RegisterHeader 
        onClearFilters={clearFilters}
        onNewItem={handleNewItem}
      />
      
      <RegisterFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      
      <RegisterTable 
        data={filteredData}
        totalCount={data.length}
        onEdit={handleEditItem}
        onDelete={handleDeleteItem}
        onView={handleViewItem}
      />
    </div>
  );
}
