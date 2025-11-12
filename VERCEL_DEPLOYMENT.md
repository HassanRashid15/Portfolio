# Vercel Deployment Guide

## Step 1: Push Your Code to GitHub

1. Make sure all your changes are committed:
```bash
git add .
git commit -m "Add typing indicator and prepare for deployment"
git push
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Already Installed)

1. **Login to Vercel** (if not already logged in):
```bash
vercel login
```

2. **Deploy to Production**:
```bash
vercel --prod
```

### Option B: Using Vercel Dashboard (Recommended for Environment Variables)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect your settings

## Step 3: Set Environment Variables

### For EmailJS Configuration:

1. **Go to your Vercel Project Dashboard**
   - Click on your project
   - Go to **Settings** → **Environment Variables**

2. **Add the following environment variables:**

   | Variable Name | Value | Environment |
   |--------------|-------|-------------|
   | `EMAILJS_SERVICE_ID` | `service_uh46zig` | Production, Preview, Development |
   | `EMAILJS_TEMPLATE_ID` | `template_qet9f3d` | Production, Preview, Development |
   | `EMAILJS_PUBLIC_KEY` | `FY_OotUce1A8cX5ZG` | Production, Preview, Development |
   | `WHATSAPP_PHONE` | `923349878525` | Production, Preview, Development |

3. **Click "Save"** for each variable

### Alternative: Update Code to Use Environment Variables

If you want to use environment variables in your code (recommended for security), update `javascript/index.js`:

```javascript
// Replace hardcoded values with:
const serviceID = process.env.EMAILJS_SERVICE_ID || 'service_uh46zig';
const templateID = process.env.EMAILJS_TEMPLATE_ID || 'template_qet9f3d';
const publicKey = process.env.EMAILJS_PUBLIC_KEY || 'FY_OotUce1A8cX5ZG';
```

**Note:** Since this is a static site (HTML/CSS/JS), environment variables need to be injected at build time. For client-side JavaScript, you can:

1. **Use Vercel's Environment Variables in Build Command:**
   - Create a simple build script that replaces placeholders
   - Or keep the values in the code (they're public anyway for EmailJS)

2. **Current Approach (Recommended for EmailJS):**
   - EmailJS public keys are meant to be public
   - They're safe to include in client-side code
   - No need to hide them as environment variables

## Step 4: Redeploy After Adding Environment Variables

After adding environment variables, you need to redeploy:

1. **Via Dashboard:**
   - Go to **Deployments** tab
   - Click the three dots on the latest deployment
   - Click **Redeploy**

2. **Via CLI:**
```bash
vercel --prod
```

## Step 5: Verify Deployment

1. Visit your deployed URL (e.g., `https://your-project.vercel.app`)
2. Test the chatbot
3. Test the email form
4. Check browser console for any errors

## Troubleshooting

### EmailJS Not Working?

1. Check browser console for errors
2. Verify EmailJS keys are correct in `javascript/index.js`
3. Make sure EmailJS SDK is loaded (check Network tab)
4. Verify EmailJS template settings match your code

### Build Errors?

1. Check `vercel.json` configuration
2. Ensure all file paths are correct
3. Check Vercel build logs in dashboard

### Environment Variables Not Working?

- For static sites, environment variables are injected at build time
- If using client-side JS, you may need a build script
- For EmailJS, keeping keys in code is fine (they're public keys)

## Current Configuration

Your `vercel.json` is already configured with:
- Proper routing for HTML pages
- Security headers
- Asset caching

No additional configuration needed!

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test all features
3. ✅ Set up custom domain (optional)
4. ✅ Enable automatic deployments from GitHub

---

**Note:** EmailJS public keys are safe to include in client-side code. They're designed to be public and are protected by EmailJS's service-side validation.

