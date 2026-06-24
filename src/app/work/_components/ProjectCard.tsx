"use client"

import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
    index: number;
    title: string,
    image: string,
    cat: string,
    body: string,
    fact: {
    role: string,
    year: string,
    stack: string,
    },
    tags: string[],
    link: string
}

export default function ProjectCard({title, image, cat, body, fact, tags, link, index}: ProjectCardProps ) {
    const [imgError, setImgError] = useState<boolean>(false);

    return (
        <article className="proj reveal">
            <div className="proj-media"><span className="idx">{String(index + 1).padStart(2,"0")}</span>
                {
                    imgError ? (
                        <div className="proj-img-placeholder"><span>{title}</span></div>
                    ) : (
                        <Image onError={() => setImgError(true)} src={image} alt={title} width={800} height={600}/>
                    )
                }
                            </div>
            <div className="proj-body">
                <div className="proj-no">project {String(index + 1).padStart(3,"0")} — {cat}</div>
                <h2 className="proj-title">{title}</h2>
                <p className="proj-desc">{body}</p>
                <div className="proj-fact">
                    <div><b>Role</b><span>{fact.role}</span></div>
                    <div><b>Year</b><span>{fact.year}</span></div>
                    <div><b>Stack</b><span>{fact.stack}</span></div>
                </div>
                <div className="proj-tags">
                    {
                        tags.map((tag: string) => (
                            <span key={tag} className="tag tag--ember">{tag}</span>
                         ))
                    }
                </div>
                <a className="proj-link" href={link}>View project <span>→</span></a>
            </div>
        </article>
    )
}


