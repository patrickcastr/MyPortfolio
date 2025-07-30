import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
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
  Plus,
  Filter,
  HelpCircle,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';

interface RegisterItem {
  id: string;
  facility: string;
  plant: string;
  asset: string;
  category: string;
  expiryDate: string;
  status: 'Open' | 'In Progress' | 'Closed' | 'Overdue';
  reviewed: boolean;
}

const mockData: RegisterItem[] = [
  {
    id: 'REG-001',
    facility: 'Main Plant',
    plant: 'Production Line A',
    asset: 'Pump 101',
    category: 'Mechanical',
    expiryDate: '2024-12-15',
    status: 'Open',
    reviewed: false,
  },
  {
    id: 'REG-002',
    facility: 'North Facility',
    plant: 'Production Line B',
    asset: 'Motor 205',
    category: 'Electrical',
    expiryDate: '2024-11-30',
    status: 'In Progress',
    reviewed: true,
  },
  {
    id: 'REG-003',
    facility: 'South Wing',
    plant: 'Quality Control',
    asset: 'Sensor Array',
    category: 'Instrumentation',
    expiryDate: '2024-10-20',
    status: 'Overdue',
    reviewed: false,
  },
  {
    id: 'REG-004',
    facility: 'Main Plant',
    plant: 'Production Line C',
    asset: 'Conveyor Belt',
    category: 'Mechanical',
    expiryDate: '2025-01-10',
    status: 'Closed',
    reviewed: true,
  },
  {
    id: 'REG-005',
    facility: 'East Building',
    plant: 'Packaging',
    asset: 'Robot Arm',
    category: 'Automation',
    expiryDate: '2024-12-05',
    status: 'Open',
    reviewed: false,
  },
];

const statusColors = {
  Open: 'bg-blue-100 text-blue-800',
  'In Progress': 'bg-yellow-100 text-yellow-800',
  Closed: 'bg-green-100 text-green-800',
  Overdue: 'bg-red-100 text-red-800',
};

export default function Register() {
  const [filters, setFilters] = React.useState({
    id: '',
    facility: '',
    plant: '',
    asset: '',
    category: '',
    status: '',
    reviewed: '',
  });

  const filteredData = mockData.filter((item) => {
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

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Register</h1>

        <div className="flex flex-wrap gap-4 mb-6">
          <Button
            onClick={clearFilters}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Clear Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            Help/Procedure
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New
          </Button>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          <Input
            placeholder="Filter by ID..."
            value={filters.id}
            onChange={(e) => handleFilterChange('id', e.target.value)}
          />
          <Input
            placeholder="Filter by Facility..."
            value={filters.facility}
            onChange={(e) => handleFilterChange('facility', e.target.value)}
          />
          <Input
            placeholder="Filter by Plant..."
            value={filters.plant}
            onChange={(e) => handleFilterChange('plant', e.target.value)}
          />
          <Input
            placeholder="Filter by Asset..."
            value={filters.asset}
            onChange={(e) => handleFilterChange('asset', e.target.value)}
          />
          <Input
            placeholder="Filter by Category..."
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          />
          <Select
            value={filters.status}
            onValueChange={(value) => handleFilterChange('status', value)}
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
            onValueChange={(value) => handleFilterChange('reviewed', value)}
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
      </div>

      {/* Table Section */}
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
              {filteredData.map((item) => (
                <TableRow key={item.id}>
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
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Edit className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-4 text-sm text-muted-foreground">
        Showing {filteredData.length} of {mockData.length} results
      </div>
    </div>
  );
}
