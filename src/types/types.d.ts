export type Hero = {
    id: number,
    image: Image
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    title: string,
    quotes: Quote[]
}

export type Quote = {
    id: number,
    quote: string
}

export type About = {
    id: number,
    title: string,
    introduction: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    part: Part[]
}

export type Part = {
    id: number,
    text: string,
    title: string
    image: Image
}

export type Image = {
    id: number,
    name: string,
    alternativeText: string | null,
    caption: string | null,
    width: number,
    height: number
    formats: {
        large: ImageSize | null
        medium: ImageSize | null
        thumbnail: ImageSize | null,
        small: ImageSize | null
    },
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: string | null,
    provider: string,
    provider_metadata: string | null,
    createdAt: string,
    updatedAt: string,
}

export type ImageSize = {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path: string | null,
    width: number,
    height: number,
    size: number,
    url: string
}

export type ProductSection = {
    id: number,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    categories: Category[]
}

export type Category = {
    id: number,
    title: string,
    slug: string,
    introduction: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    description: string,
    info: string,
    image: Image,
}

export type Product = {
    id: number,
    title: string,
    slug: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    description: string,
    images: Image[],
    category: Category
}