export interface Product {
  id: string
  name: string
  sku: string
  category: string
  unit: string
  price: number
  stock: number
  reorderLevel: number
  location: string
  conversion?: string
  image?: string
}

export interface CartItem {
  product: Product
  quantity: number
  unit: string
}

export interface Customer {
  id: string
  name: string
  phone: string
  tin?: string
  creditLimit: number
  outstanding: number
  address?: string
  email?: string
}

export interface WorkOrderMaterial {
  name: string
  unit: string
  quantity: number
  ratio: string
  waste: number
  cost: number
}

export interface WorkOrder {
  id: string
  customer: string
  customerId?: string
  siteAddress: string
  description: string
  materials: WorkOrderMaterial[]
  labour: {
    fundis: number
    days: number
    dailyRate: number
  }
  status: 'Draft' | 'Confirmed' | 'In Progress' | 'Completed'
  total: number
  createdAt: string
}

export interface DeliveryNote {
  id: string
  workOrderId?: string
  invoiceId?: string
  customer: string
  address: string
  vehicle: string
  driver: string
  driverPhone: string
  items: { description: string; unit: string; quantity: number; remarks?: string }[]
  status: 'Ready' | 'Dispatched' | 'Delivered'
  scheduledAt: string
  notes?: string
}

export interface Invoice {
  id: string
  customer: string
  customerTin?: string
  date: string
  items: {
    description: string
    quantity: number
    unit: string
    unitPrice: number
    amount: number
    vat: number
  }[]
  subtotal: number
  vat: number
  total: number
  status: 'Paid' | 'Pending' | 'Overdue'
  fiscalCode?: string
  linkedWorkOrder?: string
  linkedDelivery?: string
}

export type Page =
  | 'dashboard'
  | 'sales'
  | 'workorders'
  | 'inventory'
  | 'customers'
  | 'deliveries'
  | 'invoices'
  | 'stocktransfer'
  | 'settings'
