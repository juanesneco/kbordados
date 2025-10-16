# Kbordados Quotation Template - Version 1

This folder contains the HTML templates used to generate quotations (cotizaciones) for clients.

---

## 📂 Files Overview

Files are numbered in the order they are used during assembly:

### `1-product-row.html`
Template for individual product items. This row is repeated for each product in the quotation and inserted into the `{{productos}}` placeholder.

### `2-images-section.html`
A 4-column table for displaying product or reference images with placeholders for 4 image URLs.

### `3-terms-conditions.html`
The terms and conditions section that includes currency, payment terms, delivery time, exchange policy, banking information, and contact information.

### `4-template.html`
The main quotation template that includes the banner, products table, summary table, and placeholders for images and terms.

---

## 🔄 How the Template System Works

```
┌─────────────────────────────────────────┐
│      4-template.html (MAIN)             │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ Banner: Logo + Client Info        │ │
│  │ - {{ID}}                          │ │
│  │ - {{fecha}}                       │ │
│  │ - {{cliente}}                     │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ Products Table                    │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │ {{productos}} ◄─────────────┼─┼─┼─── 1-product-row.html (repeated)
│  │  │  • {{cantidad}}             │ │ │        - Cantidad
│  │  │  • {{tipo}}                 │ │ │        - Tipo
│  │  │  • {{descripcion}}          │ │ │        - Descripción
│  │  │  • {{talla}}                │ │ │        - Talla
│  │  │  • {{caracteristicas}}      │ │ │        - Características
│  │  │  • {{precio}}               │ │ │        - Precio
│  │  │  • {{total}}                │ │ │        - Total
│  │  └─────────────────────────────┘ │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ Summary Table                     │ │
│  │ - {{subtotal}}                    │ │
│  │ - {{iva}}                         │ │
│  │ - {{total}}                       │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ {{imagenes}} ◄────────────────────┼─┼─── 2-images-section.html
│  │  • {{image_1}}                    │ │        - 4-column image grid
│  │  • {{image_2}}                    │ │
│  │  • {{image_3}}                    │ │
│  │  • {{image_4}}                    │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ {{tabla_terminos}} ◄──────────────┼─┼─── 3-terms-conditions.html
│  │  • Moneda                         │ │        - Currency
│  │  • Forma de Pago                  │ │        - Payment terms
│  │  • {{tiempo_entrega}}             │ │        - Delivery time
│  │  • Política de Cambios            │ │        - Exchange policy
│  │  • Información Bancaria           │ │        - Banking info
│  │  • Información de Contacto        │ │        - Contact info
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
    <td>{{cantidad}}</td>
    <td>{{tipo}}</td>
    <td>{{descripcion}}</td>
    <td>{{talla}}</td>
    <td>{{caracteristicas}}</td>
    <td>{{precio}}</td>
    <td>{{total}}</td>
</tr>
```
**Fill in:** cantidad, tipo, descripción, talla, características, precio, total  
**Concatenate:** All product rows into a single string

### Step 2: Prepare Images
```html
<!-- 2-images-section.html -->
<table class="image-table">
    <tr>
        <td><img src="{{image_1}}" alt="Image 1"></td>
        <td><img src="{{image_2}}" alt="Image 2"></td>
        <td><img src="{{image_3}}" alt="Image 3"></td>
        <td><img src="{{image_4}}" alt="Image 4"></td>
    </tr>
</table>
```
**Fill in:** image_1, image_2, image_3, image_4 URLs

### Step 3: Prepare Terms
```html
<!-- 3-terms-conditions.html -->
<table>
    <!-- Moneda, Forma de Pago, etc. -->
    <tr>
        <td>Tiempo de Entrega</td>
        <td>{{tiempo_entrega}}</td>
    </tr>
    <!-- Rest of terms... -->
</table>
```
**Fill in:** tiempo_entrega

### Step 4: Assemble Main Template
```html
<!-- 4-template.html -->
<body>
    <div class="banner">
        <h3>ID: {{ID}}</h3>
        <h3>Fecha: {{fecha}}</h3>
        <h3>Cliente: {{cliente}}</h3>
    </div>
    
    <table>
        <tbody>
            {{productos}}  ← Inject Step 1 here
        </tbody>
    </table>
    
    <table class="summary-table">
        <td>{{subtotal}}</td>
        <td>{{iva}}</td>
        <td>{{total}}</td>
    </table>
    
    {{imagenes}}  ← Inject Step 2 here
    
    {{tabla_terminos}}  ← Inject Step 3 here
</body>
```
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

## 🎨 Design System

### Colors
- **Primary**: `#2C345C` (Navy Blue) - Headers, labels
- **Text**: `#1A202C` (Dark Gray) - Body text
- **Background**: `#FFFFFF` (White)
- **Borders**: `#DDD` (Light Gray)

### Typography
- **Font**: 'Inter', sans-serif
- **Body**: 14px
- **Headers**: Bold, centered, 32px margin

### Layout
- **Container Padding**: 20px
- **Cell Padding**: 8px
- **Table Spacing**: 32px bottom margin
- **Image Height**: 150px
- **Logo Width**: 60px

---

## ✅ Final Assembly Checklist

- [ ] Product rows created and concatenated (from file 1)
- [ ] Image URLs filled in (from file 2)
- [ ] Delivery time filled in (from file 3)
- [ ] All main template placeholders filled (in file 4)
- [ ] Components injected in correct order
- [ ] Final HTML generated
