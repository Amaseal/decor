import { STRAPI } from '$env/static/private';
import type { Product } from '../../../types/types';

export const load = async ({ params }) => {
    const productData = await fetch(`${STRAPI}/api/products?populate[0]=images&populate[1]=category&filters[slug][$eq]=${params.slug}`)
    const product = await productData.json()

    return {
        product: product.data[0] as Product
    }
};