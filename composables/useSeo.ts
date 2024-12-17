import { useHead } from '#imports'

export function useSeo(title: string, description: string) {
    useHead({
        title,
        meta: [
            { name: 'description', content: description },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
        ],
    })
}