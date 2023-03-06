export type Tag = {
    id: number      
    name: string
    slug: string
}

export type Color = {
    id: number
    name: string
    hex: string
}

export type Product = {
    id:number       
    title: string
    slug: string
    description: string
    images: Image[]
    colors: Color[]
    Tag: Tag[]
}

export type Image= {
    id:number
    imgLarge:String
    imgSmall:String
    imgThumb:String
  }


export type Category = {
	id: number
	title: string
	slug: string
	description: string
	tag: Tag[]
	images: Image
	products: Product[]
}