export type Home = {
	slug: string
	title: string
	intro: string
	featured_image: FeaturedImage
	quotes: Quote[]
	seo: Seo
}

type FeaturedImage = {
	source: string
	alt: string
}

type Quote = {
	quote: string
}

type Seo = {
	title: string
	description: string
	image: string
}

export type About = {
	slug: string
	title: string
	intro: string
	part: Part[]
	legal_info: LegalInfo[]
	seo: Seo
}

type Part = {
	part_title: string
	info: string
	image: string
	image_alt: string
}

type LegalInfo = {
	legal_text: string
}



export type Category = {
	title: string
	slug: string
    description: string 
    order: number
	image: {
		source: string
		alt: string
	}
	description_images: {
		image_1: {
			image_1_source: string
			image_1_alt: string
		}
		image_2: {
			image_2_source: string
			image_2_alt: string
		}
		image_3: {
			image_3_source: string
			image_3_alt: string
		}
	}
	info: string
	info_images: string[]
	seo: Seo
}

export type Product = {
	title: string
	slug: string
	featured_image: {
		source: string
		alt: string
	}
	description: string
	color: string
	tags: string[]
	images: ProducImage[]
	seo: Seo

}

type ProducImage = {
	source: string
	alt: string
}

type ImgProps = {
	src: string;
	w: number;
};
type ImgPropsH = ImgProps & { h: number };

export type ImgMeta = { img: ImgPropsH; sources: { [key: string]: ImgProps[] } };