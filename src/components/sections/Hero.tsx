

export default function Hero() {
    return (
        <header className="hero" id="top" tabIndex={-1}>
            <div className="antler-stage"><img className="antler" src="/assets/logo-AntlerCode.svg" alt="" aria-hidden="true"/>
            </div>
            <div className="hero-inner" data-parallax>
                <div className="eyebrow reveal">Full-stack developer · Belgium</div>
                <h1 className="wordmark reveal">Antler<span className="roam">Code</span></h1>
                <p className="hero-tag reveal">I'm Tibo — a <b>full-stack developer</b> based in Belgium. I build web
                    apps from end to end, from the parts users never see to the screens they use every day.</p>
                <div className="hero-actions reveal">
                    <a className="btn btn--copper" href="/work">View the work <span className="arr">→</span></a>
                    <a className="btn btn--ghost" href="/blog">Read the blog <span className="arr">→</span></a>
                </div>
                <div className="hero-meta reveal">
                    <div><b>Role</b>Full-stack developer</div>
                    <div><b>Stack</b>TypeScript · React · Node</div>
                    <div className="statusdot" style={{ alignSelf: "center" }}>Open for work</div>
                </div>
            </div>
            <div className="scrollcue"><span className="line"></span>Scroll</div>
        </header>
    )
}
