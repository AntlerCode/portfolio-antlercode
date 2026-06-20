import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Blog />
        <Contact />
    </main>;
}