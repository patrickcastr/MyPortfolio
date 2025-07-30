import { Button } from '@/components/ui/button';
import { Filter, HelpCircle, Plus } from 'lucide-react';

interface RegisterHeaderProps {
  onClearFilters: () => void;
  onNewItem: () => void;
}

export default function RegisterHeader({ onClearFilters, onNewItem }: RegisterHeaderProps) {
  const handleHelp = () => {
    // TODO: Implement help/procedure modal
    console.log('Help/Procedure clicked');
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-6">Technical Issues Register</h1>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <Button 
          onClick={onClearFilters} 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Clear Filter
        </Button>
        <Button 
          onClick={handleHelp}
          variant="outline" 
          className="flex items-center gap-2"
        >
          <HelpCircle className="h-4 w-4" />
          Help/Procedure
        </Button>
        <Button 
          onClick={onNewItem}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New
        </Button>
      </div>
    </div>
  );
}
