# Animal Rescue NGO Website Template

> 🐾 **A production-ready, open-source template for animal rescue organizations in Brazil**

A modern, fully accessible static website template built specifically for Brazilian animal rescue NGOs. This template is ready to deploy on GitHub Pages with zero cost and requires only JSON file updates to maintain.

## Demo

🌐 **[View Live Demo](#)** *(Coming soon - deploy your own in 5 minutes!)*

## Why Use This Template?

✅ **Zero Coding Required** - Update animals and products by editing simple JSON files  
✅ **100% Free Hosting** - Deploy to GitHub Pages at no cost  
✅ **Brazilian-First** - Portuguese language (PT-BR) and Real (R$) currency  
✅ **Enterprise Security** - XSS protection, CSP, input validation  
✅ **Fully Accessible** - WCAG 2.1 Level AA compliant  
✅ **Mobile Optimized** - Responsive design for all devices  
✅ **WhatsApp Integration** - Direct product orders via WhatsApp  
✅ **SEO Ready** - Optimized for search engines and social media  

## Quick Start (5 Minutes)

### Step 1: Get the Template

**Option A: Use this Template (Recommended)**
1. Click the green "Use this template" button at the top of this repository
2. Name your repository (e.g., "minha-ong-resgate-animal")
3. Click "Create repository from template"

**Option B: Clone Repository**
```bash
git clone https://github.com/YOUR-USERNAME/ong-template-web-resgate-animal.git
cd ong-template-web-resgate-animal
```

### Step 2: Customize Your Content

1. **Update animal data** in `data/animals.json`
2. **Update product data** in `data/products.json`
3. **Add your photos** to `images/animals/` and `images/products/`
4. **Update contact info** in `index.html` (footer section)
5. **Change WhatsApp number** in `data/products.json`

### Step 3: Deploy to GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 2-3 minutes, then visit: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

🎉 **Done!** Your NGO website is now live and free forever!

---

## Features

### For Visitors
- **Animal Listings**: Browse available dogs and cats looking for homes
- **Advanced Filters**: Filter by type (dogs/cats) and availability status
- **Product Shop**: Purchase pet products to support the NGO
- **WhatsApp Orders**: One-click ordering via WhatsApp
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Accessibility**: Screen reader support, keyboard navigation

### For NGO Administrators
- **JSON-Only Updates**: No HTML/CSS/JavaScript knowledge needed
- **Local Image Support**: Upload your own animal/product photos
- **Easy Customization**: Change colors, text, and contact info
- **Comprehensive Documentation**: Step-by-step guides included
- **Security Built-in**: Protected against common web vulnerabilities

## Project Structure

```
ong/
├── data/
│   ├── animals.json                      # Animal data
│   └── products.json                     # Product data
├── images/
│   ├── animals/                          # Animal photos folder
│   ├── products/                         # Product photos folder
│   └── README.md                         # Image guidelines
├── scripts/
│   └── main.js                           # JavaScript functionality
├── styles/
│   └── main.css                          # CSS styling
├── index.html                            # Main HTML file
├── favicon.svg                           # Website icon
├── README.md                             # This file
├── SECURITY.md                           # Security documentation
└── WEB_STANDARDS.md                      # Web standards & accessibility
```

## Maintaining Your Website

### How to Update Content (No Coding Required!)

All content is managed through simple JSON files. You only need to:
1. Edit the JSON file
2. Commit the changes
3. Push to GitHub

The website updates automatically!

### Adding/Editing Animals

**File**: `data/animals.json`

```json
{
  "id": 1,
  "name": "Luna",                              // Nome do animal
  "type": "dog",                               // "dog" ou "cat"
  "breed": "Vira-lata (Mix Labrador)",         // Raça
  "age": "2 anos",                             // Idade
  "gender": "Fêmea",                           // "Macho" ou "Fêmea"
  "description": "Luna é uma menina doce...",  // Descrição
  "image": "images/animals/luna.jpg",          // Caminho da foto
  "status": "available"                        // "available" ou "adopted"
}
```

**Status Options:**
- `"available"` - Disponível para adoção (badge verde)
- `"adopted"` - Já adotado (badge azul)

### Adding/Editing Products

**File**: `data/products.json`

```json
{
  "id": 1,
  "name": "Coleira Personalizada",             // Nome do produto
  "category": "Acessórios",                    // Categoria
  "price": 45.00,                              // Preço em Reais
  "currency": "BRL",                           // Sempre "BRL"
  "description": "Coleira durável...",         // Descrição
  "image": "images/products/coleira.jpg",      // Caminho da foto
  "whatsapp": "+5511999999999"                 // Seu número do WhatsApp
}
```

**Product Categories:**
- `"Comida"` - Pet food
- `"Brinquedos"` - Toys
- `"Acessórios"` - Accessories (collars, leashes, etc.)
- `"Móveis"` - Furniture (beds, scratchers, etc.)

**Important:** 
- Replace `+5511999999999` with your actual WhatsApp number
- Keep the format: `+` followed by country code and number
- Example: `+5521987654321` for Rio de Janeiro

## Adding Your Own Photos

The template comes with **working demo images** from Unsplash. You can use them as-is or replace with your own photos.

### Using Your Own Local Images (Recommended)

1. **Add photos to the images folder:**
   - Animal photos: `images/animals/`
   - Product photos: `images/products/`

2. **Optimize your images** (recommended):
   - Resize to 800x600 pixels max
   - Compress to reduce file size (< 500KB ideal)
   - Use JPEG format for photos

3. **Update JSON files** with local paths:
   ```json
   "image": "images/animals/luna.jpg"
   ```

4. **Image naming tips:**
   - Use lowercase letters
   - Use hyphens instead of spaces
   - Examples: `luna-labrador.jpg`, `coleira-azul.jpg`

### Using External Images (Unsplash)

The template **already uses Unsplash URLs** in the demo data:
```json
"image": "https://images.unsplash.com/photo-..."
```

These work immediately without any setup!

**Note:** For security, only Unsplash URLs and local `images/` paths are allowed.

### What Happens if Image is Missing?

✅ **No worries!** The website automatically shows a placeholder with "Imagem não disponível" (Image not available) if:
- The image file doesn't exist
- The URL is broken
- The path is incorrect

This means the site won't break - it degrades gracefully.

### Image Guidelines

See `images/README.md` for detailed guidelines including:
- Recommended file formats
- Optimal image sizes
- Compression tools
- Security considerations

## Deployment Options

### GitHub Pages (Recommended - FREE)
- **Cost**: $0/month
- **Setup**: 5 minutes
- **Custom domain**: Supported (optional)
- **SSL**: Automatic HTTPS
- **Bandwidth**: Unlimited for reasonable use

### Alternative Platforms (Also FREE)
- **Netlify**: `netlify.com` - Drag & drop deployment
- **Vercel**: `vercel.com` - Git integration
- **Cloudflare Pages**: `pages.cloudflare.com` - Global CDN

## Customization Guide

### Changing Your NGO Information

#### 1. Contact Information (Footer)
**File**: `index.html` (lines 155-176)

Find and replace:
```html
<p>Email: <a href="mailto:contato@resgateaanimal.org">contato@resgateaanimal.org</a></p>
<p>Telefone: <a href="tel:+5511999999999">+55 11 99999-9999</a></p>
```

#### 2. About Section
**File**: `index.html` (lines 136-151)

Replace the text in the "Sobre Nossa Missão" section with your NGO's story.

#### 3. Hero Section (Main Banner)
**File**: `index.html` (lines 75-85)

Customize the main headline and subtitle to match your NGO's message.

#### 4. Page Title & Description
**File**: `index.html` (lines 6, 53)

```html
<meta name="description" content="Your NGO description here">
<title>Your NGO Name - Save a Life Today</title>
```

### Changing Colors & Branding

**File**: `styles/main.css` (lines 10-26)

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Accent color */
    --text-dark: #1f2937;          /* Primary text */
    --text-light: #6b7280;         /* Secondary text */
}
```

**Popular Color Schemes for NGOs:**
- **Blue/Green**: `--primary-color: #0ea5e9; --secondary-color: #10b981;`
- **Purple/Pink**: `--primary-color: #a855f7; --secondary-color: #ec4899;`
- **Orange/Red**: `--primary-color: #f97316; --secondary-color: #dc2626;`

