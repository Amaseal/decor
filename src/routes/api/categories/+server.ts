import { json } from '@sveltejs/kit'
import type { Category } from '$lib/types'

async function getPosts() {
	let categories: Category[] = []

	const paths = import.meta.glob('/src/categories/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Category, 'slug'>
			const post = { ...metadata, slug } satisfies Category
			categories.push(post)
		}

		categories = categories.sort((first, second) =>
			first.order - second.order
		)
	}

	return categories
}

export async function GET() {
	const categories = await getPosts()
	return json(categories)
}