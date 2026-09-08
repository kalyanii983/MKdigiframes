# Asset Placement Guide

This guide explains where to place your product images and assets.

## 📁 Folder Structure

```
public/
└── images/
    ├── frames/          # Main product frame images
    ├── gallery/         # Gallery display images
    ├── gods/           # Individual deity images
    └── hero/           # Hero section images

src/
└── assets/
    ├── frames/         # Frame-related assets
    ├── gallery/        # Gallery assets
    ├── gods/           # Deity images
    └── hero/           # Hero background images
```

## 🖼️ Image Types & Recommendations

### 1. **Product Frame Images** (src/assets/frames/)
- **Size**: 600x600px (square format works best)
- **Format**: JPG or WebP
- **Files to create**:
  - `ganesha.jpg`
  - `shiva.jpg`
  - `krishna.jpg`
  - `lakshmi.jpg`
  - `hanuman.jpg`
  - `durga.jpg`
  - `venkateswara.jpg`
  - `family.jpg`

### 2. **Gallery Images** (src/assets/gallery/)
- **Size**: 600x600px (square recommended for gallery grid)
- **Format**: JPG or WebP
- **Files to create**: Name them by deity or design name
  - `ganesha-darshan.jpg`
  - `cosmic-shiva.jpg`
  - etc.

### 3. **Hero Section Images** (src/assets/hero/)
- **Size**: 1200x800px for desktop, 600x600px for mobile
- **Format**: JPG or WebP
- **Files**:
  - `hero-frame-desktop.jpg`
  - `hero-frame-mobile.jpg`

### 4. **Deity/Category Images** (src/assets/gods/)
- **Size**: 500x500px
- **Format**: JPG or WebP
- **Files**: One per category
  - `ganesha.jpg`
  - `shiva.jpg`
  - `vishnu.jpg`
  - `lakshmi.jpg`
  - `durga.jpg`
  - `krishna.jpg`
  - `hanuman.jpg`
  - `venkateswara.jpg`

## 🔄 How to Replace Placeholder Emojis with Images

### Step 1: Add Your Image Files

1. Save your product images in the appropriate folder
2. Use descriptive filenames (e.g., `ganesha-frame-display.jpg`)

### Step 2: Update Components

#### In FeaturedFrames.jsx
Replace the emoji display with an image:

**Before:**
```javascript
<div className="text-7xl">{frame.emoji}</div>
```

**After:**
```javascript
<img 
  src={`/images/frames/${frame.name.toLowerCase().replace(/ /g, '-')}.jpg`}
  alt={frame.name}
  className="w-full h-full object-cover"
/>
```

#### In CategoriesSection.jsx
Replace the category emoji:

**Before:**
```javascript
<motion.div className="text-6xl">{category.emoji}</motion.div>
```

**After:**
```javascript
<img 
  src={`/images/gods/${category.name.toLowerCase()}.jpg`}
  alt={category.name}
  className="w-full h-full object-cover rounded-full"
/>
```

#### In GallerySection.jsx
Replace gallery emoji with image:

**Before:**
```javascript
<motion.div className="text-8xl">{item.emoji}</motion.div>
```

**After:**
```javascript
<img 
  src={`/images/gallery/${item.id}-${item.title.toLowerCase().replace(/ /g, '-')}.jpg`}
  alt={item.title}
  className="w-full h-full object-cover"
/>
```

## 📊 Image Optimization Tips

### 1. **File Size Optimization**
- Compress images before uploading (use TinyPNG, ImageOptim, or similar)
- Target sizes:
  - Product frames: 150-250KB
  - Gallery images: 100-200KB
  - Hero images: 200-400KB

### 2. **Format Recommendations**
- Use **WebP** format for best compression (saves 25-35% file size)
- Fallback to **JPG** for compatibility
- Avoid PNG for photographs (larger file sizes)

### 3. **Responsive Images**

Use picture elements for different screen sizes:

```javascript
<picture>
  <source srcSet="/images/frames/ganesha-mobile.jpg" media="(max-width: 768px)" />
  <img 
    src="/images/frames/ganesha-desktop.jpg" 
    alt="Lord Ganesha Frame"
    className="w-full h-full object-cover"
  />
</picture>
```

## 🎯 Current Placeholder System

The website currently uses:
- **Emojis** for visual representations
- **Colored backgrounds** for product cards
- **Generated gradients** for sections

This is intentional! It allows you to:
1. See the website design without images
2. Gradually replace emojis with real product images
3. Test the layout and functionality

## ✅ Checklist for Image Implementation

- [ ] Create image folders in public/images/
- [ ] Gather all product images (JPG or WebP format)
- [ ] Compress images to appropriate sizes
- [ ] Update component files to use image paths
- [ ] Test responsive behavior on mobile/tablet
- [ ] Verify all images load correctly
- [ ] Check page performance (use PageSpeed Insights)
- [ ] Deploy to production

## 🚀 Quick Image Addition Template

For each component that needs image replacement:

```javascript
// 1. Create your image array
const items = [
  { 
    id: 1, 
    title: 'Product Name',
    imagePath: '/images/folder/image-name.jpg',
    alt: 'Product Description'
  }
]

// 2. Display in JSX
<img 
  src={item.imagePath}
  alt={item.alt}
  className="w-full h-full object-cover rounded-lg"
/>

// 3. Test responsiveness
// Make sure images look good on all device sizes
```

## 📱 Mobile Image Considerations

- Use lower resolution for mobile (save bandwidth)
- Test on actual mobile devices
- Ensure images don't take too long to load
- Consider using lazy loading for gallery images

## 🔗 Useful Resources

- **Image Compression**: https://tinypng.com
- **WebP Conversion**: https://cloudconvert.com
- **Image Optimization**: https://imageoptim.com
- **Performance Testing**: https://pagespeed.web.dev

---

**Next Steps:**
1. Prepare your product images
2. Compress them
3. Place them in the appropriate folders
4. Update components with image paths
5. Test thoroughly on all devices
6. Deploy!

Good luck! 🙏✨
