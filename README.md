# Jaduloader

Jaduloader restores the earlier dark-green/lime search-results design. The frontend is static HTML, CSS, and vanilla JavaScript (`index.html`, `styles.css`, `config.js`, `app.js`). Its separate Node.js backend searches public YouTube videos across **all channels**, plays them with the official embed, and can prepare MP3/MP4 output after a **per-video rights confirmation**. It also converts media files the user uploads.

## Important rights and platform limits

- Search covers all public YouTube channels; there is no single-channel allowlist.
- Each MP3/MP4 action opens a confirmation asking the user to affirm that they own the specific video or have permission to download it. The backend rejects download requests unless that confirmation is included.
- This confirmation is a user attestation, **not independent proof of ownership or permission**. Use the download feature only for media you are authorized to process. Do not download other people's content without permission.
- The backend uses no browser cookies, account sign-in, or sign-in challenge bypass. YouTube may block automated access; in that case the website returns an error instead of claiming a download succeeded.
- YouTube Data API search keys are not downloader keys. The page keeps keys off the frontend; search uses a server-only `YOUTUBE_API_KEY`.

## Run locally

Requirements: Node.js 20+, FFmpeg, ffprobe, and yt-dlp on `PATH`.

```sh
npm install
cp .env.example .env
```

Add a **fresh restricted** YouTube Data API v3 key to `YOUTUBE_API_KEY` in `.env`; enable YouTube Data API v3 and restrict the key to that API. The key previously pasted into chat should be considered exposed—revoke it and use a new value. Set `ALLOWED_ORIGINS` to the exact static frontend origin.
The [official YouTube Data API reference](https://developers.google.com/youtube/v3/docs) requires the key as a request `key` parameter; this backend adds it only to its server-to-Google request and never returns it to the browser.

Install media tools on Ubuntu if needed:

```sh
sudo apt-get update
sudo apt-get install -y ffmpeg
sudo pip3 install -U yt-dlp
```

Start and open the combined site:

```sh
npm start
# visit http://localhost:3000
```

For a separate local static server on port 8080, set `API_BASE_URL: "http://localhost:3000"` in `config.js`, keep the sample local origins in `.env`, then run `python3 -m http.server 8080` from this directory and open `http://localhost:8080`.

## Frontend configuration

Edit `config.js` before deploying:

```js
window.JADULOADER_CONFIG = Object.freeze({
  API_BASE_URL: "https://your-backend.example.com",
  CONTACT_EMAIL: "support@example.com"
});
```

Leave `API_BASE_URL` blank for a same-origin site. Set a monitored `CONTACT_EMAIL` or leave it blank. These frontend values are public; **never put the YouTube API key in `config.js`**.

## Deploy the static frontend

The static host serves only the frontend; it cannot run YouTube search, yt-dlp, or FFmpeg. Deploy the backend separately on an HTTPS Node.js host with temporary disk storage, yt-dlp, and FFmpeg.

### GitHub Pages

1. Put `index.html`, `styles.css`, `config.js`, and `app.js` in the repository's published root.
2. Set `API_BASE_URL` in `config.js` to the backend HTTPS origin.
3. Push the files, then use repository **Settings → Pages** to publish the desired branch and root folder.
4. Set the exact GitHub Pages origin in the backend's `ALLOWED_ORIGINS` variable and restart the backend.

### Netlify

1. Import a repository with the four frontend files, or deploy that folder with Netlify Drop.
2. Use the folder containing `index.html` as the publish directory; no build command is needed.
3. Set `API_BASE_URL` in `config.js` to the backend HTTPS origin before publishing.
4. Set the exact Netlify/custom-domain origin in the backend's `ALLOWED_ORIGINS` and restart the backend.

## Backend routes and operational limits

- `GET /api/status` — reports whether search key and media tools are configured.
- `POST /api/search` — `{ "query": "search terms or YouTube video URL" }`; searches all public channels.
- `POST /api/youtube-download` — `{ "videoId": "...", "format": "mp3"|"mp4", "authorized": true }`; requires the per-video rights confirmation.
- `POST /api/convert` — multipart upload of a media file you own, with `format=mp3` or `format=mp4`.
- `GET /api/download/:id` — retrieves a temporary prepared file.

The service permits one conversion at a time; uploads/outputs are limited to 150 MB and two hours, and prepared files expire after one hour. Do not expose the backend publicly without stronger production controls such as authentication, abuse prevention, disk quotas, monitoring, and an appropriate retention policy.

The sandbox preview is temporary and is not a permanent hosted site.
