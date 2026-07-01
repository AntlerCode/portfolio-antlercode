"use client";

import PostCard from "./PostCard";
import { posts } from "@/lib/data/posts"
import { useState } from "react";


export default function PostList() {

    const [cat, setCat] = useState<string>("all");

    const filtered = cat === "all" ? posts : posts.filter(post => post.cat === cat);

    const categories = ["Process", "Build", "Design", "Learning"]

    return (
        <>
            <div className="filterbar reveal" data-filters>
                <span className="fl">Filter —</span>
                <button className={cat === "all" ? "active" : ""} data-f="all" onClick={()=> setCat("all")}>All</button>
                {
                    categories.map(c => (
                        <button
                            key={c}
                            data-f={c.toLowerCase()}
                            onClick={() => setCat(c)}
                            className={cat === c ? "active" : ""}
                        >
                            {c}
                        </button>
                    ))
                }
            </div>

            <div className="posts reveal">
                {
                    filtered.map((post) => (
                        <PostCard key={post.slug} {...post} />
                    ))
                }
            </div>
        </>
    )
}