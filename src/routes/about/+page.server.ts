import { STRAPI } from '$env/static/private';
import type { About } from '../../types/types';

export const load = async () => {

  const about = async () => {
    const aboutData = await fetch(`${STRAPI}/api/about?populate=deep`)
    return await aboutData.json() 
  } 


  return { about: about()}
};