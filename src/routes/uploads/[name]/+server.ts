export async function GET({ params }){
    const data = await fetch(`http://127.0.0.1:1337/uploads/${params.name}`)
    const file = await data.blob()
    if (file) {
        return new Response(file, {headers: {'Cache-Control': 'max-age=604800, stale-while-revalidate=86400'}})
    }


}