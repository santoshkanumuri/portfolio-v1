# 🚀 GitHub Pages Deployment Guide

## Quick Setup (5 Steps)

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `portfolio` or `YOUR_USERNAME.github.io`)
3. **DO NOT** initialize with README (we already have one)

### Step 3: Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 5: Wait for Deployment
1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 🔄 Automatic Updates

After the initial setup, your site will automatically update whenever you:
- Push changes to the `main` branch
- Make commits and push to GitHub

Example workflow:
```bash
# Make your changes in the code
git add .
git commit -m "Update profile information"
git push

# Your site will automatically rebuild and deploy! 🎉
```

## 📝 Custom Domain (Optional)

If you want to use a custom domain:

1. Add a file named `CNAME` to the `public` folder with your domain:
   ```
   www.yourdomain.com
   ```

2. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. In GitHub repository settings → Pages, enter your custom domain

## 🛠️ Troubleshooting

### Build Fails
- Check the **Actions** tab for error messages
- Make sure all dependencies are listed in `package.json`
- Verify that `npm run build` works locally

### Site Shows 404
- Make sure GitHub Pages is enabled in Settings → Pages
- Check that the Source is set to "GitHub Actions"
- Wait a few minutes after the first deployment

### Images Not Loading
- Make sure images are in the `src/assets/` folder
- Use the correct import syntax: `import image from './assets/image.jpg'`

## 📞 Need Help?

If you encounter issues:
1. Check the Actions tab for detailed error logs
2. Make sure your repository is public (or you have GitHub Pro for private repos)
3. Verify that GitHub Pages is enabled in your repository settings

---

**Your portfolio is now set up for automatic deployment! Every push to GitHub will update your live site.** ✨
