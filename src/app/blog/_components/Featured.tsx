"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PostMeta } from "@/lib/data/posts";



export default function Featured({slug, title, date, cat, excerpt, author, duration, image}: PostMeta){

    const [imgError, setImgError] = useState<boolean>(false);

    return (
        <article className="featured reveal">
            <div className="feat-body">
                <span className="feat-flag">★ Featured</span>
                <h2 className="feat-title">{title}</h2>
                <p className="feat-ex">{excerpt}</p>
                <div className="feat-meta"><span
                    className="cat">{cat}</span><span>{duration}</span><span>{date}</span></div>
                <Link className="btn btn--copper" href={`/blog/${slug}`}>Read the post <span className="arr">→</span></Link>
            </div>
            <div className="feat-media">
                {
                    imgError || !image ? (
                        <div className="feat-img-placeholder"><span>{title}</span></div>
                    ) : (
                        <Image onError={() => setImgError(true)}
                               src={image} alt={title} width={800} height={550}/>
                    )

                }
            </div>
        </article>
    )
}