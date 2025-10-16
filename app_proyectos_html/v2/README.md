# Kbordados Quotation Template - Version 2

**Modern, Premium Design** - Inspired by Nike, Apple, and Tesla's minimalist aesthetics.

---

## 🎨 What's New in V2

### Design Improvements
- **Modern Minimalist Design** - Clean, spacious layout with premium feel
- **Better Typography** - System fonts for crisp rendering across all devices
- **Gradient Background** - Subtle gradient for visual depth
- **Card-Based Layout** - Rounded corners and soft shadows
- **Enhanced Header** - Larger logo, better information hierarchy
- **Improved Tables** - Less borders, more white space, hover effects
- **Responsive Grid** - Image cards with hover animations
- **Better Color Contrast** - Improved readability
- **Print-Optimized** - Clean output when printing or converting to PDF

### Visual Design Elements
- Gradient background from light gray to blue-gray
- White container with large border radius and shadow
- Navy blue gradient header with decorative circle
- Logo in white rounded card
- Grid-based information display
- Minimal table borders with subtle separators
- Hover effects on product rows
- Card-based image gallery with shadows
- Modern summary table with clear visual hierarchy

---

## 📂 Files Overview

Files are numbered in the order they are used during assembly:

### `1-product-row.html`
Enhanced product row with bold styling for key numbers (quantity, price, total).

### `2-images-section.html`
Modern card-based image grid with hover effects and responsive layout. Includes section title "Referencias Visuales".

### `3-terms-conditions.html`
Redesigned terms table with better formatting, icons, and improved readability.

### `4-template.html`
Complete redesigned template with modern styling, gradients, and professional layout.

---

## 🔄 How the Template System Works

```
┌─────────────────────────────────────────┐
│      4-template.html (MAIN)             │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ Header: Gradient Navy Background  │ │
│  │ ┌─────────────────────────────┐   │ │
│  │ │ Logo + KBORDADOS Name       │   │ │
│  │ └─────────────────────────────┘   │ │
│  │ Grid Layout:                      │ │
│  │ - Cotización #{{ID}}              │ │
│  │ - Fecha: {{fecha}}                │ │
│  │ - Cliente: {{cliente}}            │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ Products Table (Minimal Design)   │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │ {{productos}} ◄─────────────┼─┼─┼─── 1-product-row.html (repeated)
│  │  │  • Bold quantities & prices │ │ │        - Enhanced styling
│  │  │  • Hover effects            │ │ │
│  │  └─────────────────────────────┘ │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ Summary Card (Right Aligned)      │ │
│  │ - {{subtotal}}                    │ │
│  │ - {{iva}}                         │ │
│  │ - {{total}} (Large, Bold)         │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ {{imagenes}} ◄────────────────────┼─┼─── 2-images-section.html
│  │  • Card-based grid                │ │        - Hover animations
│  │  • Responsive layout              │ │        - Soft shadows
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ {{tabla_terminos}} ◄──────────────┼─┼─── 3-terms-conditions.html
│  │  • Modern 2-column layout         │ │        - Better formatting
│  │  • Icons (📱, ✉️)                 │ │        - Enhanced readability
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## 🔢 Assembly Order

The files are numbered in the order they are used during quotation assembly:

```
1️⃣  1-product-row.html
    ↓ (Fill for each product, concatenate)
    
2️⃣  2-images-section.html
    ↓ (Inject into {{imagenes}})
    
3️⃣  3-terms-conditions.html
    ↓ (Inject into {{tabla_terminos}})
    
4️⃣  4-template.html (MAIN)
    ↓ (Receives all above components)
    
✅  Final HTML output
```

---

## 🎯 Step-by-Step Assembly Guide

### Step 1: Build Product Rows
For each product in your quotation:
```html
<!-- 1-product-row.html -->
<tr>
    <td><strong>{{cantidad}}</strong></td>
    <td>{{tipo}}</td>
    <td>{{descripcion}}</td>
    <td>{{talla}}</td>
    <td>{{caracteristicas}}</td>
    <td><strong>{{precio}}</strong></td>
    <td><strong>{{total}}</strong></td>
</tr>
```
**Fill in:** cantidad, tipo, descripción, talla, características, precio, total  
**Concatenate:** All product rows into a single string

### Step 2: Prepare Images
The images section now has a modern card-based design with section title:
```html
<!-- 2-images-section.html -->
<div class="reference-images">
    <h3 class="section-title">Referencias Visuales</h3>
    <div class="images-grid">
        <div class="image-card">
            <img src="{{image_1}}" alt="Referencia 1">
        </div>
        <!-- ... more images ... -->
    </div>
</div>
```
**Fill in:** image_1, image_2, image_3, image_4 URLs

### Step 3: Prepare Terms
```html
<!-- 3-terms-conditions.html -->
<table class="terms-table">
    <tr>
        <td class="terms-label">Tiempo de Entrega</td>
        <td class="terms-value">{{tiempo_entrega}}</td>
    </tr>
    <!-- ... more terms ... -->
