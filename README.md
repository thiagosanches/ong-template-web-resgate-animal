# Animal Rescue NGO Website

A modern, static website for an animal rescue organization built to be hosted on GitHub Pages.

## Features

- **Animal Listings**: Browse available dogs and cats looking for homes
- **Filter System**: Filter animals by type (dogs/cats) and availability status
- **Product Shop**: Browse and purchase pet products to support the NGO
- **WhatsApp Integration**: Direct contact via WhatsApp for product orders
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations

## Project Structure

```
ong/
├── data/
│   ├── animals.json                      # Animal data
│   ├── products.json                     # Product data
│   ├── animals-local-images-example.json # Example with local images
│   └── products-local-images-example.json # Example with local images
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
├── .htaccess                             # Apache security config
├── _headers                              # GitHub Pages headers
├── README.md                             # This file
├── SECURITY.md                           # Security documentation
└── WEB_STANDARDS.md                      # Web standards & accessibility
```

## How to Update Content

### Adding/Editing Animals

Edit `data/animals.json` with the following structure:

```json
{
  "id": 1,
  "name": "Animal Name",
  "type": "dog",
  "breed": "Breed Name",
  "age": "X anos",
  "gender": "Macho/Fêmea",
  "description": "Description of the animal",
  "image": "images/animals/photo.jpg",
  "status": "available"
}
```

### Adding/Editing Products

Edit `data/products.json` with the following structure:

```json
{
  "id": 1,
  "name": "Product Name",
  "category": "Category",
  "price": 25.00,
  "currency": "BRL",
  "description": "Product description",
  "image": "images/products/photo.jpg",
  "whatsapp": "+5511999999999"
}
```

**Important**: Update the WhatsApp number in products.json to your actual contact number.

## Adding Your Own Photos

### Option 1: Local Images (Recommended)

1. **Add photos to the images folder:**
   - Animal photos: `images/animals/`
   - Product photos: `images/products/`

2. **Optimize your images** (recommended):
   - Resize to 800x600 pixels
   - Compress to reduce file size (< 500KB)
   - Use JPEG format for photos

3. **Update JSON files** with local paths:
   ```json
   "image": "images/animals/luna.jpg"
   ```

4. **Image naming tips:**
   - Use lowercase letters
   - Use hyphens instead of spaces
   - Examples: `luna-labrador.jpg`, `coleira-azul.jpg`

### Option 2: External Images (Unsplash)

You can still use Unsplash URLs if you prefer:
```json
"image": "https://images.unsplash.com/photo-..."
```

**Note:** For security, only Unsplash URLs and local images are allowed.

### Image Guidelines

See `images/README.md` for detailed guidelines including:
- Recommended file formats
- Optimal image sizes
- Compression tools
- Security considerations

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Under "Source", select "main" branch
5. Click Save
6. Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Customization

### Changing Colors

Edit the CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* Add your custom colors here */
}
```

### Changing Content

- **Contact Information**: Edit the footer section in `index.html`
- **About Section**: Edit the about section in `index.html`
- **Hero Section**: Edit the hero content in `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use by NGOs and rescue organizations.
# ong-template-web-resgate-animal
