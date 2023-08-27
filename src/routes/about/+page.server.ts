import type { About } from '$lib/types'

export async function load({ fetch }) {
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




	return { about: await getAboutData() as About }
}