</table>
```
**Fill in:** tiempo_entrega

### Step 4: Assemble Main Template
The main template provides all the modern styling and structure. Simply inject the components and fill placeholders.

**Fill in:** ID, fecha, cliente, subtotal, iva, total

---

## 📊 Complete Placeholder Reference

### Level 1 - Main Template (`4-template.html`)
- `{{ID}}` - Quotation ID
- `{{fecha}}` - Quotation date
- `{{cliente}}` - Client name
- `{{productos}}` - Product rows (from 1-product-row.html × N)
- `{{subtotal}}` - Subtotal amount
- `{{iva}}` - IVA/tax amount
- `{{total}}` - Total amount
- `{{imagenes}}` - Images section (from 2-images-section.html)
- `{{tabla_terminos}}` - Terms and conditions (from 3-terms-conditions.html)

### Level 2 - Product Row (`1-product-row.html`)
- `{{cantidad}}` - Quantity
- `{{tipo}}` - Product type
- `{{descripcion}}` - Description
- `{{talla}}` - Size
- `{{caracteristicas}}` - Characteristics/features
- `{{precio}}` - Unit price
- `{{total}}` - Line total

### Level 3 - Images Section (`2-images-section.html`)
- `{{image_1}}` - Image URL 1
- `{{image_2}}` - Image URL 2
- `{{image_3}}` - Image URL 3
- `{{image_4}}` - Image URL 4

### Level 4 - Terms Section (`3-terms-conditions.html`)
- `{{tiempo_entrega}}` - Delivery timeframe

---

## 🎨 Design System V2

### Color Palette
- **Primary**: `#2C345C` (Navy Blue) - Brand color
- **Primary Dark**: `#1a1f3a` (Dark Navy) - Gradient accent
- **Text Primary**: `#1a1a1a` (Near Black) - Main text
- **Text Secondary**: `#2c3e50` (Dark Slate) - Secondary text
- **Text Muted**: `#5a6c7d` (Muted Blue) - Labels
- **Background**: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`
- **Surface**: `#ffffff` (White) - Cards and containers
- **Surface Light**: `#f8f9fb` (Off White) - Table headers, backgrounds
- **Border**: `#eef0f4` (Very Light Gray) - Subtle dividers
- **Border Medium**: `#e0e4ea` (Light Gray) - Medium dividers

### Typography
- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif
- **Company Name**: 32px, Bold, -0.5px letter spacing
- **Section Titles**: 24px, Bold, -0.5px letter spacing
- **Info Labels**: 11px, Uppercase, 1.5px letter spacing
- **Info Values**: 20px, Semi-bold, -0.3px letter spacing
- **Table Headers**: 12px, Semi-bold, Uppercase, 1px letter spacing
- **Body Text**: 14px, Normal, 1.6 line height

### Spacing
- **Container Padding**: 60px (desktop) / 30px (mobile)
- **Section Spacing**: 60px between major sections
- **Card Padding**: 30px
- **Table Cell Padding**: 20px vertical, 16px horizontal
- **Grid Gap**: 24px (images), 30px (info cards)

### Shadows & Effects
- **Container Shadow**: `0 20px 60px rgba(0, 0, 0, 0.08)`
- **Card Shadow**: `0 4px 12px rgba(0, 0, 0, 0.03)`
- **Card Hover**: `0 8px 24px rgba(0, 0, 0, 0.08)` + translateY(-4px)
- **Border Radius**: 16px (container), 12px (cards, tables)

### Responsive Breakpoints
- **Mobile**: max-width: 768px
  - Reduced padding
  - Single column grids
  - Smaller images
  - Adjusted font sizes

---

## ✅ Final Assembly Checklist

- [ ] Product rows created and concatenated (from file 1)
- [ ] Image URLs filled in (from file 2)
- [ ] Delivery time filled in (from file 3)
- [ ] All main template placeholders filled (in file 4)
- [ ] Components injected in correct order
- [ ] Test responsive layout on mobile
- [ ] Test print/PDF output
- [ ] Final HTML generated

---

## 🆚 V1 vs V2 Comparison

| Feature | V1 | V2 |
|---------|----|----|
| Design Style | Traditional, table-based | Modern, minimalist, card-based |
| Colors | Solid navy blue | Gradients, subtle backgrounds |
| Typography | Inter font, standard sizing | System fonts, better hierarchy |
| Spacing | Compact | Generous white space |
| Logo | Small (60px) | Larger (80px) in white card |
| Tables | Heavy borders | Minimal borders, hover effects |
| Images | Simple 4-column table | Card grid with hover animations |
| Summary | Right-aligned table | Styled card with clear hierarchy |
| Responsive | Basic | Fully responsive grid layouts |
| Print Support | Basic | Optimized print styles |
| Overall Feel | Professional | Premium, modern, sophisticated |

