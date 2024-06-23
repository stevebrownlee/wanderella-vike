1. Path started reading about support for SSR with Vite
1. This led to looking a Vike, the first suggestion @ (https://github.com/vitejs/awesome-vite#ssr)
1. Vike docs (https://vike.dev/new) recommended using Bati, something I'd never heard of before.
1. Using https://batijs.dev/ for easy scaffolding
1. Bati produces command `pnpm create @batijs/app --react --express --biome`
1. Never heard to `pnpm` before so I went to (https://pnpm.io/installation)
1. Learned about `trap` command to detect if user forcibly stops script execution. I was reviewing the install script for pnpm.
   - `trap 'rm -rf "$tmp_dir"' EXIT INT TERM HUP`
1. Learned about Biome (https://biomejs.dev/) "Format, lint, and more in a fraction of a second"
1. Started the app and saw `cross-fetch` (https://www.npmjs.com/package/cross-fetch) which is a wonderful tool
2. Spent about 20 minutes eradicating TypeScript from the project