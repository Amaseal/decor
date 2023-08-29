import type { Product } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
    try {
        const product = await import(`../../../products/posts/${params.slug}.md`)
		return {
            product: product.metadata as Product,
      
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}