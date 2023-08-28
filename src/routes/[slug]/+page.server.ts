import type { Product } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params, fetch, url}) {
	try {
        const category = await import(`../../categories/posts/${params.slug}.md`)

        url.searchParams.get("orderBy")
        url.searchParams.get("orderBy")
        url.searchParams.get("orderBy")

        

        const catRes = await fetch('/api/products')
        const productData: Product[] = await catRes.json() 

        let products = productData.filter((elem) => {
            return elem.category === category.metadata.title
        })

		return {
            category: category.metadata,
            products
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}