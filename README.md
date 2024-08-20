# NEXT.JS TEMPLATE

Create a new repository by clicking the [`Use this template`](https://github.com/new?template_name=next-ts-admin-panel-template&template_owner=mahmudulnayeem) button on the repository page.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Then, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dependent Libraries

- [Tailwind CSS](https://tailwindcss.com/)
- [ShadeCn](https://ui.shadcn.com/)
- [Sooner](https://sonner.emilkowal.ski/)
- [Next themes](https://next-themes-example.vercel.app/)
- [zod](https://zod.dev/)
- [Date-fns](https://date-fns.org/)
- [React-hook-form](https://react-hook-form.com/)
- [Lucide](https://lucide.dev/)
- [T3 Env](https://env.t3.gg/)
- [Tanstack query](https://tanstack.com/query/latest)
- [Tanstack Table](https://tanstack.com/table/latest)

## Features

- [x] TypeScript
- [x] ESLint
- [x] Prettier
- [x] Tailwind CSS
- [x] ShadeCn
- [x] commitlint & husky

## Folder Structure

```bash
.
├── components
├── hooks
├── app
│   ├── layout
│   ├── page.tsx
│   ├── favicon.ico
│   ├── global.css
│   └── (other files and folders)
├── lib
│   ├──utils.ts
│   ├──...others
├── public
├── scripts
├── (other folders and files)
└── tsconfig.json
```

## Scripts

- `dev`: Run the development server
- `build`: Build the app for production
- `start`: Run the production build
- `lint`: Run ESLint
- `lint:fix`: Run ESLint and fix issues
- `format`: Run Prettier
- `format:fix`: Run Prettier and fix issues
- `commit`: Run commitizen

## Environment Variables

Read how to use [T3 Env](https://env.t3.gg/) for environment variables.
we setup [T3 Env](https://env.t3.gg/) for environment variables. You can create a `.env` file in the root directory and add your environment variables there. and register in `env.mjs` file.

## Commit Message Convention

This project uses [commitlint](https://commitlint.js.org/) to lint commit messages. The commit message convention is based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Commit Message Format

```bash
<type>[optional scope]: <description>
```

Or you can use the interactive commit message prompt by running

```bash
npm run commit
# or
yarn commit
# or
pnpm commit
# or
bun commit
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
