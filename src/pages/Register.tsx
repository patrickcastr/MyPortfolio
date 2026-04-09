import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Check,
  Edit,
  Eye,
  Filter,
  HelpCircle,
  MoreHorizontal,
  Plus,
  Trash2,
  X,
} from 'lucide-react'

interface RegisterItem {
  id: string
  facility: string
  plant: string
  asset: string
  category: string
  dueDate: string
  status: 'Open' | 'In Progress' | 'Closed' | 'Overdue'
  reviewed: boolean
}

const mockData: RegisterItem[] = [
  {
    id: 'REG-001',
    facility: 'Main Plant',
    plant: 'Production Line A',
    asset: 'Pump 101',
    category: 'Mechanical',
    dueDate: '2026-06-15',
    status: 'Open',
    reviewed: false,
  },
  {
    id: 'REG-002',
    facility: 'North Facility',
    plant: 'Production Line B',
    asset: 'Motor 205',
    category: 'Electrical',
    dueDate: '2026-05-30',
    status: 'In Progress',
    reviewed: true,
  },
  {
    id: 'REG-003',
    facility: 'South Wing',
    plant: 'Quality Control',
    asset: 'Sensor Array',
    category: 'Instrumentation',
    dueDate: '2026-04-20',
    status: 'Overdue',
    reviewed: false,
  },
  {
    id: 'REG-004',
    facility: 'Main Plant',
    plant: 'Production Line C',
    asset: 'Conveyor Belt',
    category: 'Mechanical',
    dueDate: '2026-07-10',
    status: 'Closed',
    reviewed: true,
  },
  {
    id: 'REG-005',
    facility: 'East Building',
    plant: 'Packaging',
    asset: 'Robot Arm',
    category: 'Automation',
    dueDate: '2026-06-05',
    status: 'Open',
    reviewed: false,
  },
]

const statusColors = {
  Open: 'bg-blue-100 text-blue-800',
  'In Progress': 'bg-yellow-100 text-yellow-800',
  Closed: 'bg-green-100 text-green-800',
  Overdue: 'bg-red-100 text-red-800',
}

export default function Register() {
  const [filters, setFilters] = React.useState({
    id: '',
    facility: '',
    plant: '',
    asset: '',
    category: '',
    status: '',
    reviewed: '',
  })

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
    )
  })

  const clearFilters = () => {
    setFilters({
      id: '',
      facility: '',
      plant: '',
      asset: '',
      category: '',
      status: '',
      reviewed: '',
    })
  }

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl border border-white/30 bg-white/70 p-8 shadow-xl backdrop-blur-md">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Kraftylytix Demo</p>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Operations Register</h1>
          <p className="max-w-3xl text-gray-600">
            A sample internal tool for tracking issues, due dates, review status, and action ownership across
            operational teams. This is the kind of workflow support application Kraftylytix builds for businesses
            replacing fragmented spreadsheets and manual follow-up.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-white/30 bg-white/80 p-6 shadow-xl backdrop-blur-md">
          <div className="mb-6 flex flex-wrap gap-4">
            <Button onClick={clearFilters} variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Clear Filters
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              View Procedure
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Record
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <Input
              placeholder="Search by ID..."
              value={filters.id}
              onChange={(e) => handleFilterChange('id', e.target.value)}
            />
            <Input
              placeholder="Search by facility..."
              value={filters.facility}
              onChange={(e) => handleFilterChange('facility', e.target.value)}
            />
            <Input
              placeholder="Search by plant..."
              value={filters.plant}
              onChange={(e) => handleFilterChange('plant', e.target.value)}
            />
            <Input
              placeholder="Search by asset..."
              value={filters.asset}
              onChange={(e) => handleFilterChange('asset', e.target.value)}
            />
            <Input
              placeholder="Search by category..."
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            />
            <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
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
            <Select value={filters.reviewed} onValueChange={(value) => handleFilterChange('reviewed', value)}>
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

        <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/80 shadow-xl backdrop-blur-md">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="sticky top-0 bg-background">
                <TableRow>
                  <TableHead className="min-w-[100px]">ID</TableHead>
                  <TableHead className="min-w-[120px]">Facility</TableHead>
                  <TableHead className="min-w-[120px]">Plant</TableHead>
                  <TableHead className="min-w-[120px]">Asset</TableHead>
                  <TableHead className="min-w-[120px]">Category</TableHead>
                  <TableHead className="min-w-[120px]">Due Date</TableHead>
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
                    <TableCell>{new Date(item.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge className={statusColors[item.status]}>{item.status}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {item.reviewed ? (
                        <Check className="mx-auto h-4 w-4 text-green-500" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-red-500" />
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

        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Showing {filteredData.length} of {mockData.length} records
          </span>
          <span>Example internal platform by Kraftylytix</span>
        </div>
      </div>
    </div>
  )
}
