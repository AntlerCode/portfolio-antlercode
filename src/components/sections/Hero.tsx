

export default function Hero() {
    return (
        <header className="hero" id="top" tabIndex={-1}>
            <div className="antler-stage"><img className="antler" src="/assets/logo-AntlerCode.svg" alt="" aria-hidden="true"/></div>
            <div className="hero-inner" data-parallax>
                <div className="eyebrow ">Design &amp; Engineering — est. 2026</div>
                <h1 className="wordmark ">Antler<span className="roam">Code</span></h1>
                <p className="hero-tag ">
                    A design-engineering practice for interfaces, games, and the strange ideas in
                    between.
                </p>
                <div className="hero-actions ">
                    <a className="btn btn--copper" href="/work">View the work <span className="arr">→</span></a>
                    <a className="btn btn--ghost" href="/blog">Read the blog <span className="arr">→</span></a>
                </div>
                <div className="hero-meta ">
                    <div><b>Practice</b>Design × Code</div>
                    <div><b>Focus</b>Frontend · Creative · Hardware</div>
                    <div className="statusdot" style={{ alignSelf: "center" }}>Open for work</div>
                </div>
            </div>
            <div className="scrollcue"><span className="line"></span>Scroll</div>
        </header>
    )
}
