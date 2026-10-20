This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Kalender kontribusi GitHub + GitLab

Tambahkan nilai berikut ke `.env.local` agar kalender kontribusi gabungan bisa memuat data akun:

```env
GITHUB_USERNAME=username-github
GITHUB_TOKEN=github-personal-access-token
GITLAB_USERNAME=username-gitlab
GITLAB_URL=https://gitlab.com
GITLAB_TOKEN=gitlab-personal-access-token
```

Buat GitHub personal access token dengan izin baca profil pengguna. Buat juga GitLab personal access token dengan scope `read_user` (atau `api`). Keduanya hanya digunakan oleh endpoint server `/api/contributions` dan tidak dikirim ke browser. `GITLAB_URL` adalah alamat instance GitLab, misalnya `https://gitlab.svara.id`. GitLab menyimpan event aktivitas hingga tiga tahun. Setelah mengisi `.env.local`, mulai ulang server Next.js.
