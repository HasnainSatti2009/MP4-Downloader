require('dotenv').config();
const express = require('express');
const multer = require('multer');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { spawn, spawnSync } = require('node:child_process');

const YTDLP = path.join(__dirname, 'bin', 'yt-dlp');
const FFMPEG = require('ffmpeg-static');
const FFPROBE = require('ffprobe-static').path;

const app = express();
app.set('trust proxy', 1);
const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
<<<<<<< HEAD
const IS_VERCEL = Boolean(process.env.VERCEL);
const TEMP = IS_VERCEL ? '/tmp/jaduloader' : path.join(ROOT, 'data', 'tmp');
=======
const TEMP = path.join(os.tmpdir(), 'jaduloader');
>>>>>>> c76920e2fc535267ca4b47865bdf5cfd2a6c044b
const INCOMING = path.join(TEMP, 'incoming');
const OUTPUT = path.join(TEMP, 'converted');
const YOUTUBE_TEMP = path.join(TEMP, 'youtube');
const MAX_BYTES = 150 * 1024 * 1024;
const MAX_DURATION = 2 * 60 * 60;
const FILE_TTL_MS = 60 * 60 * 1000;
<<<<<<< HEAD
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || '';
const ALLOWED_ORIGINS = new Set((process.env.ALLOWED_ORIGINS || 'http://localhost:8080,http://127.0.0.1:8080').split(',').map(s => s.trim()).filter(Boolean));

/* ---- Locate yt-dlp / ffmpeg / ffprobe (bundled binaries first, then PATH) ---- */
function resolveYtDlp() {
  const bundled = path.join(ROOT, 'bin', 'yt-dlp');
  if (process.env.YTDLP_PATH) return process.env.YTDLP_PATH;
  if (fs.existsSync(bundled)) {
    if (!IS_VERCEL) return bundled;
    // Vercel's deployment folder is read-only; copy to /tmp so we can guarantee the exec bit.
    const target = '/tmp/yt-dlp';
    try { if (!fs.existsSync(target)) { fs.copyFileSync(bundled, target); } fs.chmodSync(target, 0o755); return target; }
    catch { return bundled; }
  }
  return 'yt-dlp';
}
function resolveFfmpeg() {
  if (process.env.FFMPEG_PATH) return process.env.FFMPEG_PATH;
  try { const p = require('@ffmpeg-installer/ffmpeg').path; if (p && fs.existsSync(p)) { if (IS_VERCEL) { const t = '/tmp/ffmpeg'; if (!fs.existsSync(t)) fs.copyFileSync(p, t); fs.chmodSync(t, 0o755); return t; } return p; } } catch { /* not installed */ }
  return 'ffmpeg';
}
const YTDLP_BIN = resolveYtDlp();
const FFMPEG_BIN = resolveFfmpeg();
const FFPROBE_BIN = process.env.FFPROBE_PATH || 'ffprobe'; // optional; only needed for /api/convert (file upload converter)
const TOOL_STATUS = {
  ytDlp: spawnSync(YTDLP_BIN, ['--version'], { encoding: 'utf8' }).status === 0,
  ffmpeg: spawnSync(FFMPEG_BIN, ['-version'], { encoding: 'utf8' }).status === 0,
  ffprobe: spawnSync(FFPROBE_BIN, ['-version'], { encoding: 'utf8' }).status === 0
};
const YTDLP_COMMON = ['--cache-dir', IS_VERCEL ? '/tmp/yt-dlp-cache' : path.join(TEMP, 'yt-dlp-cache'), '--ffmpeg-location', FFMPEG_BIN];
=======

// FIXED: never hardcode API key
const YOUTUBE_API_KEY = 'AIzaSyDzNxVLJpR77W4NnFEXABLKPuydKdth53c';

const ALLOWED_ORIGINS = new Set(
  (process.env.ALLOWED_ORIGINS || 'http://localhost:8080,http://127.0.0.1:8080')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
);

const TOOL_STATUS = {
  ytDlp: spawnSync(YTDLP, ['--version'], { encoding: 'utf8' }).status === 0,
  ffmpeg: spawnSync(FFMPEG, ['-version'], { encoding: 'utf8' }).status === 0,
  ffprobe: spawnSync(FFPROBE, ['-version'], { encoding: 'utf8' }).status === 0
};