### Adding Your Logo

Replace the paw emoji in `index.html` (line 64):
```html
<h1>🐾 Resgate Animal</h1>
```

With an image:
```html
<h1><img src="images/logo.png" alt="Your NGO Name" style="height: 40px;"> Your NGO Name</h1>
```

## Technical Features

### Security (Enterprise-Grade)
- ✅ **XSS Prevention**: All user data rendered via DOM APIs
- ✅ **Content Security Policy**: Strict CSP headers
- ✅ **Input Validation**: Type checking and sanitization
- ✅ **Image URL Whitelisting**: Only trusted sources allowed
- ✅ **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- ✅ **HTTPS**: Automatic with GitHub Pages

### Accessibility (WCAG 2.1 Level AA)
- ♿ **Screen Reader Support**: Proper ARIA labels and semantic HTML
- ⌨️ **Keyboard Navigation**: Full Tab, Enter, Space key support
- 🎯 **Focus Indicators**: Clear 3px outline for all interactive elements
- 🔍 **Skip Links**: Jump to main content for keyboard users
- 🎨 **Color Contrast**: WCAG AA compliant ratios
- 📱 **Touch Targets**: Minimum 44x44px for mobile

### Performance
- ⚡ **Lazy Loading**: Images load on-demand
- 🗜️ **Compression**: Gzip enabled for all assets
- 💾 **Caching**: Optimized cache headers
- 🚀 **Fast Load**: Vanilla JavaScript, no heavy frameworks
- 📦 **Small Size**: ~50KB total (uncompressed)

