import Link from "next/link";

export default function Blog(){
    return (
        <section className="block" id="notes">
            <div className="wrap">
                <div className="sec-head reveal"><span className="sec-num">03 —</span><h2 className="sec-title">From
                    the <span className="it">blog</span></h2></div>
                <div className="recent">
                    <Link className="post-card reveal" href="/blog"><span className="cat">Process</span><h3>Why I
                        prototype in the browser before Figma</h3><span
                        className="meta">6 min read · May 2026</span><span className="read">Read →</span></Link>
                    <Link className="post-card reveal" href="/blog"><span className="cat">Hardware</span>
                        <h3>Beaming video into thin air: the Dino hologram build</h3><span className="meta">9 min read · Apr 2026</span><span
                            className="read">Read →</span></Link>
                    <Link className="post-card reveal" href="/blog"><span className="cat">Design</span>
                        <h3>Designing healthy habits for nine-year-olds</h3><span
                            className="meta">5 min read · Mar 2026</span><span className="read">Read →</span></Link>
                </div>
                <div className="teaser-foot reveal"><Link className="btn btn--ghost" href="/blog">Read the blog <span
                    className="arr">→</span></Link></div>
            </div>
        </section>
    )
}