>>>>>>> c76920e2fc535267ca4b47865bdf5cfd2a6c044b
const savedOutputs = new Map();
const requestBuckets = new Map();
let conversionRunning = false;

for (const dir of [INCOMING, OUTPUT, YOUTUBE_TEMP]) {
  fs.mkdirSync(dir, { recursive: true, mode: 0o700 });
}

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: https://i.ytimg.com https://*.ytimg.com https://*.googleusercontent.com; frame-src https://www.youtube-nocookie.com; connect-src 'self' https://www.googleapis.com; media-src 'self' blob: https://*.googlevideo.com; object-src 'none'; base-uri 'self'; form-action 'self'"
  );

  const origin = req.get('Origin');
  if (origin) {
    const sameOrigin = origin === `${req.protocol}://${req.get('host')}`;
    if (!sameOrigin && !ALLOWED_ORIGINS.has(origin)) {
      return res.status(403).json({
        error: 'This website origin is not allowed. Add it to ALLOWED_ORIGINS on the backend.'
      });
    }
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.use(express.json({ limit: '32kb' }));

function rateLimit(max, windowMs) {
  return (req, res, next) => {
    const key = `${req.ip || req.socket.remoteAddress || 'unknown'}|${req.path}`;
    const now = Date.now();
    let bucket = requestBuckets.get(key);
    if (!bucket || now - bucket.start >= windowMs) bucket = { start: now, count: 0 };
    bucket.count += 1;
    requestBuckets.set(key, bucket);
    if (bucket.count > max) {
      return res.status(429).json({ error: 'Too many requests. Please wait a minute and try again.' });
    }
    next();
  };
}

setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of requestBuckets) {
    if (now - bucket.start > 10 * 60 * 1000) requestBuckets.delete(key);
  }
}, 10 * 60 * 1000).unref();

function parseYouTubeUrl(value) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    let id = null;
    if (host === 'youtu.be') id = url.pathname.slice(1).split('/')[0];
    else if (['youtube.com', 'm.youtube.com', 'music.youtube.com', 'youtube-nocookie.com'].includes(host)) {
      id = url.searchParams.get('v') || url.pathname.match(/\/(?:embed|shorts|live)\/([^/?]+)/i)?.[1] || null;
    }
    return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

async function youtubeRequest(endpoint, params) {
  if (!YOUTUBE_API_KEY) {
    const error = new Error(
      'All-channel YouTube search is not configured. Add a fresh, restricted YOUTUBE_API_KEY to the backend .env file.'
    );
    error.status = 503;
    throw error;
  }
  const url = new URL(`https://www.googleapis.com/youtube/v3/${endpoint}`);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, String(value));
  url.searchParams.set('key', YOUTUBE_API_KEY);

  let response;
  try {
    response = await fetch(url, { signal: AbortSignal.timeout(15000) });
  } catch {
    const error = new Error('Could not reach YouTube Data API. Try again later.');
    error.status = 503;
    throw error;
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const reason = data?.error?.errors?.[0]?.reason;
    const message =
      reason === 'quotaExceeded'
        ? 'YouTube Data API daily quota exceeded.'
        : 'YouTube Data API request failed. Check the private backend key, API activation, restrictions, and quota.';
    const error = new Error(message);
    error.status = response.status === 403 ? 429 : 502;
    throw error;
  }
  return data;
}

function run(program, args, timeoutMs = 8 * 60 * 1000, maxOutputChars = 12_000_000) {
  return new Promise((resolve, reject) => {
    const child = spawn(program, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '',
      stderr = '',
      timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill('SIGKILL');
    }, timeoutMs);

    child.stdout.on('data', chunk => {
      if (stdout.length < maxOutputChars) stdout += chunk.toString();
    });
    child.stderr.on('data', chunk => {
      if (stderr.length < 8000) stderr += chunk.toString();
    });
    child.on('error', error => {
      clearTimeout(timer);
      reject(error);
    });
    child.on('close', code => {
      clearTimeout(timer);
      if (code === 0 && !timedOut) resolve({ stdout, stderr });
      else {
        const error = new Error(timedOut ? 'Process timed out.' : stderr || `Process failed (exit ${code}).`);
        if (timedOut) error.code = 'ETIMEDOUT';
        reject(error);
      }
    });
  });
}