### Mobile Responsive
- 📱 **Mobile-First**: Designed for small screens first
- 🖥️ **Breakpoints**: 480px, 768px, 1200px
- 👆 **Touch-Friendly**: Large buttons and tap targets
- 🔄 **Flexible Grid**: Auto-adjusting layouts

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Support & Documentation

### Included Documentation
- **README.md** (this file) - Quick start and usage guide
- **SECURITY.md** - Detailed security documentation and best practices
- **SECURITY_SUMMARY.md** - Security improvements summary
- **WEB_STANDARDS.md** - Accessibility checklist and WCAG compliance
- **images/README.md** - Image optimization guidelines

### Getting Help
If you need help using this template:
1. Check the documentation files listed above
2. Review the example JSON files in the `data/` folder
3. Open an issue on GitHub with your question

### Contributing
This is an open-source project. Contributions are welcome!
- Report bugs via GitHub Issues
- Submit feature requests
- Create pull requests with improvements

## Who Is This Template For?

✅ **Perfect for:**
- Animal rescue NGOs in Brazil
- Small to medium rescue organizations
- Volunteers with limited technical skills
- Organizations with zero budget for websites
- Groups needing quick deployment (same day!)

❌ **Not suitable for:**
- Large organizations needing complex features
- Sites requiring user authentication/login
- E-commerce with payment processing
- High-traffic sites (>100k visitors/month)

## License

This project is **open source** and **free to use** for:
- ✅ Non-profit organizations (NGOs)
- ✅ Animal rescue groups
- ✅ Charitable organizations
- ✅ Educational purposes

**MIT License** - Feel free to modify, distribute, and use for any non-commercial purpose.

---

## Template Info

**Version**: 1.0.0  
**Last Updated**: March 2026  
**Language**: Portuguese (PT-BR)  
**Currency**: Brazilian Real (R$)  
**License**: MIT  

**Built with ❤️ for Brazilian animal rescue organizations**

If this template helped your NGO, please consider:
- ⭐ Starring this repository
- 🐦 Sharing with other rescue organizations
- 📝 Providing feedback for improvements

---

**Template Repository**: [github.com/YOUR-USERNAME/ong-template-web-resgate-animal](https://github.com/YOUR-USERNAME/ong-template-web-resgate-animal)
