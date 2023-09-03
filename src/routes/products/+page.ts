import type { Color, Product, Tag } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params, fetch}) {
    try {

        const catRes = await fetch('/api/categories')
        const categories = await catRes.json()

        const prodRes = await fetch('/api/products')
        const products: Product[] = await prodRes.json() 
       
        const colrRes = await fetch('/api/colors')
        const colors: Color[] = await colrRes.json() 

        const tagRes = await fetch('/api/tags')
        const tags: Tag[] = await tagRes.json() 

		return {
            categories,
            products,
            colors,
            tags
      
		}
	} catch (e) {
		throw error(404, `Could not find products`)
	}
}