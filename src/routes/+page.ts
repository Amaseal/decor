import type { Home, About } from '$lib/types'

export async function load() {
	async function getHomeData() {
		let homePage = {}

		const paths = import.meta.glob('/src/home/*.md', { eager: true })


		for (const path in paths) {
			const file = paths[path]
			const slug = path.split('/').at(-1)?.replace('.md', '')

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<Home, 'slug'>
				const data = { ...metadata, slug } satisfies Home
				homePage = data
			}
		}
		return homePage
	}
	async function getAboutData() {
		let aboutData = {}

		const paths = import.meta.glob('/src/about/*.md', { eager: true })

		for (const path in paths) {
			const file = paths[path]
			const slug = path.split('/').at(-1)?.replace('.md', '')

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<About, 'slug'>
				const data = { ...metadata, slug } satisfies About
				aboutData = data
			}
		}
		return aboutData
	}

	return { homePage: await getHomeData() as Home, about: await getAboutData() as About }
}