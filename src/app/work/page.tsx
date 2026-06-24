import WorkHero from "./_components/WorkHero";
import ProjectCard from "./_components/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Work(){
    return (
        <>
            <WorkHero />
            <main className="wrap">
            {
                projects.map((project, index) =>(
                <ProjectCard key={project.projNo} {...project} index={index}/>
                ))
            }
            </main>
        </>
    )
}