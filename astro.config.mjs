import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        // Configure where our media assets are stored & served from
        media_folder: 'public/assets/img',
        public_folder: '/assets/img',
        // Configure the content collections
        collections: [
          {
            name: 'blog',
            label: 'Blog',
            folder: 'src/pages/blog',
            create: true,
						slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
            fields: [
							{ label: "Layout", name: 'layout', widget: "hidden", default: "../../layouts/BlogPostLayout.astro" },
              { label: "Title", name: 'title', widget: "string" },
							{ label: "Description", name: "description", widget: "string" },
							{ label: "Author", name: "author", widget: "string" },
              { label: 'Date', name: 'date', widget: 'datetime', format: 'MMMM d, Y', date_format: 'MMMM d, Y', time_format: false },
							{ label: "Featured Image", name: "image", widget: "image" },
							{ label: "Image caption", name: "imageAlt", widget: "string" },
							{ label: "Tags", name: "tags", widget: "list", default: "post" },
							{ label: "Body", name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    }),
  ],
});