"use client";
import {useEffect, useState, useRef} from "react";

export default function CustomCursor(){

    const [pos, setPos] = useState({x: 0, y: 0});
    const [active, setActive] = useState<boolean>(false);
    const animRef = useRef({tx: 0, ty: 0, cx: 0, cy: 0, rafId: 0});
    const spotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

        if (reduce || !finePointer) return;

        const onMouseMove = (e: MouseEvent) => {
            animRef.current.tx = e.clientX;
            animRef.current.ty = e.clientY;

            if (spotRef.current){
                spotRef.current.style.setProperty("--mx", e.clientX + "px");
                spotRef.current.style.setProperty("--my", e.clientY + "px");
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        document.documentElement.classList.add("custom-cursor");

        const hoverEls = document.querySelectorAll("a, button, .work-item, .post-card, .note-row")
        hoverEls.forEach(el =>{
           el.addEventListener("mouseenter", () => setActive(true));
           el.addEventListener("mouseleave", () => setActive(false));
        });

        const loop = () => {
            let { tx , ty } = animRef.current;
            let { cx, cy } = animRef.current;
            cx += (tx - cx) * 0.18;
            cy += (ty - cy) * 0.18;
            animRef.current.cx = cx;
            animRef.current.cy = cy;
            setPos({ x: cx, y: cy });
            animRef.current.rafId = requestAnimationFrame(loop);
        };

        requestAnimationFrame(loop);

        return () =>{
          window.removeEventListener("mousemove", onMouseMove);
          cancelAnimationFrame(animRef.current.rafId);
        };

    }, []);

    return (
        <>
            <div
                style={
                    {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        pointerEvents: "none",
                        zIndex: 999,
                        transform: `translate(${pos.x - 13}px, ${pos.y - 13}px)`
                    }
                }
                className={`cursor ${active ? "big" : ""}`} />

            <div ref={spotRef} className="spotlight" />
        </>

    )
}

