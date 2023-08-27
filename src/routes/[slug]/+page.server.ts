import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
        const category = await import(`/src/categories/posts/${params.slug}.md`)
        
     

		return {
			content: category.default,
			meta: category.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}