# MK Digital Frames - Website

A beautiful, modern, professional website for MK Digital Frames built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. **Extract the project folder**
```bash
unzip mk-digital-frames.zip
cd mk-digital-frames
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The website will automatically open in your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
mk-digital-frames/
├── public/                      # Static assets
├── src/
│   ├── assets/                 # Image placeholders (ready for your images)
│   ├── components/             # React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── FeaturedFrames.jsx
│   │   ├── CategoriesSection.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── GallerySection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingButtons.jsx
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🎨 Customization Guide

### 1. Business Information

Edit `src/components/ContactSection.jsx` and `src/components/Footer.jsx` to update:
- Phone number
- Address
- Email/Contact details

### 2. Website Colors

The main color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  'maroon': '#6B3E2E',      // Primary color
  'deep-maroon': '#5C2E1F', // Darker shade
  'gold': '#D4AF37',        // Accent color
  'cream': '#F5F1E8',       // Background
  'ivory': '#FFFFF0',       // Light background
}
```

To change colors, modify these values in `tailwind.config.js`.

### 3. Text Content

All website text is easily editable in each component file:
- **Hero Section**: `src/components/HeroSection.jsx`
- **About**: `src/components/AboutSection.jsx`
- **Featured Frames**: `src/components/FeaturedFrames.jsx`
- **Categories**: `src/components/CategoriesSection.jsx`
- **Why Choose Us**: `src/components/WhyChooseUs.jsx`
- **How It Works**: `src/components/HowItWorks.jsx`
- **Gallery**: `src/components/GallerySection.jsx`
- **Contact**: `src/components/ContactSection.jsx`

### 4. Featured Frames List

Edit the `frames` array in `src/components/FeaturedFrames.jsx`:

```javascript
const frames = [
  {
    name: 'Your Frame Name',
    desc: 'Description',
    emoji: '🕉️',  // Change emoji or replace with image
    color: 'from-yellow-100 to-orange-100',
  },
  // Add more frames...
]
```

### 5. Categories

Edit the `categories` array in `src/components/CategoriesSection.jsx` to add/modify categories.

### 6. Gallery Images

Edit the `galleryItems` array in `src/components/GallerySection.jsx` to update gallery items.

## 🖼️ Replacing Images

Currently, the website uses **emojis and colored backgrounds** for placeholders. To replace them with actual product images:

### Option 1: Use Image URLs

1. In any component, replace the emoji/placeholder with an image:

```javascript
// Instead of emoji display
<img src="/path/to/image.jpg" alt="Frame description" />
```

### Option 2: Add Local Images

1. Create folders in `public/`:
```
public/
├── images/
│   ├── frames/
│   ├── gallery/
│   └── products/
```

2. Add your image files to these folders

3. Reference them in components:
```javascript
<img src="/images/frames/ganesha.jpg" alt="Lord Ganesha" />
```

### Option 3: Optimize with Picture Elements

For better responsive images:

```javascript
<picture>
  <source srcSet="/images/frame-mobile.jpg" media="(max-width: 768px)" />
  <img src="/images/frame-desktop.jpg" alt="Divine Frame" />
</picture>
```

## 🔧 Animations

The website uses **Framer Motion** for smooth animations. To adjust animation intensity:

1. Modify animation values in each component
2. Reduce `duration` values to make animations faster
3. Reduce `repeat` counts to limit repeated animations

Example in `HeroSection.jsx`:
```javascript
animate={{
  y: [0, -20, 0],
}}
transition={{
  duration: 3,  // Change this for faster/slower animation
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1200px+)
- Tablet (768px+)
- Mobile (320px+)

All Tailwind utilities handle responsiveness automatically using `md:`, `sm:` breakpoints.

## 🔗 Contact Links

The website includes automatic contact integrations:

- **Phone**: `tel:+919187132211`
- **WhatsApp**: `https://wa.me/919187132211?text=...`
- **Google Maps**: `https://maps.google.com/?q=...`

These are pre-configured but can be easily updated.

## ⚡ Performance

The website is optimized for:
- Fast page load times
- Smooth animations
- Mobile-first design
- SEO-friendly structure

### Tips for Better Performance:
1. Compress images before adding them
2. Use modern image formats (WebP)
3. Lazy-load images for faster initial load

## 🎯 Key Features

✅ Sticky responsive navbar with mobile menu
✅ Beautiful hero section with animations
✅ Product showcase with cards
✅ Category grid with hover effects
✅ Why Choose Us section
✅ Step-by-step How It Works guide
✅ Gallery with lightbox/modal
✅ Contact section with Google Maps integration
✅ Floating WhatsApp and Call buttons
✅ Scroll-to-top button
✅ Smooth scrolling navigation
✅ Mobile hamburger menu
✅ Professional animations throughout
✅ Premium devotional aesthetic

## 📚 Technologies Used

- **React 18.2** - UI framework
- **Vite 4.3** - Build tool
- **Tailwind CSS 3.3** - Styling
- **Framer Motion 10.16** - Animations
- **Lucide React** - Icons
- **JavaScript/JSX** - Programming

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect to Vercel
3. Vercel will automatically build and deploy

### Deploy to Netlify

1. Run `npm run build`
2. Connect Netlify to your GitHub repo
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Traditional Hosting

1. Run `npm run build`
2. Upload the `dist/` folder contents to your server
3. Configure your server to serve `index.html` for all routes

## 📞 Support

For any issues or questions:
- Check the component files for detailed inline comments
- Refer to Framer Motion docs: https://www.framer.com/motion/
- Tailwind CSS docs: https://tailwindcss.com/docs

## 📝 Notes

- All phone numbers and addresses are pre-configured. Update them in the relevant components.
- The website includes SEO meta tags - update them in `index.html`
- Animations are subtle and professional - adjust in each component as needed
- The color scheme uses warm, spiritual tones suitable for a devotional business

## 📄 License

This website is created for MK Digital Frames. All rights reserved.

---

**Happy promoting your divine frames! 🙏✨**
