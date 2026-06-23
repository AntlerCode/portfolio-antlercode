import Link from "next/link";

export default function Work(){
    return (
        <section className="block alt" id="work">
            <div className="wrap">
                <div className="sec-head reveal"><span className="sec-num">02 —</span><h2
                    className="sec-title">Selected <span className="it">work</span></h2></div>
                <div className="work-list">
                    <Link className="work-item reveal" href="/work">
                        <span className="wi-num">001</span>
                        <span><span className="wi-title">Dino Project</span><span className="wi-desc">A Node-driven player that streams video and projects it as a real-time hologram — full-stack, from the server to the room.</span></span>
                        <span className="wi-tags"><span className="tag tag--ember">Full-stack</span><span className="tag">Node</span><span className="tag">Realtime</span></span>
                        <span className="wi-arrow">→</span>
                    </Link>
                    <Link className="work-item reveal" href="/work">
                        <span className="wi-num">002</span>
                        <span><span className="wi-title">Tasko Tracker</span><span className="wi-desc">Graduation project — a routine-building app for kids aged 9–12 and their parents, designed and built end to end.</span></span>
                        <span className="wi-tags"><span className="tag tag--ember">Product</span><span className="tag">Mobile</span><span className="tag">UX</span></span>
                        <span className="wi-arrow">→</span>
                    </Link>
                </div>
                <div className="teaser-foot reveal"><Link className="btn btn--ghost" href="/work">All projects <span
                    className="arr">→</span></Link></div>
            </div>
        </section>
    )
}