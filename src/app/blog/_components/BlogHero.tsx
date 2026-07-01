

export default function BlogHero() {
    return (
        <header className="pagehead" id="main" tabIndex={-1}>
            <div className="wrap">
                <div className="eyebrow reveal">The blog · Field notes</div>
                <h1 className="reveal">Field <span className="it">notes</span></h1>
                <p className="lede reveal">Notes on building web apps, design, and whatever I'm figuring out at the
                    moment. Written while the ideas are still fresh.</p>
            </div>
            <span className="accentline"></span>
        </header>
    )
}