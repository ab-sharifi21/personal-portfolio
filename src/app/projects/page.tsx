import { poppins } from '@/fonts';
import { GrProjects } from 'react-icons/gr';
import { projects } from '@/data';
import { ProjectCard } from '@/components/ProjectCard';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');
  return (
    <div className="w-full flex-1 rounded-2xl bg-white/50 p-4 py-6 shadow-box-shadow dark:bg-dark-skill-bg-color tablet:px-8">
      <div className="mb-2 flex items-center gap-2">
        <GrProjects className="h-6 w-6 text-icon-color" />
        <h2
          className={`${poppins.className} text-[1.3rem] font-bold capitalize`}
        >
          {t('title')}
          <span className="text-2xl text-icon-color">.</span>
        </h2>
      </div>
      <p className="mb-6 text-sm dark:text-dark-primary-font-color/50">
        {t('projects_text')}
      </p>

      <section className="flex flex-wrap justify-around gap-2">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </section>
    </div>
  );
}
