import { EducationCard, ExperienceCard } from '@/components';
import { poppins } from '@/fonts';
import { PiGraduationCapBold } from 'react-icons/pi';

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
    </div>
  );
}
