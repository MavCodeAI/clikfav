#!/bin/bash

# ClikXo Deployment Script for GitHub

echo "🚀 Preparing ClikXo for GitHub deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add remote repository
echo "🔗 Adding GitHub remote..."
git remote add origin https://github.com/MavCodeAI/clikfav.git

# Stage all files
echo "📋 Staging files..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "🎉 Initial commit: ClikXo premium tech website

✨ Features:
- Modern Next.js 16 with TypeScript
- Premium animations with Framer Motion
- Responsive design with Tailwind CSS v4
- 9 professional sections (Hero, Services, Industries, etc.)
- Functional contact form with API endpoint
- SEO optimized and performance ready
- Lint-free code with best practices

🚀 Ready for deployment on Vercel/Netlify"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo "✅ ClikXo is now ready for deployment!"
echo "🌐 Visit https://github.com/MavCodeAI/clikfav to see your repository"
echo "🚀 Deploy on Vercel: https://vercel.com/import/git"
echo "🚀 Deploy on Netlify: https://app.netlify.com/start"
