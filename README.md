# AJayji Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It serves as the official website for AJayji, providing users with important information about the application, including its privacy policy and support channels.

## Project Overview

The website is a simple, statically-generated site built with Next.js and Tailwind CSS. It is designed to be lightweight, fast, and easy to maintain.

### Key Features

*   **Privacy Policy Page:** A dedicated page at `/privacy` that outlines the application's privacy policy.
*   **Support Page:** A support page at `/support` that provides users with contact information and a demo video.
*   **Responsive Design:** The website is fully responsive and should work well on all devices.

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

## Recent Changes

*   **Added a Support Page:** A new support page was created at `src/app/support/page.tsx` to meet App Store requirements.
*   **Embedded a Demo Video:** A YouTube video was embedded on the support page to provide users with a visual guide.
*   **Fixed Video Scaling Issues:** The embedded video was initially distorted. This was corrected by using a CSS aspect-ratio technique to ensure the video scales correctly without cropping.
*   **Updated Header Navigation:** The header was updated to include a link to the new support page.
*   **Resolved Linting Errors:** Fixed `react/no-unescaped-entities` errors in the privacy policy page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
