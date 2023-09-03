import type { Color, Product } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params, fetch}) {
    try {



        let category = await import(`../../../categories/posts/${params.slug}.md`)

        const catRes = await fetch('/api/products')
        const productData: Product[] = await catRes.json() 
       
        const colrRes = await fetch('/api/colors')
        const colors: Color[] = await colrRes.json() 

        let products = productData.filter((elem) => {
            return elem.category === category.metadata.title
        })
        
		return {
            category: category.metadata,
            products,
            slug: params.slug,
            colors,
      
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}