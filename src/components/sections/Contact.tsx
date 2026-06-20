import Link from "next/link";

export default function Contact(){
    return (
        <section className="block alt cta" id="contact">
            <div className="wrap">
                <div className="eyebrow reveal" style={{justifyContent: "center"}}>Let's build something</div>
                <p className="big reveal">Got a project with <span className="it">teeth?</span></p>
                <div className="cta-actions reveal">
                    <a className="btn btn--ember" href="mailto:hello@antlercode.dev">hello@antlercode.dev</a>
                    <Link className="btn btn--ghost" href="/about">About me <span className="arr">→</span></Link>
                </div>
            </div>
        </section>
    )
}