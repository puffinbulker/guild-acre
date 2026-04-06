# Guild Acre

A premium Gurgaon real estate website built with Next.js and Prisma, prepared for a permanent Vercel deployment backed by PostgreSQL.

## Brand recommendation

Recommended live brand:
- `Guild Acre`

Recommended primary domain:
- `guildacre.com`

Recommended alternates:
- `guildacre.in`
- `guildacregurgaon.com`

I did not find clear indexed web results for `guildacre.com` or the `Guild Acre` real estate brand in my quick search, but that is an inference, not a guarantee of registrar availability. Please verify at your registrar before purchase.

## Production stack

- Next.js App Router
- Prisma ORM
- PostgreSQL for properties and leads
- Vercel for hosting
- Neon Postgres recommended for managed production database

## Features

- Premium homepage and listing pages inspired by modern real estate portals
- Search and filter by budget, location, property type, and keyword
- Property detail pages with image gallery and lead capture form
- Admin login and CRUD dashboard for properties
- WhatsApp CTA
- SEO-friendly metadata, sitemap, and robots rules
- Mobile-friendly layout

## Database schema

### `Property`

- `id`
- `title`
- `slug`
- `description`
- `location`
- `sector`
- `city`
- `priceInr`
- `type`
- `status`
- `bedrooms`
- `bathrooms`
- `areaSqft`
- `featured`
- `imageUrls`
- `amenities`
- `createdAt`
- `updatedAt`

### `Lead`

- `id`
- `name`
- `phone`
- `requirement`
- `propertyId`
- `createdAt`

Schema file: [schema.prisma](D:\Backup Drive\OneDrive\Documents\New project 2\prisma\schema.prisma)

## API endpoints

### Public

- `GET /api/properties`
- `GET /api/properties/:id`
- `POST /api/leads`

### Admin protected

- `POST /api/admin/login`
- `POST /api/admin/logout`
- `POST /api/properties`
- `PATCH /api/properties/:id`
- `DELETE /api/properties/:id`

## Environment variables

Use these in Vercel and locally:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DBNAME?sslmode=require"
ADMIN_EMAIL="admin@yourdomain.com"
ADMIN_PASSWORD=""
ADMIN_PASSWORD_HASH="salt:hexhash"
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="919999999999"
ADMIN_COOKIE_SECRET="long-random-secret"
```

Notes:
- Prefer `ADMIN_PASSWORD_HASH` in production.
- Keep `ADMIN_PASSWORD` empty once `ADMIN_PASSWORD_HASH` is set.
- `NEXT_PUBLIC_SITE_URL` should exactly match the live Vercel domain or your custom domain.

## Generate an admin password hash

Fastest option:

```bash
npm run admin:hash -- your-strong-password
```

Paste the output into `ADMIN_PASSWORD_HASH`.

## Local development

1. Copy [.env.example](D:\Backup Drive\OneDrive\Documents\New project 2\.env.example) to `.env`
2. Point `DATABASE_URL` to a PostgreSQL database
3. Install dependencies:

```bash
npm install
```

4. Push the schema:

```bash
npm run db:push
```

5. Seed sample properties:

```bash
npm run seed
```

6. Start the app:

```bash
npm run dev
```

## Safe Vercel deployment

### Recommended setup

1. Push this repository to GitHub.
2. Create a Neon Postgres database.
3. Import the repo into Vercel.
4. Add these environment variables in Vercel.
   You can copy from [.env.production.example](D:\Backup Drive\OneDrive\Documents\New project 2\.env.production.example):
   - `DATABASE_URL`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD_HASH`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `ADMIN_COOKIE_SECRET`
5. In Vercel, redeploy after the env vars are saved.
6. Run the database bootstrap once:

```bash
npm run db:push
npm run seed
```

### Where to run the bootstrap

Run those commands from your local machine with the same production `DATABASE_URL`, or from a secure CI/developer shell that points to the Neon database.

### After deployment

- Test `/admin/login`
- Change to a custom domain
- Verify `/sitemap.xml`
- Verify lead submission
- Add real image hosting like Cloudinary or Vercel Blob before scaling

## Test deployment checklist

Use this order for the first test launch:

1. Generate `ADMIN_PASSWORD_HASH`
2. Create Neon database
3. Push repo to GitHub
4. Import into Vercel
5. Paste env vars
6. Let Vercel deploy
7. Run `npm run db:push`
8. Run `npm run seed`
9. Open `https://your-project.vercel.app`

## Security notes

- Do not publish with the default admin password
- Use a long random `ADMIN_COOKIE_SECRET`
- Prefer hashed admin passwords
- Keep the database managed and private
- Move property images to dedicated storage instead of external demo URLs for production
