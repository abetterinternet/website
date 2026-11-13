Internet Security Research Group (ISRG) Website
===============================================

This is the repository for the [ISRG website](https://abetterinternet.org/).

This site is built with [Hugo](https://gohugo.io/) and requires version 0.161.0
or newer (CI and Netlify pin 0.164.0). It's entirely static, no server-side
code/scripting.

To see your changes, [install
Hugo](https://gohugo.io/getting-started/installing), then run it with:

```
hugo server -F
```

And open <a href="http://localhost:1313/">http://localhost:1313/</a> in your
browser. Note that the -F flag will show items to be published in the future
(like blog posts with dates in the future).

Production builds on Netlify run `hugo` without `-D` or `-F`, so drafts and
future-dated content stay unpublished until a deploy happens on or after their
date. Netlify deploy previews and branch deploys do include them.

Contributions welcome.

## Site banner

`layouts/partials/site-banner.html` shows a dismissible banner below the navigation on English pages. All of its settings go in the site config under `[params]`:

```toml
site_banner_enabled = true
site_banner_text = "Message"
site_banner_href = "https://example.org/"  # optional link
site_banner_label = "Button text"          # optional; without it the message is the link
```

For messages with dates, add `[[params.site_banner_schedule]]` entries with `start`, `end` and `text`, plus optional `href`, `label` and `id`. Times are ISO 8601 with an offset; an entry without `href` or `label` uses the ones above. While a scheduled message is active, it replaces the simple banner. Colors are in `static/site-banner/theme.css`. Closing the banner is remembered in the browser's `localStorage` (no cookies).

On Netlify previews and local builds, `?banner-time=<ISO 8601 time>` (for example `?banner-time=2026-12-01T18:00:00Z`) or `?banner=<id>` previews the schedule. The live site ignores both.
