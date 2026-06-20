import Link from "next/link";

export default function About() {
    return (
        <section className="block" id="about">
            <div className="wrap">
                <div className="sec-head reveal"><span className="sec-num">01 —</span><h2
                    className="sec-title">About</h2></div>
                <div className="about-grid">
                    <p className="lead reveal">I'm a designer who codes and an engineer who sketches. AntlerCode is
                        where the two meet — I build <em>interfaces with instinct</em>, prototype fast, and care about
                        the details most people only feel.</p>
                    <div className="about-side reveal">
                        <p>The stag is my spirit animal: sure-footed, watchful, and built to navigate rough terrain.
                            That's how I approach a build — survey the ground, find the cleanest line, then move with
                            intent.</p>
                        <p style={{marginTop: "22px"}}><Link className="btn btn--ghost" href="/about">More about me <span
                            className="arr">→</span></Link></p>
                    </div>
                </div>
                <div className="home-stack reveal">
                    <div className="hs-head">
                        <span className="hs-label">What I work with</span>
                        <Link className="hs-link" href="/about#stack">See the full stack <span className="arr">→</span></Link>
                    </div>
                    <div className="hs-chips">
                        <span>TypeScript</span><span>React</span><span>Next.js</span><span>Node.js</span><span>Three.js</span><span>Tailwind</span><span>Canvas / WebGL</span><span>Figma</span>
                    </div>
                </div>
            </div>
        </section>
    )
}