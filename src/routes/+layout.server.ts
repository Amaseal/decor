import { STRAPI } from '$env/static/private';

export const load = async () => {

    const header = async () => {
        const data = await fetch(`${STRAPI}/api/header?populate[0]=categories&populate[1]=categories.image`)
        return await data.json()
    } 
    return {header: header()}
};
