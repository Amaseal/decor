import * as fs from "fs/promises"
import sharp from 'sharp'
import sizeOf from 'buffer-image-size';

export async function GET({ params }) {

    const image = await fs.readFile(`src/lib/images/${params.image}`)
    const dimensions = sizeOf(image)

    if (dimensions.width < dimensions.height) {
        const resized = await sharp(image).resize({ width: 600 }).toFormat("webp").toBuffer()
        return new Response(resized)
    } else {
        const resized = await sharp(image).resize({ height: 600 }).toFormat("webp").toBuffer()
        return new Response(resized)
    }
}