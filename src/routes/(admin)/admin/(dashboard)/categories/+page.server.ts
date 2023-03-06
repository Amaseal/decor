import type { PageServerLoad } from './$types'
import { db } from '$lib/scripts/db'


export const load = (async () => {
    const categories = await db.category.findMany({
        include: {
            image: true
        }
    })
    return {categories}
}) satisfies PageServerLoad