import Link from "next/link"

export default function Nav(){
    return (
        <header className="nav">
            <Link className="brand" href="/">
                <img className="mark" src="/assets/logo-AntlerCode.svg" alt="AntlerCode logo"/>
                AntlerCode
            </Link>
            <button className="menu-btn">Menu</button>
            <nav className="navlinks">
                <Link href="/" className="active">Home</Link>
                <Link href="/work">Work</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link className="nav-cta" href="#contact">Get in touch</Link>
            </nav>
        </header>
    )
}