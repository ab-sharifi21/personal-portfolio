import { EducationCard, Tooltip } from '@/components';
import { poppins } from '@/fonts';
import Image from 'next/image';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaNode,
  FaReact,
} from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';
import { ImHappy } from 'react-icons/im';
import { IoLogoJavascript } from 'react-icons/io5';
import { PiGraduationCapBold } from 'react-icons/pi';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const softSkills = [
  {
    id: 1,
    name: 'Team Work',
  },
  {
    id: 2,
    name: 'Quick Learning Aptitude',
  },
  {
    id: 3,
    name: 'Time Management',
  },
  {
    id: 4,
    name: 'Problem Solving',
  },
  {
    id: 5,
    name: 'Attention to details',
  },
  {
    id: 6,
    name: 'Adaptation',
  },
];

const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: <FaHtml5 className="h-8 w-8" />,
  },
  {
    id: 2,
    name: 'CSS',
    icon: <FaCss3 className="h-8 w-8" />,
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: <IoLogoJavascript className="h-8 w-8" />,
  },
  {
    id: 10,
    name: 'Git',
    icon: <FaGitAlt className="h-8 w-8" />,
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: <BiLogoTypescript className="h-8 w-8" />,
  },
  {
    id: 6,
    name: 'React.js',
    icon: <FaReact className="h-8 w-8" />,
  },
  {
    id: 7,
    name: 'Node.js',
    icon: <FaNode className="h-8 w-8" />,
  },
  {
    id: 8,
    name: 'Next.js',
    icon: <RiNextjsFill className="h-8 w-8" />,
  },
  {
    id: 9,
    name: 'MySql',
    icon: <SiMysql className="h-8 w-8" />,
  },
  {
    id: 11,
    name: 'GitHub',
    icon: <FaGithub className="h-8 w-8" />,
  },
  {
    id: 12,
    name: 'VScode',
    icon: <VscVscode className="h-8 w-8" />,
  },
  {
    id: 13,
    name: 'GitLab',
    icon: <FaGitlab className="h-8 w-8" />,
  },
  {
    id: 5,
    name: 'TailwindCSS',
    icon: <RiTailwindCssFill className="h-8 w-8" />,
  },
];

const educations = [
  {
    id: 1,
    name: 'Level 3 Professional Certificate in Web Development (IFCD0210)',
    year: '2023 - 2024',
    bgColor: 'bg-color3',
    schoolName: 'Academia Postal',
    location: 'Santiago de Compostela, Galicia, Spain',
  },
  {
    id: 2,
    name: 'Full-Stack  Web Development Bootcamp',
    year: 2023,
    bgColor: 'secondary-bg-color',
    schoolName: 'Hack A Boss',
    location: 'A Coruña, Galicia, Spain',
  },
];

export default function Education() {
  return (
    <div className="w-full flex-1 rounded-2xl bg-white/50 p-4 pl-8 pr-8 shadow-box-shadow dark:bg-dark-skill-bg-color">
      <div className="mb-6 flex items-center gap-2">
        <PiGraduationCapBold className="h-6 w-6 text-icon-color" />
        <h2
          className={`${poppins.className} text-[1.3rem] font-bold capitalize`}
        >
          Education<span className="text-2xl text-icon-color">.</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-between">
        {educations.map((education) => {
          return <EducationCard key={education.id} educationInfo={education} />;
        })}
      </div>

      <div className="mt-10 flex justify-between gap-10">
        <div className="max-w-md">
          <div className="mb-6 flex items-center gap-2">
            <GrTechnology className="h-6 w-6 text-icon-color" />
            <h2
              className={`${poppins.className} text-[1.3rem] font-bold capitalize`}
            >
              Technologies & Skills
              <span className="text-2xl text-icon-color">.</span>
            </h2>
          </div>

          <ul className="flex flex-wrap gap-4">
            {skills.map((skill) => {
              return (
                <li
                  key={skill.id}
                  className="flex flex-col items-center gap-1 rounded-md bg-skill-bg-color p-3 shadow-box-shadow dark:bg-dark-secondary-bg-color dark:shadow-lg"
                >
                  {skill.icon}
                  <span className="text-sm">{skill.name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="max-w-sm">
          <div className="mb-6 flex items-center gap-2">
            <ImHappy className="h-6 w-6 text-icon-color" />
            <h2
              className={`${poppins.className} text-[1.3rem] font-bold capitalize`}
            >
              Soft Skills<span className="text-2xl text-icon-color">.</span>
            </h2>
          </div>

          <ul className="flex flex-wrap gap-4">
            {softSkills.map((softSkill) => {
              return (
                <li
                  key={softSkill.id}
                  className="rounded-md bg-skill-bg-color p-2 dark:bg-dark-secondary-bg-color"
                >
                  {softSkill.name}
                </li>
              );
            })}
          </ul>

          <Tooltip message={'Hello there👋'} styles={'top-4 right-0'}>
            <Image
              src="/monster-cute.gif"
              width={180}
              height={200}
              alt="hello"
              className="m-4 ml-auto"
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
