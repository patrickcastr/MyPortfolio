import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Check,
  X,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';
import { RegisterItem } from '../types';

interface RegisterTableProps {
  data: RegisterItem[];
  totalCount: number;
  onEdit: (item: RegisterItem) => void;
  onDelete: (id: string) => void;
  onView: (item: RegisterItem) => void;
}

const statusColors = {
  Open: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  'In Progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  Closed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  Overdue: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
};

export default function RegisterTable({ 
  data, 
  totalCount, 
  onEdit, 
  onDelete, 
  onView 
}: RegisterTableProps) {
  return (
    <>
      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="sticky top-0 bg-background">
              <TableRow>
                <TableHead className="min-w-[100px]">ID</TableHead>
                <TableHead className="min-w-[120px]">Facility</TableHead>
                <TableHead className="min-w-[120px]">Plant</TableHead>
                <TableHead className="min-w-[120px]">Asset</TableHead>
                <TableHead className="min-w-[120px]">Category</TableHead>
                <TableHead className="min-w-[120px]">Expiry Date</TableHead>
                <TableHead className="min-w-[100px]">Status</TableHead>
                <TableHead className="min-w-[80px] text-center">Reviewed</TableHead>
                <TableHead className="min-w-[80px] text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                    No results found. Try adjusting your filters.
                  </TableCell>
                </TableRow>
              ) : (
                data.map((item) => (
                  <TableRow key={item.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.facility}</TableCell>
                    <TableCell>{item.plant}</TableCell>
                    <TableCell>{item.asset}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                      {new Date(item.expiryDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[item.status]}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {item.reviewed ? (
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem 
                            className="flex items-center gap-2"
                            onClick={() => onView(item)}
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="flex items-center gap-2"
                            onClick={() => onEdit(item)}
                          >
                            <Edit className="h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="flex items-center gap-2 text-red-600"
                            onClick={() => onDelete(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-4 text-sm text-muted-foreground">
        Showing {data.length} of {totalCount} results
      </div>
    </>
  );
}
