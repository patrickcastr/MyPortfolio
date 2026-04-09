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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl border border-white/30 bg-white/70 p-8 shadow-xl backdrop-blur-md">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Kraftylytix Demo</p>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Operations Register</h1>
          <p className="max-w-3xl text-gray-600">
            A sample internal tool for tracking issues, due dates, review status, and action ownership across
            operational teams. This shows the kind of workflow support application Kraftylytix builds for businesses
            replacing fragmented spreadsheets and manual follow-up.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-white/30 bg-white/80 p-6 shadow-xl backdrop-blur-md">
          <RegisterHeader onClearFilters={clearFilters} onNewItem={handleNewItem} />

          <RegisterFilters filters={filters} onFilterChange={handleFilterChange} />

          <RegisterTable
            data={filteredData}
            totalCount={data.length}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            onView={handleViewItem}
          />
        </div>
      </div>
    </div>
  );
}