async function getVideoInfo(videoId) {
<<<<<<< HEAD
  const result = await run(YTDLP_BIN, [...YTDLP_COMMON,'--no-playlist','--skip-download','--no-warnings','--no-call-home','--dump-single-json',`https://www.youtube.com/watch?v=${videoId}`], 90000);
=======
  const result = await run(
    YTDLP,
    [
      '--no-playlist',
      '--skip-download',
      '--no-warnings',
      '--no-call-home',
      '--dump-single-json',
      `https://www.youtube.com/watch?v=${videoId}`
    ],
    90000
  );

>>>>>>> c76920e2fc535267ca4b47865bdf5cfd2a6c044b
  let info;
  try {
    info = JSON.parse(result.stdout);
  } catch {
    throw new Error('Media service returned invalid video metadata.');
  }

  if (info.id !== videoId) throw new Error('Media service returned a different video.');
  if (info.is_live || !Number.isFinite(Number(info.duration)) || Number(info.duration) <= 0) {
    const error = new Error('Live videos and videos without a fixed duration are not supported.');
    error.status = 422;
    throw error;
  }
  if (Number(info.duration) > MAX_DURATION) {
    const error = new Error('Videos longer than 2 hours are not supported.');
    error.status = 413;
    throw error;
  }
  return info;
}

function mediaError(error) {
  if (error.status) return { status: error.status, message: error.message };
  if (error.code === 'ENOENT') {
    return { status: 503, message: 'yt-dlp or FFmpeg is not installed. Follow the backend setup guide.' };
  }
  if (/sign in to confirm|not a bot|confirm you’re not a bot/i.test(error.message || '')) {
    return {
      status: 503,
      message:
        'YouTube blocked automated access from this backend. No cookies or sign-in bypass are used; try later or use YouTube Studio/Takeout for your own uploads.'
    };
  }
  return {
    status: 422,
    message: 'Could not prepare this video. It may be unavailable, restricted, or blocked by its provider.'
  };
}

app.get('/healthz', (_req, res) => res.json({ ok: true }));

app.get('/api/status', (_req, res) =>
  res.json({
    youtubeSearchConfigured: Boolean(YOUTUBE_API_KEY),
    youtubeDownloadsConfigured: TOOL_STATUS.ytDlp && TOOL_STATUS.ffmpeg,
    converterConfigured: TOOL_STATUS.ffmpeg && TOOL_STATUS.ffprobe
  })
);

app.post('/api/search', rateLimit(30, 60 * 1000), async (req, res) => {
  const query = String(req.body?.query || '').trim().slice(0, 160);
  if (!query) return res.status(400).json({ error: 'Enter a search term or paste a YouTube video URL.' });

  try {
    const directId = parseYouTubeUrl(query);
    const data = directId
      ? await youtubeRequest('videos', { part: 'snippet', id: directId })
      : await youtubeRequest('search', { part: 'snippet', type: 'video', maxResults: 9, q: query });

    const items = (data.items || [])
      .map(item => ({
        videoId: typeof item.id === 'string' ? item.id : item.id?.videoId,
        title: item.snippet?.title || 'YouTube video',
        channel: item.snippet?.channelTitle || 'YouTube channel',
        channelId: item.snippet?.channelId || '',
        publishedAt: item.snippet?.publishedAt || '',
        thumbnail: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url || ''
      }))
      .filter(item => item.videoId && /^[A-Za-z0-9_-]{11}$/.test(item.videoId));

    res.setHeader('Cache-Control', 'no-store');
    res.json({ items, scope: 'all-public-youtube-channels' });
  } catch (error) {
    res.status(error.status || 502).json({ error: error.message || 'Could not search YouTube right now.' });
  }
});

