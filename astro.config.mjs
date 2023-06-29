import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://luisc.dev',
  integrations: [tailwind()]
});
