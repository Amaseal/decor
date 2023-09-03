import * as fs from "fs/promises"
import sharp from 'sharp'

export async function GET({ params}) {
    const image = await fs.readFile(`src/lib/images/${params.image}`)
    const resized = await sharp(image).toFormat("webp").toBuffer()
    return new Response(resized)
    }
