import { poppins } from '@/fonts';
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { Tooltip } from './Tooltip';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, github, tools, imageUrl, url, bgColor } = project;
  return (
    <article
      className={`bg-${bgColor} mb-4 rounded-xl shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl`}
    >
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-tl-xl rounded-tr-xl transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-[230px] w-[400px] rounded-xl">
          <Image
            width={400}
            height={230}
            className="h-full w-full rounded-tl-xl rounded-tr-xl object-cover transition-transform duration-700 group-hover:scale-125"
            src={imageUrl}
            alt={`${name}'s home page photo`}
          />
        </div>
        <div className="absolute inset-0 rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-transparent via-transparent to-white group-hover:from-white/60 group-hover:via-white/70 group-hover:to-white/60 dark:to-black dark:group-hover:from-black/70 dark:group-hover:via-black/60 dark:group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center rounded-tl-xl rounded-tr-xl px-6 transition-all duration-500 group-hover:translate-y-0">
          <p
            className={`mb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          >
            {description}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {tools.map((tool) => {
              return (
                <span
                  className="rounded-lg bg-skill-bg-color p-1 pl-2 pr-2 text-sm font-semibold shadow-box-shadow dark:bg-dark-skill-bg-color dark:shadow-xl"
                  key={tool}
                >
                  {tool}
                </span>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between p-2 pl-3 pr-3">
        <h1 className={`${poppins.className} text-lg font-semibold`}>
          {project.name}
        </h1>
        <div className="flex items-center gap-2">
          <Tooltip message={'Code'} styles={'top-full left-full'}>
            <Link
              href={github}
              target="_blank"
              className="text-social-color duration-300 hover:scale-110 hover:text-icon-color"
            >
              <FaGithub className="h-[28px] w-[28px]" />
            </Link>
          </Tooltip>
          <Tooltip message={'Demo'} styles={'top-full left-full'}>
            <Link
              href={url}
              target="_blank"
              className="text-social-color duration-300 hover:scale-110 hover:text-icon-color"
            >
              <TbWorld className="h-[28px] w-[28px]" />
            </Link>
          </Tooltip>
        </div>
      </div>
    </article>
  );
};
