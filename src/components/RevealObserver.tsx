"use client";

import { useEffect } from "react";

export default function RevealObserver(): null {
    useEffect(() => {
        const checkReveals = () => {
            const vh = window.innerHeight;
            document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach(el => {
                const r = el.getBoundingClientRect();
                if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
            });
        };

        document.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
            el.style.transitionDelay = (i % 4 * 0.06) + "s";
        });

        window.addEventListener("scroll", checkReveals, { passive: true });
        window.addEventListener("resize", checkReveals);
        checkReveals();
        setTimeout(checkReveals, 60);

        return () => {
            window.removeEventListener("scroll", checkReveals);
            window.removeEventListener("resize", checkReveals);
        };
    }, []);

    return null;
}
