export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	layout: string
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	featured: string
}

export type Category = {
	title: string
	slug: string
    description: string 
    order: string
	image: string
}

type ImgProps = {
	src: string;
	w: number;
};
type ImgPropsH = ImgProps & { h: number };

export type ImgMeta = { img: ImgPropsH; sources: { [key: string]: ImgProps[] } };