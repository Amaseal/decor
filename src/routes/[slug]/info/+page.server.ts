import { STRAPI } from '$env/static/private';
export const load = async ({ params }) => {
    const data = await fetch(`${STRAPI}/api/categories/?populate[0]=info_images&filters[slug][$eq]=${params.slug}`)
    const category = await data.json()
    return {category: category.data[0]}
};