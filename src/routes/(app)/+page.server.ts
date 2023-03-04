import type { PageServerLoad } from './$types'
import { db } from '$lib/scripts/db'


export const load: PageServerLoad = async () => {
    const categories = db.category.findMany({
        include: {
            images: true
        }
    })
    return {categories}
}