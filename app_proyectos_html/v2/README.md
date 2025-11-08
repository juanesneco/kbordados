# Kbordados Quotation Template - Version 2

**Apple & Nike-Inspired Minimalist Design** - Clean, refined, and professional.

---

## 🎨 Design Philosophy

V2 follows the design principles of **Apple and Nike**: maximum clarity with minimal visual elements, generous whitespace, refined typography, and subtle interactions. The design focuses on content hierarchy and readability while maintaining a premium, modern aesthetic.

### Core Design Principles
1. **Whitespace as a Design Element** - Generous padding creates breathing room
2. **Typography-First** - SF Pro Display (Apple's font) with careful hierarchy
3. **Minimal Borders** - Subtle dividers instead of heavy borders
4. **Monochromatic Palette** - Grays and blacks with one accent color
5. **Subtle Shadows** - Almost imperceptible depth (0.04-0.06 opacity)
6. **Clean Interactions** - Smooth hover effects and transitions

### Design Improvements
- ✨ **Minimalist Aesthetic** - Inspired by Apple.com and Nike.com
- 📝 **Refined Typography** - SF Pro Display with optimized letter-spacing
- 🎨 **Monochromatic Colors** - Apple's signature gray palette (#f5f5f7, #1d1d1f, #86868b)
- 🔲 **Borderless Tables** - Clean rows with subtle dividers only
- 🌊 **Gradient Header** - Dark to blue gradient for visual depth
- 📏 **Perfect Spacing** - Calculated padding for optimal readability
- 💫 **Smooth Animations** - Subtle hover effects and transitions
- 🖨️ **A4 Export Optimized** - Professional PDF output

### Visual Design Elements
- Apple-gray background (#f5f5f7)
- White container with subtle shadow (0.06 opacity)
- Gradient header (black #1d1d1f → navy #2C345C)
- Logo in semi-transparent white card with hover lift
- Borderless tables with transparent headers
- Minimal dividers in light gray (#f5f5f7)
- Hover effects with smooth 0.15s transitions
- Light background cards (#fafafa) for summary and terms

---

## 🖨️ A4 Export System - Technical Overview

### How It Works

The template uses a **responsive-on-screen, A4-on-print** approach. This means:

**📱 On Screen (Mobile/Desktop):**
- Template is fully responsive and adapts to any screen size
- Uses percentage-based widths (`width: 100%`, `max-width: 1000px`)
- Content reflows naturally for optimal viewing on all devices
- Mobile-friendly with adjusted padding and font sizes at 768px breakpoint

**🖨️ On Print/Export:**
- Template locks to exact A4 dimensions (210mm × 297mm)
- Uses `@media print` CSS to enforce A4 format
- Automatically adjusts all spacing to fit on a single page
- Preserves colors and gradients with `print-color-adjust: exact`

### Technical Implementation

```css
/* Screen View - Responsive */
.container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
}

/* Print/Export - Fixed A4 */
@media print {
    @page {
        size: A4;
        margin: 0;
    }
    
    .container {
        width: 210mm;
        min-height: 297mm;
        max-width: 100%;
    }
}
```

### How to Export to A4 Format

#### Method 1: Browser Print (Recommended)
1. Open the HTML file in any modern browser (Chrome, Safari, Firefox, Edge)
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac) to open print dialog
3. Select "Save as PDF" as destination
4. **Important Settings:**
   - Paper size: **A4**
   - Margins: **None** or **Minimum**
   - Background graphics: **Enabled** ✓
   - Headers/Footers: **Disabled**
5. Click "Save" or "Print"

#### Method 2: Chrome DevTools (Precise Control)
1. Open HTML file in Chrome
2. Press `F12` to open DevTools
3. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
4. Type "Print" and select "Show Print"
5. Configure:
   - Destination: "Save as PDF"
   - Paper size: "A4"
   - Margins: "None"
   - Background graphics: ✓
6. Click "Save"

#### Method 3: Puppeteer/Headless Chrome (Automated)
```javascript
const puppeteer = require('puppeteer');

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file:///path/to/4-template.html');
    await page.pdf({
        path: 'quotation.pdf',
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    await browser.close();
}
```

### Why This Approach?

**Advantages:**
- ✅ **Lower Export Costs** - Simple responsive layout requires less processing
- ✅ **Better Mobile Experience** - Content adapts to phone screens naturally
- ✅ **Consistent A4 Output** - Always perfect when printed or exported
- ✅ **No Cropping** - Content fits perfectly on A4 without horizontal scroll
- ✅ **One Template** - Same file works for both screen viewing and PDF export

**Key Technical Details:**
- Viewport: `width=device-width, initial-scale=1.0` (standard responsive)
- Container: Flexible width on screen, fixed 210mm on print
- Fonts: System fonts (`-apple-system`, SF Pro Display) for fast rendering
- Spacing: Optimized to fit all content on a single A4 page (297mm height)
- Colors: Preserved in print with `-webkit-print-color-adjust: exact`

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

## 🎨 Design System V2 - Apple/Nike Style

### Color Palette (Monochromatic)
Inspired by Apple's clean color system:

- **Background**: `#f5f5f7` (Apple Gray) - Page background
- **Surface**: `#ffffff` (Pure White) - Main container
- **Surface Elevated**: `#fafafa` (Off White) - Cards, summary, term labels
- **Text Primary**: `#1d1d1f` (Apple Black) - Main text, headings
- **Text Secondary**: `#86868b` (Apple Gray) - Labels, muted text
- **Divider**: `#f5f5f7` (Very Light) - Subtle table dividers
- **Divider Medium**: `#e8e8ed` (Light Gray) - Medium dividers
- **Divider Strong**: `#d2d2d7` (Medium Gray) - Strong dividers
- **Accent**: `#2C345C` (Navy Blue) - Brand color for gradient
- **Gradient Header**: `linear-gradient(135deg, #1d1d1f 0%, #2C345C 100%)`

### Typography (Apple-Style)
Using SF Pro Display (Apple's system font) with refined spacing:

- **Font Stack**: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`
- **Font Smoothing**: `-webkit-font-smoothing: antialiased` (smooth rendering)
- **Company Name**: 32px, Weight 600, -1px letter spacing
- **Section Titles**: 22px, Weight 600, -0.5px letter spacing
- **Info Labels**: 10px, Uppercase, Weight 500, 2px letter spacing, 60% opacity
- **Info Values**: 20px, Weight 500, -0.5px letter spacing
- **Table Headers**: 10px, Weight 500, Uppercase, 1.5px letter spacing
- **Table Body**: 13px, Weight 400
- **Body Text**: 13px, Weight 400, 1.5 line height

### Spacing (Optimized for A4)
Balanced spacing that fits content on a single A4 page:

- **Body Padding**: 20px / 10px
- **Container Padding**: 32px / 40px (top/bottom, left/right)
- **Header Padding**: 30px / 40px
- **Section Top Margin**: 32px (between major sections)
- **Section Bottom Margin**: 20px
- **Table Row Padding**: 14px / 12px (vertical, horizontal)
- **Table Header Padding**: 12px / 12px / 10px (top, h, bottom)
- **Summary Box Padding**: 20px / 24px
- **Terms Padding**: 16px / 18px

### Shadows & Effects (Subtle)
Barely visible depth - Apple style:

- **Container Shadow**: `0 4px 24px rgba(0, 0, 0, 0.06)` - Very subtle
- **Card Shadow**: `0 2px 12px rgba(0, 0, 0, 0.04)` - Almost invisible
- **Logo Shadow**: `0 8px 24px rgba(0, 0, 0, 0.12)` - Slightly stronger
- **Logo Hover**: `translateY(-2px)` + shadow increase
- **Table Row Hover**: `background: #fafafa` + `0.15s ease` transition
- **Border Radius**: 20px (container), 16px (logo), 12px (cards, tables)

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
| **Design Inspiration** | Traditional business doc | Apple & Nike minimalism |
| **Color System** | Navy blue + basic colors | Monochromatic Apple grays |
| **Typography** | Inter font, standard | SF Pro Display, refined |
| **Spacing** | Compact (fits in 1 page) | Optimized for A4 (1 page) |
| **Borders** | Heavy table borders | Borderless with subtle dividers |
| **Shadows** | Standard shadows | Ultra-subtle (0.04-0.06 opacity) |
| **Logo** | Small (60px), flat | Larger (160px), white card with hover |
| **Tables** | Bordered cells | Transparent headers, clean rows |
| **Header** | Solid navy | Black-to-blue gradient |
| **Summary** | Simple table | Light background card (#fafafa) |
| **Terms** | Dark blue labels | Light gray labels (#fafafa) |
| **Responsive** | Basic mobile support | Fully responsive + A4 print |
| **Export System** | Simple print | Responsive screen + A4 export |
| **Font Smoothing** | Standard | Antialiased (Apple-style) |
| **Interactions** | None | Smooth hover effects (0.15s) |
| **Overall Feel** | Professional | Premium, refined, minimal |





