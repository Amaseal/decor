import type { Color, Product } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load( {params} ) {
    try {

        let category = await import(`../../../../categories/posts/${params.slug}.md`)

		return {
			category: category.metadata,
			slug: params.slug
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}