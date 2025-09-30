import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions"; // functions adapter

export default defineConfig({
    output: "server", // needed for API routes
    adapter: netlify(),
});
