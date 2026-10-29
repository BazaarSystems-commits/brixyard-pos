# BrixYard POS – Bricks & Pavers (Tanzania)

Point-of-sale system for bricks, pavers, cement, sand and construction job work.

## Run immediately

1. Download the full package (zip) from the project artifacts / release
2. Open `index.html` in Chrome, Edge, or Firefox

Or:
```bash
npx serve .
```

## What’s fixed (latest)

| Issue | Fix |
|-------|-----|
| Icon JSX syntax error (app wouldn’t render) | All multi-path icons wrapped in fragments `<>...</>` |
| VAT math | `Math.round(subtotal * 0.18)` consistently |
| Charge did nothing | Validates method, checks stock & credit limit, reduces stock, updates outstanding, creates invoice |
| Cart qty only ±1 | Typeable quantity input with stock cap |
| Hardcoded KPIs | Computed from live products/invoices |
| Work Order costs | Catalog price × qty; VAT correct |
| Stock transfer | From≠To required; filters by location; updates stock |
| Create Work Order | Appends to state and navigates |
| Delivery status labels | Ready for Dispatch / Dispatched / Delivered |
| Search | Live filter on Sales & Inventory |
| 3D viewer | CSS perspective + rotate slider |

## Screens
Dashboard • Sales (POS) • Work Orders • Inventory • Stock Transfer • Customers • Deliveries • Tax Invoice

## GitHub
https://github.com/BazaarSystems-commits/brixyard-pos

The complete interactive `index.html` is in the downloadable zip (55KB+). Upload it over the repo `index.html` via the GitHub web UI if you want the full app in the repo root.
