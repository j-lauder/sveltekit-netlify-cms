import adapter from '@sveltejs/adapter-netlify'

export default {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			pages: ['*'],
		},
	}
}