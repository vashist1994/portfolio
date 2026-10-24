# Vashist Narayan Singh — Data Science Portfolio

A modular, responsive React + Vite portfolio designed for easy customization and deployment.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## Deploy
### Vercel
1. Push this project to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite; build command: `npm run build`; output directory: `dist`.
4. Deploy.

### Netlify
1. Push this project to GitHub and import it into Netlify.
2. Build command: `npm run build`; publish directory: `dist`.
3. Deploy. `netlify.toml` is included.

### GitHub Pages
Set the `base` option in `vite.config.js` to `"/YOUR_REPOSITORY_NAME/"`, then build and publish `dist/` using GitHub Pages. For a custom domain or root deployment, keep `base: "/"`.

## Customize before publishing
- **Profile and contact details:** `src/data/profile.js`
- **Project cards, descriptions, and hosted demo URLs:** `src/data/projects.js` (`demoUrl`)
- **Skills:** `src/data/skills.js`
- **Layout and sections:** `src/components/`
- **Theme and responsive styles:** `src/styles.css`

## Important
- Replace `your.email@example.com` and the LinkedIn/GitHub URLs in `src/data/profile.js`.
- Project descriptions are editable starter copy; verify details, impact metrics, and confidentiality before publishing.
- Add your resume PDF at `public/resume.pdf`; the Resume navigation link downloads it as `Vashist-Narayan-Singh-Resume.pdf`.
- Do not publish employer/client-confidential information, production logs, or private datasets.
- The contact button opens the visitor's email application using a `mailto:` link. It does not submit data to a server.