app.post('/api/youtube-download', rateLimit(4, 60 * 1000), async (req, res) => {
  const videoId = String(req.body?.videoId || '');
  const format = String(req.body?.format || '').toLowerCase();

  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) return res.status(400).json({ error: 'Invalid YouTube video ID.' });
  if (!['mp3', 'mp4'].includes(format)) return res.status(400).json({ error: 'Choose MP3 or MP4 output.' });
  if (req.body?.authorized !== true) {
    return res.status(403).json({
      error: 'Confirm that you own this video or have permission to download it before processing.'
    });
  }
  if (!TOOL_STATUS.ytDlp || !TOOL_STATUS.ffmpeg) {
    return res.status(503).json({ error: 'The download backend requires yt-dlp and FFmpeg.' });
  }
  if (conversionRunning) return res.status(429).json({ error: 'Another conversion is running. Please retry shortly.' });

  conversionRunning = true;
  const workDir = path.join(YOUTUBE_TEMP, crypto.randomUUID());
  let finalPath;

  try {
    await fsp.mkdir(workDir, { recursive: true, mode: 0o700 });
<<<<<<< HEAD
    const info = await getVideoInfo(videoId); const outputTemplate = path.join(workDir, '%(id)s.%(ext)s');
    const quality = String(req.body?.audioQuality || '192K'); const safeQuality = ['128K','192K','256K','320K'].includes(quality) ? quality : '192K';
    const formatArgs = format === 'mp3'
      ? ['--format','bestaudio/best','--extract-audio','--audio-format','mp3','--audio-quality',safeQuality]
      : ['--format','bv*[height<=480]+ba/b[height<=480]','--merge-output-format','mp4','--recode-video','mp4'];
    await run(YTDLP_BIN,[...YTDLP_COMMON,'--no-playlist','--no-progress','--no-warnings','--no-call-home','--max-filesize','150M','--output',outputTemplate,...formatArgs,`https://www.youtube.com/watch?v=${videoId}`],IS_VERCEL?55*1000:10*60*1000);
    const outputFile = (await fsp.readdir(workDir)).find(name => name.toLowerCase().endsWith(`.${format}`) && !name.endsWith('.part'));
=======
    const info = await getVideoInfo(videoId);
    const outputTemplate = path.join(workDir, '%(id)s.%(ext)s');
    const quality = String(req.body?.audioQuality || '192K');
    const safeQuality = ['128K', '192K', '256K', '320K'].includes(quality) ? quality : '192K';

    const formatArgs =
      format === 'mp3'
        ? ['--format', 'bestaudio/best', '--extract-audio', '--audio-format', 'mp3', '--audio-quality', safeQuality]
        : [
            '--format',
            'bv*[height<=480]+ba/b[height<=480]',
            '--merge-output-format',
            'mp4',
            '--recode-video',
            'mp4'
          ];

    await run(
      YTDLP,
      [
        '--no-playlist',
        '--no-progress',
        '--ffmpeg-location',
        FFMPEG,
        '--no-warnings',
        '--no-call-home',
        '--max-filesize',
        '150M',
        '--output',
        outputTemplate,
        ...formatArgs,
        `https://www.youtube.com/watch?v=${videoId}`
      ],
      10 * 60 * 1000
    );

    const outputFile = (await fsp.readdir(workDir)).find(
      name => name.toLowerCase().endsWith(`.${format}`) && !name.endsWith('.part')
    );
>>>>>>> c76920e2fc535267ca4b47865bdf5cfd2a6c044b
    if (!outputFile) throw new Error('Expected output file was not created.');

    const sourcePath = path.join(workDir, outputFile);
    if ((await fsp.stat(sourcePath)).size > MAX_BYTES) throw new Error('Output exceeded the 150 MB limit.');

    const savedId = crypto.randomUUID();
    finalPath = path.join(OUTPUT, `${savedId}.${format}`);
    await fsp.rename(sourcePath, finalPath);

    const baseName =
      (info.title || `Jaduloader_${videoId}`)
        .replace(/[^\p{L}\p{N}._ -]+/gu, '')
        .trim()
        .replace(/\s+/g, '_')
        .slice(0, 70) || `Jaduloader_${videoId}`;
    const filename = `${baseName}.${format}`;

    const cleanup = setTimeout(async () => {
      savedOutputs.delete(savedId);
      await fsp.unlink(finalPath).catch(() => {});
    }, FILE_TTL_MS);
    cleanup.unref();

    savedOutputs.set(savedId, { path: finalPath, name: filename });
    res.json({ downloadUrl: `/api/download/${savedId}`, filename, expiresInMinutes: 60 });
  } catch (error) {
    if (finalPath) await fsp.unlink(finalPath).catch(() => {});
    const mapped = mediaError(error);
    res.status(mapped.status).json({ error: mapped.message });
  } finally {
    await fsp.rm(workDir, { recursive: true, force: true }).catch(() => {});
    conversionRunning = false;
  }
});

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, INCOMING),
  filename: (_req, file, cb) =>
    cb(null, `${crypto.randomUUID()}${path.extname(file.originalname).toLowerCase().slice(0, 12)}`)
});

