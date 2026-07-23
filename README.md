# Minxuan Zhang — Personal Website

A single-page personal site built with plain HTML, CSS, and JavaScript, plus a
small serverless chatbot grounded in a resume-based knowledge file.

## Structure

```
index.html        Page content (Hero, About, Experience, Projects, Ask Me, Contact)
css/styles.css     All styling
js/script.js       Projects data, mobile nav, scroll animations
assets/            Put future images here (e.g. a photo, project screenshots)
api/chat.js        Serverless function: talks to Claude, holds the API key server-side
api/corpus.md       The chatbot's only source of facts (resume-based, public-safe)
package.json       Declares the @anthropic-ai/sdk dependency
vercel.json        Bundles api/corpus.md with the api/chat.js function on deploy
```

## Preview locally

Open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

Note: the "Ask Me" chat box will **not** respond in local preview — `api/chat.js`
only runs on Vercel's servers. Deploy first, then test it on the live site.

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket), or
2. Run `vercel` from inside this folder using the Vercel CLI.

Framework Preset: "Other". No build command is needed.

### Enabling the chatbot

1. In the Vercel project: Settings → Environment Variables.
2. Add a variable named exactly `ANTHROPIC_API_KEY`, value = your Anthropic API key.
3. Save, then redeploy — a new environment variable only takes effect after a redeploy.
4. On the live site, ask the chat box a real question, then an off-topic one (it should decline).
5. Check the key is hidden: View Source on the live page and search for `sk-ant` — it should not appear anywhere.

## Adding a photo

The hero section currently has no photo (optional, per your resume). To add one:
1. Drop an image into `assets/` (e.g. `assets/photo.jpg`).
2. In `index.html`, inside `<div class="hero-inner">`, add:
   ```html
   <img src="assets/photo.jpg" alt="Minxuan Zhang" class="hero-photo">
   ```
3. Add matching CSS in `css/styles.css` for `.hero-photo` (e.g. a rounded/circular image).

## Adding a project

Open `js/script.js` and add a new object to the `projects` array at the top — a template is included as a comment. Each entry needs `title`, `date`, `role`, and `description`.
