# Zhang Minxuan — Personal Website

A single-page personal site built with plain HTML, CSS, and JavaScript (no build step, no dependencies).

## Structure

```
index.html        Page content (Hero, About, Experience, Projects, Contact)
css/styles.css     All styling
js/script.js       Projects data, mobile nav, scroll animations
assets/            Put future images here (e.g. a photo, project screenshots)
```

## Preview locally

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket), or
2. Run `vercel` from inside this folder using the Vercel CLI.

No build settings are needed — it's a static site, so leave the Framework Preset as "Other" and the output directory as the project root.

## Adding a photo

The hero section currently has no photo (optional, per your resume). To add one:
1. Drop an image into `assets/` (e.g. `assets/photo.jpg`).
2. In `index.html`, inside `<div class="hero-inner">`, add:
   ```html
   <img src="assets/photo.jpg" alt="Zhang Minxuan" class="hero-photo">
   ```
3. Add matching CSS in `css/styles.css` for `.hero-photo` (e.g. a rounded/circular image).

## Adding a project

Open `js/script.js` and add a new object to the `projects` array at the top — a template is included as a comment. Each entry needs `title`, `date`, `role`, and `description`.
