# NextGenShe 🚀

**Empowering Women Through Tech** — A modern React + Vite platform for women entering the technology industry.

---

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **React Router v6** — Client-side routing
- **Tailwind CSS 3** — Utility-first styling
- **Google Fonts** — Playfair Display + DM Sans + JetBrains Mono

---

## Project Structure

```
NextGenShe/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseCard.jsx
│   │   └── TeamCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Courses.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Visit `http://localhost:5173`

### 3. Build for production
```bash
npm run build
```
Output goes to the `dist/` folder.

### 4. Preview production build
```bash
npm run preview
```

---

## Deploying to Vercel

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: NextGenShe"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nextgenshe.git
git push -u origin main
```

### Step 2 — Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in (or create a free account)
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose your `nextgenshe` GitHub repository
5. Click **Import**

### Step 3 — Configure Build Settings
Vercel auto-detects Vite projects. Confirm these settings:

| Setting | Value |
|---|---|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### Step 4 — Deploy
Click **"Deploy"** — Vercel will build and deploy in ~60 seconds.

Your site will be live at: `https://nextgenshe.vercel.app`

### Step 5 — Automatic Redeploy
Every `git push` to the `main` branch will trigger an automatic redeploy. No manual action needed.

### Step 6 — Custom Domain (Optional)
1. In your Vercel dashboard, go to **Project → Settings → Domains**
2. Add your custom domain (e.g., `nextgenshe.io`)
3. Update your DNS records as instructed by Vercel

---

## Customization

### Colors
Edit `tailwind.config.js` → `theme.extend.colors.brand` to change the primary color palette.

### Content
- **Courses**: Edit the `allCourses` array in `src/pages/Courses.jsx`
- **Team**: Edit the `team` array in `src/pages/About.jsx`
- **Programs**: Edit the `programs` array in `src/pages/Home.jsx`

### Fonts
Change the Google Fonts import in `index.html` and update `tailwind.config.js` → `fontFamily`.

---

## License

MIT — Free to use and modify.

Built with ♥ for women in tech.
