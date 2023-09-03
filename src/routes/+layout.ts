import type { Category } from '$lib/types'

export async function load({ fetch }) {
	const res = await fetch('/api/categories')
	const categories: Category[] = await res.json() 
	return { categories }
}
