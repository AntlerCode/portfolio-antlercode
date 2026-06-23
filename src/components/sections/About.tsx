import Link from "next/link";

export default function About() {
    return (
        <section className="block" id="about">
            <div className="wrap">
                <div className="sec-head reveal"><span className="sec-num">01 —</span><h2
                    className="sec-title">About</h2></div>
                <div className="about-grid">
                    <p className="lead reveal">I build web apps from start to finish — the <em>front-end</em> you see on screen and the <em>back-end</em> running behind it. Being full-stack means one person handles both, so the whole thing fits together.</p>
                    <div className="about-side reveal">
                        <p>If something makes me curious, I want to build it myself — that's how I ended up putting together my own PC and keyboard. Software is the same urge, scaled up: I sweat the part you click on and the part keeping it running in equal measure.</p>
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
                        <span>TypeScript</span><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>Vue.js</span><span>Supabase</span><span>React Native</span><span>Figma</span>
                    </div>
                </div>
            </div>
        </section>
    )
}