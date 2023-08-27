import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite'
import { imagetools } from 'vite-imagetools'
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), imagetools(),
		Icons({
			compiler: "svelte",
			autoInstall: true
	})]
};

export default config;
