import { Button } from '@/components/ui/button';
import { Filter, HelpCircle, Plus } from 'lucide-react';

interface RegisterHeaderProps {
  onClearFilters: () => void;
  onNewItem: () => void;
}

export default function RegisterHeader({ onClearFilters, onNewItem }: RegisterHeaderProps) {
  const handleHelp = () => {
    // TODO: Implement help/procedure modal
    console.log('View procedure clicked');
  };

  return (
    <div className="mb-6">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Manage records and workflow follow-up</h2>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <Button 
          onClick={onClearFilters} 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Clear Filters
        </Button>
        <Button 
          onClick={handleHelp}
          variant="outline" 
          className="flex items-center gap-2"
        >
          <HelpCircle className="h-4 w-4" />
          View Procedure
        </Button>
        <Button 
          onClick={onNewItem}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New Record
        </Button>
      </div>
    </div>
  );
}
