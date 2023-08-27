

import type { Category } from '$lib/types'
const prerender = true

export async function load({ fetch }) {


	const catRes = await fetch('api/categories')
	const categories: Category[] = await catRes.json() 
	return {categories }
}