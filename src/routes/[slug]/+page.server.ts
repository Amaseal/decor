import type { Color, Product } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params, fetch, url}) {
    try {

        const tag = url.searchParams.get("byTag")
        const color = url.searchParams.get("byColor")

        let category = await import(`../../categories/posts/${params.slug}.md`)

        const catRes = await fetch('/api/products')
        const productData: Product[] = await catRes.json() 
       
        const colrRes = await fetch('/api/colors')
        const colors: Color[] = await colrRes.json() 

       let products = productData.filter((elem) => {
            return elem.category === category.metadata.title
        })

        if (tag) {
            products = products.filter((elem) => {
                return elem.tags.some(c => c === tag)

            })
        }
        
        if (color) {
            products = products.filter((elem) => {
                return elem.color.some((c) => c===color)
            })
        }

		return {
            category: category.metadata,
            products,
            colors,
            slug: params.slug
      
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}