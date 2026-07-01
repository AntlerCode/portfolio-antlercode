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
    {
        slug: "building-my-own-mechanical-keyboard",
        title: "Building my own mechanical keyboard",
        date: "2025-10-12",
        cat: "Build",
        excerpt: "From switches to firmware: the side project that taught me more about hardware than any course.",
        author: "Tibo Kooreman",
        duration: "7",
    },
    {
        slug: "why-every-developer-should-sketch",
        title: "Why every developer should sketch",
        date: "2025-09-05",
        cat: "Process",
        excerpt: "A pencil is the fastest debugger I own. A short case for thinking on paper before touching a keyboard.",
        author: "Tibo Kooreman",
        duration: "4",
    },
    {
        slug: "notes-from-shipping-my-graduation-project",
        title: "Notes from shipping my graduation project",
        date: "2025-08-20",
        cat: "Process",
        excerpt: "Scope, sleep, and the things nobody tells you about a capstone. What I'd do differently.",
        author: "Tibo Kooreman",
        duration: "6",
    },
    {
        slug: "colour-theory-for-developers",
        title: "Colour theory for developers",
        date: "2025-07-14",
        cat: "Design",
        excerpt: "You don't need to be a designer to stop making ugly UIs. The three rules I actually use.",
        author: "Tibo Kooreman",
        duration: "5",
    },
    {
        slug: "node-streams-demystified",
        title: "Node streams demystified",
        date: "2025-06-01",
        cat: "Build",
        excerpt: "Streams confused me for months. Here's the mental model that finally made them click.",
        author: "Tibo Kooreman",
        duration: "8",
    },
    {
        slug: "the-case-for-boring-tech",
        title: "The case for boring tech",
        date: "2025-05-10",
        cat: "Process",
        excerpt: "Choosing the dull, proven option is often the bravest engineering decision you can make.",
        author: "Tibo Kooreman",
        duration: "4",
    },
    {
        slug: "accessibility-is-not-optional",
        title: "Accessibility is not optional",
        date: "2025-04-03",
        cat: "Design",
        excerpt: "The WCAG rabbit hole I fell into and why I now audit every project before shipping.",
        author: "Tibo Kooreman",
        duration: "6",
    },
    {
        slug: "what-i-learned-from-reading-other-peoples-code",
        title: "What I learned from reading other people's code",
        date: "2025-03-18",
        cat: "Learning",
        excerpt: "Open source is the best textbook nobody told me about. Three months of reading changed how I write.",
        author: "Tibo Kooreman",
        duration: "5",
    },
]

export function getPostBySlug(slug: string): PostMeta | undefined {
    return posts.find(post => post.slug === slug)
}
