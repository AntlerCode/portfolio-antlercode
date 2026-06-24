"use client";

import Link from "next/link"
import {usePathname} from "next/navigation";

export default function Nav(){
    const navLink: {label: string; href: string; class?: string}[] = [
        {label:"Home",href:"/"},
        {label:"Work",href:"/work"},
        {label:"Blog",href:"/blog"},
        {label:"About",href:"/about"},
        {label:"Get in touch",href:"/#contact", class: "nav-cta"},
    ]
    const pathname = usePathname();



    return (
        <header className="nav">
            <Link className="brand" href="/">
                <img className="mark" src="/assets/logo-AntlerCode.svg" alt="AntlerCode logo"/>
                AntlerCode
            </Link>
            <button className="menu-btn">Menu</button>
            <nav className="navlinks">
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