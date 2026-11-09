/* ===== EDIT HERE: MANAGE YOUR WEBSITE CONTENT ===== */
const CONFIG = {
  name: "Nemeiros",
  avatar: "images/avatar.png", // Avatar image URL. Leave empty to show the first letter of your name.
  bio: "Tui là một người bình thường thích chơi Minecraft :D",
  chips: [["pin","Việt Nam"],["lang","Tiếng Việt"]],
  background: "images/background.png", // Background image URL. Leave empty for the default background.
  effect: "rain", // Weather effect: "snow", "rain" or "none". Tip: add ?effect=rain to the page URL to preview.
  enterScreen: true, // "Click to enter" screen. It also lets the music start automatically (browsers require one click first).
  enterText: "bấm để vào", // Text shown on the enter screen.
  autoplayMusic: true, // Start the first song when the visitor enters.
  socials: [["github","https://github.com/nemeiros"],["discord","https://discord.com/invite/7MetddBcvF"],["patreon","https://patreon.com/cw/Neme1ros"],["steam","https://steamcommunity.com/id/nemeirosvn8450/"]],

  // MUSIC: Edit a track or duplicate one of these objects to add another song.
  // src = direct audio file URL; cover = cover image URL; colors = fallback cover gradient.
 tracks: [
   {title:"Breathe In",artist:"Sappheiros",src:"music/breathe_in.mp3",cover:"images/breathe_in.png",colors:["#e0825a","#4b2f6e"]},
   {title:"Need",artist:"Sappheiros",src:"music/need.mp3",cover:"images/need.png",colors:["#4aa3a2","#1d2f5c"]},
   {title:"Rebirth",artist:"Sappheiros",src:"music/rebirth.mp3",cover:"images/rebirth.png",colors:["#d9a441","#7a2e4d"]},
   {title:"Dusk",artist:"Sappheiros",src:"music/dusk.mp3",cover:"images/dusk.png",colors:["#7c6ee0","#22304f"]},
   {title:"Fading",artist:"Sappheiros",src:"music/fading_remake.mp3",cover:"images/fading.png",colors:["#d96a8a","#2f2a5c"]}
],

  // WRITING: To publish a post, duplicate an object below and change id, ts, title, preview and body.
  // Add pinned: true to a post to pin it (max 2 pinned posts). Pinned posts get their own section; the other 5 newest posts go to "Latest".
  // preview = short teaser shown in the list; body = the full article (shown when the post is opened).
  // id must be unique and URL-friendly. ts uses Date.UTC(year, monthIndex, day); monthIndex starts at 0.
  // Example: Date.UTC(2026, 10, 8) means 8 November 2026.
posts: [
  {
    id: "introduction",
    ts: Date.UTC(2026, 10, 8),
    title: "Chào mừng tới website lỏ của tui",
    pinned: true,
    preview: "Góc nhỏ của tui trên internet, nơi chứa mấy thứ linh tinh.",
    body: `
Chào mừng người anh em/chị em đến với góc nhỏ của tui trên internet.

Tui tạo ra Seiros (tên dự án) như một không gian cá nhân cho mấy thứ linh tinh, những điều tôi thấy thú vị

Bạn có thể sẽ bắt gặp các bài viết về trò chơi, công nghệ, những câu chuyện và nhiều chủ đề ngẫu hứng khác tại đây.

Cảm ơn bạn đã ghé thăm Seiros!
    `
  },
  {
  id: "my-second-post",
  ts: Date.UTC(2026,10,9),
  title: "My Second Post",
  body: "This is my second post."
},
{
  id: "my-two-post",
  ts: Date.UTC(2026,10,9),
  title: "My two Post",
  body: "This is my two post."
},
{
  id: "my-three-post",
  ts: Date.UTC(2026,10,9),
  title: "My three Post",
  body: "This is my three post."
},
{
  id: "my-four-post",
  ts: Date.UTC(2026,10,9),
  title: "My four Post",
  body: "This is my four post."
},
{
  id: "my-five-post",
  ts: Date.UTC(2026,10,9),
  title: "My five Post",
  body: "This is my five post."
}
],
};
/* ================================================== */
