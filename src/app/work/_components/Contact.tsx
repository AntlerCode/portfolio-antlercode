import Link from "next/link";

export default function Contact() {
    return (
        <section className="block alt cta" id="contact">
            <div className="wrap">
                <div className="eyebrow reveal" style={{justifyContent: "center" }}>Want one of these for yourself?</div>
                <p className="big reveal">Let's build something <span className="it">sharp.</span></p>
                <div className="cta-actions reveal">
                    <a className="btn btn--ember" href="mailto:hello@antlercode.dev">hello@antlercode.dev</a>
                    <Link className="btn btn--ghost" href="/blog">Read the blog <span className="arr">→</span></Link>
                </div>
            </div>
        </section>
    )
}