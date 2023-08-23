import { STRAPI } from '$env/static/private';
export const load = async ({ fetch, params, url }) => {
    const orderBy = url.searchParams.get("orderBy")
    const byTag = url.searchParams.get("byTag")
    const byColor = url.searchParams.get("byColor")

    if (orderBy) {
        const category = async () => {
            const data = await fetch(`${STRAPI}/api/categories/?populate[0]=images&populate[1]=tags&filters[slug][$eq]=${params.slug}`)
            const category = await data.json()
            return category.data[0]
        }
        const products = async () => {
            const data = await fetch(`${STRAPI}/api/products?populate[0]=images&filters[category][slug][$eq]=${params.slug}&pagination[page]=1&pagination[pageSize]=9&sort[0]=updatedAt${orderBy}`)
            const products = await data.json()
            return products.data
        }
        const awaited = async () => {
            const data = await fetch(`${STRAPI}/api/products?populate[0]=images&filters[category][slug][$eq]=${params.slug}&pagination[start]=9&sort[0]=updatedAt${orderBy}`)
            const awaited = await data.json()
            return awaited.data
        }
        const colors = async () => {
            const data = await fetch(`${STRAPI}/api/colors/`)
            const colors = await data.json()
            return colors.data
        }
        return {
            category: category(), products: products(), colors: colors(), await: {
            products: awaited()
        }}
    } else if (byTag) {
        const category = async () => {
            const data = await fetch(`${STRAPI}/api/categories/?populate[0]=images&populate[1]=tags&filters[slug][$eq]=${params.slug}`)
            const category = await data.json()
            return category.data[0]
        }
        const products = async () => {
            const data = await fetch(`${STRAPI}/api/products?populate[0]=images&populate[1]=tags&filters[tags][tag][$eq]=${byTag}&filters[category][slug][$eq]=${params.slug}&pagination[page]=1&pagination[pageSize]=9`)
            const products = await data.json()
            return products.data
        }
        const awaited = async () => {
            const data = await fetch(`${STRAPI}/api/products?populate[0]=images&populate[1]=tags&filters[tags][tag][$eq]=${byTag}&filters[category][slug][$eq]=${params.slug}&pagination[start]=9`)
            const awaited = await data.json()
            return awaited.data
        }
        const colors = async () => {
            const data = await fetch(`${STRAPI}/api/colors/`)
            const colors = await data.json()
            return colors.data
        }

        return {
            category: category(), products: products(), colors: colors(), await: {
            products: awaited()
        }}
    } else if (byColor) {
        const category = async () => {
            const data = await fetch(`${STRAPI}/api/categories/?populate[0]=images&populate[1]=tags&filters[slug][$eq]=${params.slug}`)
            const category = await data.json()
            return category.data[0]
        }
        const products = async () => {
            const data = await fetch(`${STRAPI}/api/products?populate[0]=images&populate[1]=colors&filters[colors][name][$eq]=${byColor}&filters[category][slug][$eq]=${params.slug}&pagination[page]=1&pagination[pageSize]=9`)
            const products = await data.json()
            return products.data
        }
        const awaited = async () => {
            const data = await fetch(`${STRAPI}/api/products?populate[0]=images&populate[1]=colors&filters[colors][name][$eq]=${byColor}&filters[category][slug][$eq]=${params.slug}&pagination[start]=9`)
            const awaited = await data.json()
            return awaited.data
        }
        const colors = async () => {
            const colorData = await fetch(`${STRAPI}/api/colors/`)
            const colors = await colorData.json()
            return colors.data
        }

        return {
            category: category(), products: products(), colors: colors(), await: {
            products: awaited()
        }}
    } else {
        const category = async () => {
            const data = await fetch(`${STRAPI}/api/categories/?populate[0]=images&populate[1]=tags&filters[slug][$eq]=${params.slug}`)
            const category = await data.json()
            return category.data[0]
        }
        const products = async () => {
            const data = await fetch(`${STRAPI}/api/products?populate[0]=images&filters[category][slug][$eq]=${params.slug}&pagination[page]=1&pagination[pageSize]=9`)
            const products = await data.json()
            return products.data
        }
        const awaited = async () => {
            const data = await fetch(`${STRAPI}/api/products?populate[0]=images&filters[category][slug][$eq]=${params.slug}&pagination[start]=9`)
            const awaited = await data.json()
            return awaited.data
        }
        const colors = async () => {
            const data = await fetch(`${STRAPI}/api/colors/`)
            const colors = await data.json()
            return colors.data
        }

        return {
            category: category(), products: products(), colors: colors(), await: {
            products: awaited()
    }}
    }
};
