# Netlify Deployment Guide

## 🚀 Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Go to Netlify**: [netlify.com](https://netlify.com)
2. **Sign in** or create an account
3. **Click "New site from Git"**
4. **Connect to GitHub** and authorize Netlify
5. **Select Repository**: `Satoshi-Team/zion-religious-platform`
6. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18`
7. **Click "Deploy site"**

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

## ⚙️ Configuration

The project includes:
- `netlify.toml` - Build configuration
- `public/_redirects` - URL redirects for Next.js routing
- Optimized Next.js config for Netlify

## 🔧 Build Settings

- **Framework**: Next.js 14
- **Node Version**: 18
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Environment**: Production

## 📝 Environment Variables (if needed)

Add these in Netlify dashboard under Site settings > Environment variables:
- `NODE_ENV=production`
- Any API keys or configuration variables

## 🎯 Post-Deployment

1. **Custom Domain**: Add your domain in Netlify dashboard
2. **SSL**: Automatically provided by Netlify
3. **CDN**: Global distribution included
4. **Analytics**: Enable in Netlify dashboard if needed

## 🐛 Troubleshooting

- **Build fails**: Check Node.js version (should be 18+)
- **Routing issues**: Verify `_redirects` file is in `public/` directory
- **Performance**: Enable Netlify's build optimizations

## 📊 Monitoring

- **Build logs**: Available in Netlify dashboard
- **Performance**: Netlify Analytics (if enabled)
- **Uptime**: Netlify provides 99.9% uptime SLA 