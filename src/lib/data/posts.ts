export type PostMeta = {
    slug: string
    title: string
    date: string
    cat: string
    excerpt: string
    author: string
    duration: string
    image?: string
}

export const posts: PostMeta[] = [
    {
        slug: "why-i-prototype-in-the-browser",
        title: "Why I prototype in the browser before Figma",
        date: "2026-05-14",
        cat: "Process",
        excerpt: "The fastest way to know whether an interaction works is to make it move — not to describe it, not to draw arrows between frames.",
        author: "Tibo Kooreman",
        duration: "6",
    },
    {
        slug: "beaming-video-into-thin-air",
        title: "Beaming video into thin air: the Dino hologram build",
        date: "2026-04-20",
        cat: "Build",
        excerpt: "Node, glass, and a lot of careful timing to make pixels float in a dark room.",
        author: "Tibo Kooreman",
        duration: "9",
    },
    {
        slug: "designing-healthy-habits-for-nine-year-olds",
        title: "Designing healthy habits for nine-year-olds",
        date: "2026-03-08",
        cat: "Design",
        excerpt: "What I learned researching daily routines with kids and their parents for my graduation project.",
        author: "Tibo Kooreman",
        duration: "5",
    },
    {
        slug: "the-day-typescript-finally-clicked",
        title: "The day TypeScript finally clicked",
        date: "2026-02-14",
        cat: "Learning",
        excerpt: "Why I taught myself TS and stopped writing plain JavaScript for good.",
        author: "Tibo Kooreman",
        duration: "6",
    },
    {
        slug: "a-design-system-that-fits-in-your-head",
        title: "A design system that fits in your head",
        date: "2026-01-30",
        cat: "Design",
        excerpt: "Fewer tokens, sharper defaults — building a system you can actually remember.",
        author: "Tibo Kooreman",
        duration: "8",
    },
    {
        slug: "leaving-communications-for-code",
        title: "Leaving communications for code",
        date: "2025-11-03",
        cat: "Learning",
        excerpt: "Why I walked away from a comms degree to learn programming from zero.",
        author: "Tibo Kooreman",
        duration: "5",
    },
]

export function getPostBySlug(slug: string): PostMeta | undefined {
    return posts.find(post => post.slug === slug)
}
