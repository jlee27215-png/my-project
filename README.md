# Personal Website Template

This is a lightweight, static personal website with:

- Links section populated from `data/links.json`
- Downloads section populated from `data/files.json`
- Simple, responsive design with plain HTML/CSS/JS

## Quick Start

Open `index.html` in a browser to preview locally. No build step needed.

## Customize

Edit the following in place:

- `index.html`
  - Change the `<title>` tag.
  - Update your name, tagline, and contact info.
  - Replace the profile image at `assets/img/profile-placeholder.svg` (use `assets/img/your-photo.jpg` and update the `src`).
- `data/links.json`
  - Add/change your links. Example item:
    ```json
    { "title": "GitHub", "url": "https://github.com/your-username", "description": "Projects", "newTab": true }
    ```
- `data/files.json`
  - Add downloadable files you place in `uploads/`. Example item:
    ```json
    { "title": "Resume (PDF)", "path": "uploads/resume.pdf", "size": "~1 MB", "type": "PDF", "description": "Latest resume" }
    ```
- `uploads/`
  - Put any files you want to offer for download here (e.g., resume, portfolio PDFs, zips). The example `resume.pdf` is a placeholder—replace it with your real PDF.

## Deploy

This site is static; host it anywhere:

- GitHub Pages: push this folder to a repo, enable Pages (root).
- Netlify: drag-and-drop the folder or connect repo; publish directory is the repo root.
- Vercel: import the repo as a static site.
- Any static file host or S3 bucket + CDN.

## Notes

- The JS fetches `data/*.json` at runtime. When deploying behind some hosts, ensure JSON files are served with a proper `application/json` content type (most hosts do this by default).
- You can remove the JSON approach and hardcode links/files in `index.html` if you prefer no JavaScript.

