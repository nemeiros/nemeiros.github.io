# Seiros

A simple personal profile page with a "click to enter" screen, a music player, snow/rain effects and a small blog. One `index.html`, no build step, no dependencies.

## Features

- Click to enter screen (also lets the music start automatically)
- Music player with cover, seek bar and previous/next
- Snow or rain effect
- Writing section with pinned posts, "Latest" list and reading time
- Glow text, social icons, custom background

## Quick start

1. Keep `index.html`, `images/` and `music/` in the same folder.
2. Open `index.html` in your browser.
3. Edit the `CONFIG` object at the top of the script to make it yours.

```text
seiros/
├── index.html
├── images/    # avatar, background, covers
└── music/     # .mp3 files
```

## Configuration

| Key | What it does |
| --- | --- |
| `name`, `avatar`, `bio`, `chips` | Your profile info |
| `background` | Background image |
| `effect` | `"snow"`, `"rain"` or `"none"` |
| `enterScreen`, `enterText`, `autoplayMusic` | Click to enter screen and music autoplay |
| `socials` | Social links (`github`, `discord`, `patreon`, `steam`) |
| `tracks` | Playlist |
| `posts` | Blog posts |

**Add a song:**

```js
{title:"Song", artist:"Artist", src:"music/song.mp3", cover:"images/song.png", colors:["#e0825a","#4b2f6e"]}
```

**Add a post:**

```js
{
  id: "hello",
  ts: Date.UTC(2026, 10, 8),   // month starts at 0
  title: "Hello",
  pinned: true,                // optional, max 2
  preview: "Short teaser.",
  body: `The full post.`
}
```

## Deploy

Upload the whole folder (`index.html`, `images/`, `music/`) to GitHub Pages, Netlify Drop or Cloudflare Pages.

## Credits & Copyright

- I do not own the songs used on this site. All rights to the music belong to **[Sappheiros](https://www.youtube.com/@Sappheiros)**.
- Made by Nemeiros with Claude AI.
- brand icons from [Simple Icons](https://simpleicons.org/). **Font:** [Figtree](https://fonts.google.com/specimen/Figtree).
