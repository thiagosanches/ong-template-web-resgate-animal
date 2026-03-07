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
│   ├── animals.json      # Animal data
│   └── products.json     # Product data
├── scripts/
│   └── main.js          # JavaScript functionality
├── styles/
│   └── main.css         # CSS styling
├── index.html           # Main HTML file
└── README.md           # This file
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
  "age": "X years",
  "gender": "Male/Female",
  "description": "Description of the animal",
  "image": "https://image-url.com/image.jpg",
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
  "currency": "USD",
  "description": "Product description",
  "image": "https://image-url.com/image.jpg",
  "whatsapp": "+5511999999999"
}
```

**Important**: Update the WhatsApp number in products.json to your actual contact number.

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
