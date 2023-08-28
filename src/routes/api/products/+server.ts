import { json } from '@sveltejs/kit'
import type {  Product } from '$lib/types'

async function getPosts() {
	let products: Product[] = []

	const paths = import.meta.glob('/src/products/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Product, 'slug'>
			const post = { ...metadata, slug } satisfies Product
			products.push(post)
		}
	}

	return products
}

export async function GET() {
	const categories = await getPosts()
	return json(categories)
}