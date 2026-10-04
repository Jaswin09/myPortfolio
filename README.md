# Jaaswin D Kotian — Personal Portfolio

A clean, editorial-style personal portfolio built as a lightweight static website.

## Structure

- `index.html` — page content
- `styles.css` — design and responsive layout
- `script.js` — reveal animations, footer year and the hobby filter/click effects
- `assets/profile.jpg` — supplied profile photo
- `assets/Jaaswin_Kotian_Resume.pdf` — supplied résumé
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Deploy free with GitHub Pages

1. Create a new GitHub repository, for example `jaaswin-kotian.github.io`.
2. Upload the contents of this folder to the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to `main`. The included workflow will deploy the site.
6. Your site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY/` (or the root `https://YOUR-USERNAME.github.io/` when using the matching username repository).

## Easy edits

Most content is directly in `index.html`. To add a hobby, copy one `.hobby-card` block in the "Beyond code" section and change its emoji, title, line and `data-cat` (`creative`, `sports`, `outdoors` or `kitchen`). Skills live in the `.skill-group` blocks of the Toolkit section. Projects are `.project-card` blocks under "Selected work" (enterprise ones use `.project-enterprise`).

## Notes

The site intentionally uses no framework or build step, so it is extremely easy to host on GitHub Pages, Cloudflare Pages, Netlify, or another static host.
