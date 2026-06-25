"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav(){
    const navLink: {label: string; href: string; class?: string}[] = [
        {label:"Home",href:"/"},
        {label:"Work",href:"/work"},
        {label:"Blog",href:"/blog"},
        {label:"About",href:"/about"},
        {label:"Get in touch",href:"/#contact", class: "nav-cta"},
    ]
    const pathname = usePathname();

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () =>
            setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, {
            passive: true });
        return () =>
            window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`nav${scrolled ? " scrolled" : ""}`}>
            <Link className="brand" href="/">
                <img className="mark" src="/assets/logo-AntlerCode.svg" alt="AntlerCode logo"/>
                AntlerCode
            </Link>
            <button className="menu-btn" onClick={() => setIsOpen(o => !o)}>{isOpen ? "Close" : "Menu"}</button>
            <nav className={`navlinks${isOpen ? " open" : ""}`}>
                {
                    navLink.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={link.class ? link.class : pathname === link.href ? "active" : ""}
                        >
                        {link.label}
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}