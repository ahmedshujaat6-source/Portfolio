# Personal Portfolio Template

A 9-page personal portfolio: Home, About, Skills, Experience, Projects,
Project Details, Services, Blog and Contact — with a sticky navbar, a
slide-out quick-nav sidebar, a light theme with a dark mode toggle, and
slow ambient animation throughout. Every file sits flat in this one
folder, nothing nested.

**All real content — headings, paragraphs, project details, skills,
blog posts, contact info — lives directly inside each HTML file.**
There's no separate data file and nothing is injected by JavaScript.
Open a page in any text editor, find the text you want to change, and
edit it in place, the same way you would a Word document.

## Files

| File | What it's for |
|---|---|
| `index.html`, `about.html`, `skills.html`, `experience.html`, `projects.html`, `project-details.html`, `services.html`, `blog.html`, `contact.html` | The nine pages. All visible text and structure lives directly in these files — edit them straight in your text editor. |
| `style.css` | Visual design: colors, fonts, spacing, animation, layout. Edit the `:root` variables at the top to re-theme the whole site. |
| `main.js` | Behavior only — the dark mode toggle, mobile menu, sidebar open/close, scroll animations, and the contact form's "sent" confirmation. It doesn't hold any of your content, so you won't need to open it just to update text. |

## Making it yours

Everything is plain, readable HTML. A few starting points:

- **Your name, title and tagline** — appear in the `<header class="navbar">`
  block and the hero section of `index.html`. The same brand block
  (`AR` / "Alex Rivera") repeats at the top of every page — search and
  replace it across all nine files to rename the site quickly.
- **Contact details** — appear in the footer of every page, and again
  on `contact.html`.
- **Navigation links** — the `<nav class="nav-links">` block near the
  top of every page, and the matching `<nav class="sidebar-nav">`
  block further down. Add, remove or reorder the `<a>` tags — just keep
  the same links consistent across all nine pages.
- **Projects** — each project is a `<div class="card project-card">`
  block on `index.html` and `projects.html`. Copy one, paste it, and
  edit the copy to add another project. `project-details.html` holds
  one full case study — duplicate that file (e.g. `project-details-2.html`)
  for each additional project and point the matching project card's
  link at it.
- **Skills** — each skill is a `<div class="skill-row">` on
  `skills.html`. The `style="--level:90%"` attribute controls how far
  the bar fills in — change the number (and the matching text) to
  update it.
- **Experience** — each job is a `<div class="timeline-item">` on
  `experience.html`, newest first.
- **Services** — each offering is a `<div class="card service-card">`
  on `services.html`.
- **Blog posts** — each post is a `<details class="card blog-card">`
  block on `blog.html`. The `<summary>` is what's always visible; the
  `<div class="blog-body">` below it is the full post, which expands
  when someone clicks — no JavaScript required for that.
- **Profile photo** — the hero on `index.html` and the portrait on
  `about.html` both show a dashed "Add your photo" placeholder by
  default. To use a real photo, delete the `.avatar-placeholder` div
  and replace it with an `<img>` tag, e.g.:
  `<img src="your-photo.jpg" alt="Your Name">` — see the HTML comment
  next to each placeholder for the exact spot.

No build step or server is required — open `index.html` directly in a
browser to preview.

## Re-theming

All colors, fonts and spacing are CSS custom properties at the top of
`style.css`, under `/* 1. DESIGN TOKENS */`. Change `--accent` to swap
the primary color site-wide; change `--font-display` / `--font-body`
to swap typefaces (the current pairing is loaded from Google Fonts in
the first line of `style.css`). Dark-mode overrides sit right below,
in the `html.dark { ... }` block.

## Contact form

The contact form on `contact.html` is front-end only — it doesn't send
email on its own. Point it at a form backend of your choice (e.g.
Formspree, Netlify Forms, or your own API) by adding an `action`
attribute and `method` to the `<form id="contact-form">` tag.

## Deploying

Because everything is static files in one folder, you can drag this
folder into Netlify/Vercel/GitHub Pages, or upload it to any static
web host, with no build step.
