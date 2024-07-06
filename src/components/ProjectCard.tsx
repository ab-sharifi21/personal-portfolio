import { poppins } from '@/fonts';
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, github, tools, imageUrl, url, bgColor } = project;
  return (
    <article
      className={`bg-${bgColor} mb-6 rounded-xl shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl`}
    >
      {/* <div className="group relative">
        <Image
          src={imageUrl}
          width={400}
          height={230}
          alt={`${name}'s home page photo`}
          className="h-[230px] w-[400px] rounded-tl-xl rounded-tr-xl"
        />
        <div className="absolute bottom-0 p-4 left-0 right-0 top-0 z-10 rounded-tl-xl rounded-tr-xl hidden dark:bg-black/60 bg-white/80 group-hover:block">
          hello
        </div>
      </div> */}

      <div className="group relative cursor-pointer rounded-tl-xl rounded-tr-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-[230px] w-[400px] rounded-xl">
          <Image
            width={400}
            height={230}
            className="h-full rounded-tl-xl rounded-tr-xl w-full object-cover transition-transform duration-700 group-hover:scale-125"
            src={imageUrl}
            alt={`${name}'s home page photo`}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent dark:to-black dark:group-hover:from-black/70 dark:group-hover:via-black/60 dark:group-hover:to-black/70 to-white group-hover:from-white/60 group-hover:via-white/70 group-hover:to-white/60 rounded-tl-xl rounded-tr-xl"></div>
        <div className="absolute inset-0 flex translate-y-[100%] items-center flex-col justify-center px-6 transition-all duration-500 group-hover:translate-y-0 rounded-tl-xl rounded-tr-xl">
          <p className={`mb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
           {description}
          </p>
          <ul className='flex flex-wrap items-center gap-2 justify-center'>
          {
            tools.map((tool) => {
                return <span className='bg-skill-bg-color p-1 pr-2 text-sm pl-2 rounded-lg dark:bg-dark-skill-bg-color font-semibold shadow-box-shadow dark:shadow-xl' key={tool}>{tool}</span>
            })
          }
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between p-2 pl-3 pr-3">
        <h1 className="font-semibold">{project.name}</h1>
        <div className="flex items-center gap-2">
          <Link
            href={github}
            target="_blank"
            className="text-social-color duration-300 hover:scale-110 hover:text-icon-color"
          >
            <FaGithub className="h-[28px] w-[28px]" />
          </Link>
          <Link
            href={url}
            target="_blank"
            className="text-social-color duration-300 hover:scale-110 hover:text-icon-color"
          >
            <TbWorld className="h-[28px] w-[28px]" />
          </Link>
        </div>
      </div>
    </article>
  );
};
