import fs from 'fs'        // Node built-in: read/list files on disk
import path from 'path'    // Node built-in: safely join folder/file paths
import matter from 'gray-matter' // parses frontmatter (---) out of .mdx files

// shape of data returned for the listing page (no full content needed)
export type PostMeta = {
    slug: string
    title: string
    date: string
    cat: string
    excerpt: string
    author: string
    duration: string
}

// extends PostMeta — adds full markdown body for the detail page
export type Post = PostMeta & {
    content: string
}

// absolute path to content/posts/ — process.cwd() = project root
const postsDir = path.join(process.cwd(), 'content', 'posts')

// reads every .mdx file, returns array of metadata + slug (no content)
export function getAllPosts(): PostMeta[] {
    const files = fs.readdirSync(postsDir) // ['why-i-prototype.mdx', ...]

    return files.map(file => {
        const raw = fs.readFileSync(path.join(postsDir, file), 'utf8') // file as string
        const { data } = matter(raw)                                    // data = frontmatter object
        const slug = file.replace('.mdx', '')                           // filename → slug
        return { slug, ...data } as PostMeta
    })
}

// reads ONE .mdx file by slug, returns metadata + full markdown content
export function getPostBySlug(slug: string): Post {
    const raw = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), 'utf8')
    const { data, content } = matter(raw) // content = everything below the --- block
    return { slug, ...data, content } as Post
}
