# Seiros

A simple personal profile page with a "click to enter" screen, a music player, snow/rain effects and a small blog. Plain HTML, CSS and JavaScript: no build step, no dependencies.

## Features

- Click to enter screen (also lets the music start automatically)
- Music player with cover, seek bar and previous/next
- Snow or rain effect
- Writing section with pinned posts, "Latest" list and reading time
- Clean addresses: `/` (home), `/blog` (all posts), `/blog/post-id` (one post)
- Glow text, social icons, custom background

## Quick start

1. Keep all files and folders below in the same place.
2. Edit **`content.js`** to make it yours (profile, music, posts).
3. Serve the folder with a server that falls back to `404.html` for unknown addresses, for example:

   ```bash
   npx serve -s
   ```

   Opening `index.html` directly also works, but the address bar will not change when you move between pages.

```text
seiros/
├── index.html     # page shell (identical to 404.html)
├── 404.html       # same as index.html, makes /blog and /blog/post-id work
├── content.js     # your content: profile, music, posts (edit this)
├── app.js         # the code that runs the page
├── style.css      # the look
├── images/        # avatar, background, covers
└── music/         # .mp3 files
```

`index.html` and `404.html` must stay identical. You rarely need to touch them, because all the content lives in `content.js`.

## Configuration

Everything below is in `content.js`.

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
  id: "hello",                 // used in the address: /blog/hello
  ts: Date.UTC(2026, 10, 8),   // month starts at 0
  title: "Hello",
  pinned: true,                // optional, max 2
  preview: "Short teaser.",
  body: `The full post.`
}
```

## Link preview

To show a preview card when the link is shared (Discord, Telegram, Facebook...), edit the `<meta>` tags in the `<head>` of **both** `index.html` and `404.html`: update the title, description, URL and image. Put a preview image (about 1200×630) at `images/preview.png`. The URL and image must be full `https://` links. The preview is the same for the whole site, not per post.

## Deploy

Built for a GitHub Pages user site (`username.github.io`). Upload everything (`index.html`, `404.html`, `content.js`, `app.js`, `style.css`, `images/`, `music/`) to the root of the repository.

`404.html` is what makes direct links like `/blog` work when someone opens them or refreshes the page. Without it, GitHub shows its own 404 page. Other hosts (Netlify, Cloudflare Pages) can host the files too, but may need their own setting for unknown addresses.

If a change does not show up, hard refresh with Ctrl+F5.

## Credits & Copyright

- I do not own the songs used on this site. All rights to the music belong to **[Sappheiros](https://www.youtube.com/@Sappheiros)**.
- Many images on this site (song covers, backgrounds) come from Sappheiros's videos. I do not own them. All rights belong to their original creators. The avatar and a few other images are my own.
- If you are a rights holder and want something removed, contact [me](https://discord.com/users/806381990198771724) or [email](mailto:nemeiros8450@outlook.com) and I will take it down.
- Made by Nemeiros with Claude AI.
- Brand icons from [Simple Icons](https://simpleicons.org/). **Font:** [Figtree](https://fonts.google.com/specimen/Figtree).
