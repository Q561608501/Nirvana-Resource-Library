import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '涅槃资源库',
			social: {
				github: 'https://github.com/Q561608501/npcs',
			},
			sidebar: [
				{
					label: '内容指南',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '关于我们', link: '/guides/example/' },
					],
				},
				{
					label: '资源列表',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
