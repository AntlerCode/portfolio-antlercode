
import Link from "next/link";
import Image from "next/image";
import { PostMeta } from "@/lib/data/posts";

export default function PostCard({slug, title, date, cat, excerpt, duration, image}: PostMeta) {

    return (
        <Link className="post-card reveal" data-cat={cat} href={`/blog/${slug}`}>
            <div className="thumb img-slot">
                <span className="c cat">{cat}</span>
                {
                    image && <Image src={image} alt={title} fill style={{objectFit: "cover"}} />
                }
            </div>
            <div className="body">
                <h3>{title}</h3>
                <p className="ex">{excerpt}</p>
                <div className="meta">
                    <span>{duration}</span>
                    <span className="read">Read →</span>
                </div>
            </div>
        </Link>
    )
}