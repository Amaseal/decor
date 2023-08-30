import type { About } from '$lib/types'

export async function load() {
		let aboutData = await import(`../../about/about.md`)
		return {about: aboutData.metadata}
}