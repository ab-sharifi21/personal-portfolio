import { poppins } from '@/fonts';
import { ExperienceInfo } from '@/types';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface ExperienceCardProps {
  experienceInfo: ExperienceInfo;
}

export const ExperienceCard = ({ experienceInfo }: ExperienceCardProps) => {
  const { year, post, company, tasks, bgColor } = experienceInfo;
  return (
    <div
      className={`bg-${bgColor} mb-4 w-full tablet:w-[48%] rounded-xl p-3 pl-4 pr-4 shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl`}
    >
      <p className="text-sm text-social-color dark:text-icon-color/90">
        {year}
      </p>
      <p className={`${poppins.className} font-semibold`}>{post}</p>
      <Link
        href={company.url}
        target={`${company.url.length > 1 ? '_blank' : '_self'}`}
        className="font-semibold text-social-color duration-300 hover:text-icon-color hover:underline dark:text-icon-color dark:hover:text-blue-600"
      >
        {company.name}
      </Link>
      <ul className="mt-2">
        {tasks.map((task) => {
          return (
            <li key={task.id} className="flex items-center gap-1 text-sm">
              <FaLongArrowAltRight className="text-social-color dark:text-icon-color/70" />
              <span>{task.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
