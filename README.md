# Bouncy Hair Unisex Salon (Next.js)

```
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

1. Edit `src/data/site.js`: every `TODO` is a detail to replace (phone, address, hours, prices, reviews, team).
2. Drop photos in `public/images/` and reference them in `site.js` (e.g. `"/images/hero.jpg"`).
3. Bookings POST to `/api/booking`. Set `BOOKING_WEBHOOK_URL` in `.env.local` to forward them (Google Sheets via Apps Script, Zapier, Slack...).
4. Deploy on Vercel: import the repo, add the env var, done.
