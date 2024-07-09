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
3. Noticed that some files have a `+` as a prefix. Learned that these files are "special" files that have nothing to do with rendering a specific component. Output from ChatGPT
    > In the Vite/Vike framework, the plus sign (+) in front of the file names is used to designate certain files for specific purposes within the routing and configuration system. Here’s an explanation of why the plus sign is needed for the first three files but not the fourth:
    >
    > +config.js:
    > This file is likely used to define configuration settings for the route or component it is associated with. The plus sign indicates that this file is special and should be treated as configuration data by the Vite/Vike system.
    >
    > +data.js:
    > This file is used to provide data for the route or component. The plus sign signals to the Vite/Vike system that this file contains data-related logic or information that should be loaded and possibly pre-fetched for the route.
    >
    > +Page.jsx: This file represents a route component. The plus sign indicates that this file should be treated as a page component by the Vite/Vike routing system. It defines a route within the application, and the Vite/Vike system will automatically generate the corresponding route based on this file.
    >
    > TodoList.jsx: This file does not need the plus sign because it is a regular component used within the +Page.jsx route. It does not represent a special route or configuration file. Instead, it is a standard React component that is used to render a part of the UI within the +Page.jsx route.
    >
    > In summary, the plus sign (+) is used to designate files that have a special role in the Vite/Vike framework, such as configuration, data provision, or defining a route. Regular components that do not serve these specific purposes do not need the plus sign.
1. Vike uses convention-based routing, like Next.js. The `+Page.jsx` file in a directory defines that directory as a client-side route for the browser.
2. Vike provides a `useData()` hook that invokes the `data` function in a special `+data.js` file in the same directory. I find it a compelling way to enforce SoC.
    ```js
    export const data = async () => {
       const response = await fetch("https://brillout.github.io/star-wars/api/films.json");
       const moviesData = await response.json()
       // We remove data we don't need because the data is passed to the client; we should
       // minimize what is sent over the network.
       const movies = minimize(moviesData);
       return movies;
   }
   ```
1. The `+onPageTransitionStart/End.js` event files to toggle opacity is a nice touch.