import type { Category} from '$lib/types'

export async function load({ fetch }) {
	const catRes = await fetch('api/categories')
	const posts: Category[] = await catRes.json() 
	return {  posts }
}