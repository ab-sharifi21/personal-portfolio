import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({project}: ProjectCardProps) => {
    const {name, description, github, tools, imageUrl, url, bgColor} = project
    return ( 
        <article className={`bg-${bgColor} mb-6`} >
            <Image src={imageUrl} width={400} height={230} alt={`${name}'s home page photo`} className="h-[230px] w-[400px]" />
            <h1>{project.name}</h1>
        </article>
     );
}

