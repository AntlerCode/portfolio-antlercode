import BlogHero from "./_components/BlogHero";
import Featured from "./_components/Featured";
import { posts } from "@/lib/data/posts";


export default function BlogPage() {
    return (
        <>
            <BlogHero />
            <main className="wrap"
                  style={{
                      paddingTop: "clamp(48px,7vw,80px)",
                      paddingBottom: "clamp(60px,9vw,100px)"
                }}
            >
                <Featured {...posts[0]}  />
            </main>

        </>
    )
}