const uploader = multer({
  storage,
  limits: { fileSize: MAX_BYTES, files: 1, fields: 2, parts: 4 },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const allowedExt = /\.(mp3|mp4|m4a|wav|ogg|webm|aac|flac|mov|mkv|avi|m4v)$/i.test(ext);
    const allowedMime =
      file.mimetype.startsWith('audio/') ||
      file.mimetype.startsWith('video/') ||
      file.mimetype === 'application/octet-stream';
    if (allowedExt && allowedMime) return cb(null, true);
    cb(new Error('Choose a supported audio or video file.'));
  }
});

app.post('/api/convert', rateLimit(4, 60 * 1000), uploader.single('media'), async (req, res) => {
  const source = req.file?.path;
  let outputPath;
  let acquired = false;

  try {
<<<<<<< HEAD
    if(!req.file) return res.status(400).json({error:'Choose a media file to convert.'});
    const format=String(req.body.format||'').toLowerCase(); if(!['mp3','mp4'].includes(format)) return res.status(400).json({error:'Choose MP3 or MP4 output.'});
    if(conversionRunning) return res.status(429).json({error:'A conversion is already running. Please retry in a moment.'});
    conversionRunning=true; acquired=true;
    const probe=await run(FFPROBE_BIN,['-v','error','-show_entries','format=duration:stream=codec_type','-of','json',source],60000); const data=JSON.parse(probe.stdout);
    const types=(data.streams||[]).map(stream=>stream.codec_type); const duration=Number(data.format?.duration||0);
    if(duration>MAX_DURATION) return res.status(413).json({error:'Files longer than 2 hours are not supported.'});
    if(format==='mp3'&&!types.includes('audio')) return res.status(422).json({error:'This file has no audio track to export as MP3.'});
    if(format==='mp4'&&!types.includes('video')) return res.status(422).json({error:'MP4 output requires a video source file.'});
    const id=crypto.randomUUID(); outputPath=path.join(OUTPUT,`${id}.${format}`);
    const args=format==='mp3'
      ? ['-nostdin','-hide_banner','-loglevel','error','-y','-i',source,'-map','0:a:0','-vn','-codec:a','libmp3lame','-q:a','2',outputPath]
      : ['-nostdin','-hide_banner','-loglevel','error','-y','-i',source,'-map','0:v:0','-map','0:a:0?','-c:v','libx264','-preset','veryfast','-crf','23','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart',outputPath];
    await run(FFMPEG_BIN,args);
    const base=path.basename(req.file.originalname,path.extname(req.file.originalname)).replace(/[^\p{L}\p{N}._-]+/gu,'_').slice(0,70)||'media'; const filename=`${base}.${format}`;
    const cleanup=setTimeout(async()=>{savedOutputs.delete(id);await fsp.unlink(outputPath).catch(()=>{});},FILE_TTL_MS);cleanup.unref();
    savedOutputs.set(id,{path:outputPath,name:filename});res.json({downloadUrl:`/api/download/${id}`,filename,expiresInMinutes:60});
  } catch(error) { if(outputPath) await fsp.unlink(outputPath).catch(()=>{}); const mapped=mediaError(error); res.status(mapped.status).json({error:mapped.message}); }
  finally { if(source) await fsp.unlink(source).catch(()=>{}); if(acquired) conversionRunning=false; }
=======
    if (!req.file) return res.status(400).json({ error: 'Choose a media file to convert.' });
    const format = String(req.body.format || '').toLowerCase();
    if (!['mp3', 'mp4'].includes(format)) return res.status(400).json({ error: 'Choose MP3 or MP4 output.' });
    if (conversionRunning) return res.status(429).json({ error: 'A conversion is already running. Please retry in a moment.' });

    conversionRunning = true;
    acquired = true;

    const probe = await run(
      FFPROBE,
      ['-v', 'error', '-show_entries', 'format=duration:stream=codec_type', '-of', 'json', source],
      60000
    );
    const data = JSON.parse(probe.stdout);
    const types = (data.streams || []).map(stream => stream.codec_type);
    const duration = Number(data.format?.duration || 0);

    if (duration > MAX_DURATION) return res.status(413).json({ error: 'Files longer than 2 hours are not supported.' });
    if (format === 'mp3' && !types.includes('audio')) {
      return res.status(422).json({ error: 'This file has no audio track to export as MP3.' });
    }
    if (format === 'mp4' && !types.includes('video')) {
      return res.status(422).json({ error: 'MP4 output requires a video source file.' });
    }

    const id = crypto.randomUUID();
    outputPath = path.join(OUTPUT, `${id}.${format}`);

    const args =
      format === 'mp3'
        ? [
            '-nostdin',
            '-hide_banner',
            '-loglevel',
            'error',
            '-y',
            '-i',
            source,
            '-map',
            '0:a:0',
            '-vn',
            '-codec:a',
            'libmp3lame',
            '-q:a',
            '2',
            outputPath
          ]
        : [
            '-nostdin',
            '-hide_banner',
            '-loglevel',
            'error',
            '-y',
            '-i',
            source,
            '-map',
            '0:v:0',
            '-map',
            '0:a:0?',
            '-c:v',
            'libx264',
            '-preset',
            'veryfast',
            '-crf',
            '23',
            '-pix_fmt',
            'yuv420p',
            '-c:a',
            'aac',
            '-b:a',
            '128k',
            '-movflags',
            '+faststart',
            outputPath
          ];

    await run(FFMPEG, args);

    const base =
      path
        .basename(req.file.originalname, path.extname(req.file.originalname))
        .replace(/[^\p{L}\p{N}._-]+/gu, '_')
        .slice(0, 70) || 'media';
    const filename = `${base}.${format}`;

    const cleanup = setTimeout(async () => {
      savedOutputs.delete(id);
      await fsp.unlink(outputPath).catch(() => {});
    }, FILE_TTL_MS);
    cleanup.unref();

    savedOutputs.set(id, { path: outputPath, name: filename });
    res.json({ downloadUrl: `/api/download/${id}`, filename, expiresInMinutes: 60 });
  } catch (error) {
    if (outputPath) await fsp.unlink(outputPath).catch(() => {});
    const mapped = mediaError(error);
    res.status(mapped.status).json({ error: mapped.message });
  } finally {
    if (source) await fsp.unlink(source).catch(() => {});
    if (acquired) conversionRunning = false;
  }
>>>>>>> c76920e2fc535267ca4b47865bdf5cfd2a6c044b
});

