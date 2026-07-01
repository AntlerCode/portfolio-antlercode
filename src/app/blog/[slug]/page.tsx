import { posts, getPostBySlug } from '@/lib/data/posts'

export function generateStaticParams() {
    return posts.map(post => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) return <p>Post not found.</p>

    return (
        <article id="main" tabIndex={-1}>

            <header className="art-head">
                <span className="cat">{post.cat}</span>
                <h1>{post.title}</h1>
                <div className="art-meta">
                    <span className="by">By {post.author}</span>
                    <span>{post.date}</span>
                    <span>{post.duration} min read</span>
                </div>
            </header>

            <div className="article">
                <div className="prose">
                    <p>Content coming soon — backend not yet connected.</p>
                </div>
            </div>

            <div className="art-foot">
                <div className="author">
                    <div>
                        <div className="nm">{post.author}</div>
                        <div className="rl">Full-Stack Developer</div>
                    </div>
                </div>
                <div className="share">
                    <a href="#" aria-label="Share">↗</a>
                    <a href="#" aria-label="Copy link">⧉</a>
                    <a href="#" aria-label="Bookmark">★</a>
                </div>
            </div>

        </article>
    )
}
