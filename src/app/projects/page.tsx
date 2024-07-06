import { poppins } from '@/fonts';
import { GrProjects } from 'react-icons/gr';
import { projects } from '@/data';
import { ProjectCard } from '@/components';

export default function Projects() {
  return (
    <div className="w-full flex-1 rounded-2xl bg-white/50 p-4 pl-8 pr-8 shadow-box-shadow dark:bg-dark-skill-bg-color">
      <div className="mb-2 flex items-center gap-2">
        <GrProjects className="h-6 w-6 text-icon-color" />
        <h2
          className={`${poppins.className} text-[1.3rem] font-bold capitalize`}
        >
          Projects<span className="text-2xl text-icon-color">.</span>
        </h2>
      </div>
      <p className="mb-8 text-sm text-secondary-font-color">
        Here are some of works:
      </p>

      <section className="flex flex-wrap justify-between gap-4">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </section>
    </div>
  );
}
