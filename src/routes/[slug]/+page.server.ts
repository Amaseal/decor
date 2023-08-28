import type { Product } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
        const category = await import(`../../categories/posts/${params.slug}.md`)


        // const catRes = await fetch('api/products')
        // const products: Product[] = await catRes.json() 

        // products.filter((elem) => {
        //     return category.metadata.products.some((ele) => {
        //         return ele === elem.slug
        //     })
        // })

        // console.log(products)

		return {
            category: category.metadata,
            // products
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}