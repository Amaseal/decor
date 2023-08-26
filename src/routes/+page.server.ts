import type { Portfolio, Post } from '$lib/types'

export async function load({ fetch }) {
	const catRes = await fetch('api/categories')
	const posts: Post[] = await catRes.json() 
	return {  posts }
}