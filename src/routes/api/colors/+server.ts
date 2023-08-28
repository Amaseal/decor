import { json } from '@sveltejs/kit'
import type { Color } from '$lib/types'

async function getPosts() {
	let colors: Color[] = []

	const paths = import.meta.glob('/src/colors/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Color, 'slug'>
			const color = { ...metadata, slug } satisfies Color
			colors.push(color)
		}
	}

	return colors
}

export async function GET() {
	const colors = await getPosts()
	return json(colors)
}