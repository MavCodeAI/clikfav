# ClikXo - Premium Tech Company Website

A modern, responsive website for ClikXo - a premium technology company specializing in web development, mobile apps, graphics design, and digital marketing.

## 🚀 Features

- **Modern Design**: Built with Next.js 16, TypeScript, and Tailwind CSS v4
- **Premium Animations**: Smooth Framer Motion animations throughout
- **Responsive Layout**: Perfect on all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Contact Form**: Functional contact form with API endpoint
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance**: Optimized for Core Web Vitals

## 🎨 Sections

1. **Hero** - Full-screen animated hero with gradient orbs
2. **Trust** - Client credibility indicators
3. **About** - Company information and mission
4. **Services** - 8 animated service cards with rotating icons
5. **Industries** - 10 industry specializations with 3D effects
6. **Testimonials** - Client testimonials with animations
7. **FAQ** - Interactive Q&A section
8. **Contact** - Contact form and information
9. **Footer** - Complete site navigation

## 🛠 Tech Stack

- **Framework**: Next.js 16.0.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/MavCodeAI/clikfav.git
cd clikfav

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This project is ready for deployment on Vercel, Netlify, or any platform that supports Next.js applications.

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect and deploy your Next.js app

### Netlify Deployment

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 📱 Responsive Design

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px  
- **Desktop**: 1200px+

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for fast loading
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting

## 🔧 Customization

### Colors
Edit `src/app/globals.css` to customize the color scheme:

```css
:root {
  --primary-50: #eff6ff;
  --primary-500: #0057ff;
  --primary-600: #0047e6;
  --primary-700: #0038cc;
  --primary-800: #0029b3;
  --primary-900: #001a99;
}
```

### Fonts
Edit `src/app/layout.tsx` to change fonts:

```tsx
import { Poppins, Inter } from 'next/font/google'
```

### Content
Update content in the respective section files in `src/components/sections/`

## 📄 License

This project is private and proprietary to ClikXo.

## 🤝 Contributing

This is a proprietary project. Please do not make unauthorized contributions.

## 📞 Contact

For any questions or support, please contact the ClikXo team.

---

Built with ❤️ by ClikXo Team
