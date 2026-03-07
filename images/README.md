# Images folder

This folder contains photos for the website.

## Folder Structure

```
images/
├── animals/     # Photos of animals for adoption
└── products/    # Photos of products for sale
```

## Image Guidelines

### File Format
- **Recommended:** JPEG (.jpg) for photos
- **Also supported:** PNG (.png), WebP (.webp)
- **Avoid:** Large uncompressed files

### File Naming
Use descriptive, lowercase names with hyphens:
- ✅ `luna-labrador.jpg`
- ✅ `max-pastor-alemao.jpg`
- ✅ `coleira-azul.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `foto com espaços.jpg`

### Image Size
- **Resolution:** 800x600 pixels (recommended)
- **Aspect Ratio:** 4:3 or 16:9
- **File Size:** Keep under 500KB per image

### Optimization
Use image optimization tools before uploading:
- **Online:** TinyPNG, Squoosh.app
- **Desktop:** ImageOptim, GIMP
- **Command line:** `convert input.jpg -quality 85 -resize 800x600 output.jpg`

## How to Add Images

### For Animals (data/animals.json)
```json
{
  "id": 1,
  "name": "Luna",
  "image": "images/animals/luna-labrador.jpg",
  ...
}
```

### For Products (data/products.json)
```json
{
  "id": 1,
  "name": "Coleira Personalizada",
  "image": "images/products/coleira-azul.jpg",
  ...
}
```

## Examples

Place sample images here to test:
- `images/animals/sample-dog.jpg`
- `images/animals/sample-cat.jpg`
- `images/products/sample-collar.jpg`

## Tips

1. **Consistent sizing** - Use same dimensions for all images
2. **Good lighting** - Clear, well-lit photos work best
3. **Simple backgrounds** - Keep focus on the animal/product
4. **Multiple angles** - Keep original files for future use
5. **Backup** - Keep copies of original photos elsewhere

## Security Note

The website will automatically validate that images come from the `images/` folder. External URLs from Unsplash are also allowed if you prefer to use stock photos.
