import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="foot">
            <div className="wrap">
                <div className="foot-top">
                    <div>
                        <div className="foot-brand">Antler<span className="it">Code</span></div>
                        <p className="foot-tag">Full-stack developer · UX/UI.</p>
                        <div className="statusdot" style={{marginTop: "20px"}}>Open for work</div>
                    </div>
                    <div className="foot-col">
                        <h5>Pages</h5>
                        <Link href="/">Home</Link><Link href="/work">Work</Link><Link href="/blog">Blog</Link><Link
                        href="/about">About</Link><Link href="/about#stack">Stack</Link>
                    </div>
                    <div className="foot-col">
                        <h5>Elsewhere</h5>
                        <Link href="#">GitHub</Link><Link href="#">LinkedIn</Link><Link href="#">Dribbble</Link><a
                        href="mailto:hello@antlercode.dev">Email</a>
                    </div>
                </div>
                <div className="foot-bot"><span>© 2026 AntlerCode</span><span>Full-stack development</span></div>
            </div>
        </footer>
    )
}