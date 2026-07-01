"use client";

export default function Newsletter() {
    return (
        <section className="news" id="subscribe">
            <div className="news-box reveal">
                <h2>Notes from the <span className="it">trail.</span></h2>
                <p>An occasional letter when I publish something new. No spam, no funnels — just the work.</p>
                <form className="news-form" onSubmit={e => e.preventDefault()}>
                    <input type="email" placeholder="you@email.com" aria-label="Email address"/>
                    <button className="btn btn--ember" type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    )
}