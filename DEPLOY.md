# HomeRun — Deployment Guide

## Quick Deploy to Netlify (one command)

```bash
# 1. Unzip the source
unzip homerun-source.zip && cd homerun

# 2. Install dependencies
npm install

# 3. Deploy to your existing Netlify site
npx netlify-cli deploy --prod --dir=dist --site=fa059f5e-2f0c-4c31-85ae-8efd22f7fc65
```

Your live URL: **https://homerun-webapp.netlify.app**

## Or: Connect GitHub Repo

1. Go to https://app.netlify.com/projects/homerun-webapp
2. Click "Link a repository" → select `tarsc8d-ops/homerun-app`
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click Deploy

## Supabase Details

- **Project**: homerun
- **Region**: ap-southeast-2 (Sydney)
- **URL**: https://cxzvsvhkpmfeaaqltvyy.supabase.co
- **Dashboard**: https://supabase.com/dashboard/project/cxzvsvhkpmfeaaqltvyy

## Google OAuth Setup

1. Go to https://console.cloud.google.com
2. Create OAuth 2.0 credentials
3. Add redirect URI: `https://cxzvsvhkpmfeaaqltvyy.supabase.co/auth/v1/callback`
4. In Supabase dashboard → Auth → Providers → Enable Google
5. Add your Google Client ID and Secret

## Environment Variables (already set on Netlify)

- `VITE_SUPABASE_URL` = https://cxzvsvhkpmfeaaqltvyy.supabase.co
- `VITE_SUPABASE_ANON_KEY` = (set in Netlify env vars)
