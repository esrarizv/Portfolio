# Esra Rizvi - Portfolio

Google-search-themed portfolio site with a small Express backend.
Frontend is plain HTML/CSS/JS; the backend exposes one endpoint, `POST /api/contact`,
which validates and stores contact-form messages in `data/messages.json`.

## Run locally

```bash
npm install
npm start
# open http://localhost:3000
```

## Deploy (free options)

Pick ONE. For the "full stack" story, use option A.

### A. Render (frontend + backend, recommended)

1. Push this folder to a GitHub repo.
2. Go to [Render](https://render.com) -> New -> Web Service -> connect the repo.
3. Render auto-detects Node: build command `npm install`, start command `node server.js`.
4. Deploy. You get a URL like `https://esra-portfolio.onrender.com`.
   (Free tier sleeps after inactivity; first load takes ~30s.)

### B. Railway (frontend + backend)

Same idea: push to GitHub, then [Railway](https://railway.app) -> New Project -> Deploy from GitHub.

### C. GitHub Pages / Netlify (frontend only, no backend)

The site still works, but the contact form will show the "email directly" fallback.
Push the `public/` folder and enable GitHub Pages, or drag the folder onto Netlify Drop.

## Optional: custom domain

Buy e.g. `esrarizvi.dev` (Namecheap/Cloudflare ~$12/yr), then in Render/Railway
add the domain and point DNS as instructed. GitHub Pages and Netlify do this free too.

## Show it to employers

- Put the live URL at the top of your resume and in your LinkedIn featured section.
- Keep the GitHub repo public and link it from the resume PDF.
- Bonus: generate a QR code of the URL (any free QR generator) for in-person career fairs.