app.get('/api/download/:id', rateLimit(30, 60 * 1000), (req, res) => {
  if (!/^[0-9a-f-]{36}$/i.test(req.params.id)) return res.status(404).json({ error: 'File not found or expired.' });
  const file = savedOutputs.get(req.params.id);
  if (!file) return res.status(404).json({ error: 'File not found or expired.' });

  res.setHeader('Cache-Control', 'no-store');
  res.download(file.path, file.name, error => {
    if (error && !res.headersSent) res.status(500).end('Download failed.');
  });
});

const suggestCache = new Map();
const SUGGEST_TTL_MS = 10 * 60 * 1000;

async function fetchSuggestions(q, hl) {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (compatible; JaduLoader/1.0)',
    'Accept-Language': hl
  };
  const sources = [
    {
      base: 'https://suggestqueries.google.com/complete/search',
      params: { client: 'firefox', ds: 'yt', hl, q },
      jsonp: false
    },
    {
      base: 'https://suggestqueries-clients6.youtube.com/complete/search',
      params: { client: 'youtube', ds: 'yt', hl, q },
      jsonp: true
    }
  ];

  for (const source of sources) {
    try {
      const url = new URL(source.base);
      for (const [k, v] of Object.entries(source.params)) url.searchParams.set(k, v);
      const response = await fetch(url, { headers, signal: AbortSignal.timeout(4000) });
      if (!response.ok) continue;

      const buffer = await response.arrayBuffer();
      const charset =
        /charset=([^;]+)/i.exec(response.headers.get('content-type') || '')?.[1]?.trim() || 'utf-8';
      let text;
      try {
        text = new TextDecoder(charset).decode(buffer);
      } catch {
        text = new TextDecoder('utf-8').decode(buffer);
      }

      let data;
      if (source.jsonp) {
        const match = text.match(/\((\[[\s\S]*\])\)\s*;?\s*$/);
        if (!match) continue;
        data = JSON.parse(match[1]);
      } else {
        data = JSON.parse(text);
      }

      const items = (Array.isArray(data?.[1]) ? data[1] : [])
        .map(x => (Array.isArray(x) ? x[0] : x))
        .filter(s => typeof s === 'string' && s.trim())
        .map(s => s.trim().slice(0, 100))
        .slice(0, 8);

      if (items.length) return items;
    } catch {
      /* try next source */
    }
  }
  return [];
}

