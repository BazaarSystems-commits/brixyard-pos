# Fixes Applied (2026-10-29)

## Blockers fixed
1. **Icon component JSX** - All multi-element icons wrapped in `<>...</>` fragments. App now renders.
2. **Standalone app** - Full working app lives in `index.html` (CDN React + Babel). Open in browser to run.

## Logic & data fixed
- VAT calculated as `Math.round(subtotal * 0.18)` consistently
- Work Order line costs = catalog price × quantity
- Charge flow: validates payment method (1/2/3 only), checks stock, checks credit limit, reduces stock, updates outstanding, creates invoice
- Cart quantity is typeable; cannot exceed stock
- Delivery status labels correct (Ready for Dispatch / Dispatched / Delivered)
- Stock Transfer: different From/To required; filters by From location; updates stock
- Create Work Order actually appends to workOrders state and navigates
- Dashboard KPIs computed from live data (product count, low stock, stock value, sales)
- Statement outstanding matches customer.outstanding
- Invoice uses same catalog unit prices as Sales
- Linked delivery/invoice/WO use actual created IDs when available
- 3D viewer uses CSS `perspective: 1000px` class
- Search works on Sales and Inventory

## How to run
Open `index.html` in Chrome/Edge/Firefox, or `npx serve .`

Repo: https://github.com/BazaarSystems-commits/brixyard-pos