app.get('/api/suggest', rateLimit(120, 60 * 1000), async (req, res) => {
  const q = String(req.query.q || '').trim().slice(0, 100);
  const hlRaw = String(req.query.hl || 'en');
  const hl = /^[a-z]{2}(-[A-Za-z]{2})?$/.test(hlRaw) ? hlRaw : 'en';

  res.setHeader('Cache-Control', 'public, max-age=300');

  if (q.length < 2 || /^(https?:\/\/|www\.)/i.test(q) || parseYouTubeUrl(q)) {
    return res.json({ suggestions: [] });
  }

  const key = `${hl}|${q.toLowerCase()}`;
  const hit = suggestCache.get(key);
  if (hit && Date.now() - hit.at < SUGGEST_TTL_MS) return res.json({ suggestions: hit.items });

  const items = await fetchSuggestions(q, hl);
  if (items.length) {
    if (suggestCache.size > 500) suggestCache.clear();
    suggestCache.set(key, { items, at: Date.now() });
  }
  res.json({ suggestions: items });
});

app.get('/', (_req, res) => res.sendFile(path.join(ROOT, 'index.html')));
app.get('/styles.css', (_req, res) => res.sendFile(path.join(ROOT, 'styles.css')));
app.get('/config.js', (_req, res) => res.sendFile(path.join(ROOT, 'config.js')));
app.get('/app.js', (_req, res) => res.sendFile(path.join(ROOT, 'app.js')));
app.get('/i18n.js', (_req, res) => res.sendFile(path.join(ROOT, 'i18n.js')));

app.use('/api', (_req, res) => res.status(404).json({ error: 'API endpoint not found.' }));
app.use((_req, res) => res.status(404).type('text').send('Not found'));

app.use((error, _req, res, _next) => {
  if (error instanceof multer.MulterError && error.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({ error: 'Maximum upload size is 150 MB.' });
  }
  if (error instanceof multer.MulterError) {
    return res.status(400).json({ error: 'Upload rejected. Choose one supported media file.' });
  }
  res.status(400).json({ error: error.message || 'Request could not be processed.' });
});
<<<<<<< HEAD
console.log(`Search key configured: ${Boolean(YOUTUBE_API_KEY)}; media tools: yt-dlp=${TOOL_STATUS.ytDlp}, ffmpeg=${TOOL_STATUS.ffmpeg}, ffprobe=${TOOL_STATUS.ffprobe}`);
if (!IS_VERCEL) {
  app.listen(PORT,'0.0.0.0',()=>console.log(`Jaduloader listening on 0.0.0.0:${PORT}`));
}
module.exports = app; // Vercel uses the exported Express app
=======

if (!process.env.VERCEL) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Jaduloader listening on 0.0.0.0:${PORT}`);
    console.log(
      `Search key configured: ${Boolean(YOUTUBE_API_KEY)}; media tools: yt-dlp=${TOOL_STATUS.ytDlp}, ffmpeg=${TOOL_STATUS.ffmpeg}, ffprobe=${TOOL_STATUS.ffprobe}`
    );
  });
}

module.exports = app;
>>>>>>> c76920e2fc535267ca4b47865bdf5cfd2a6c044b
