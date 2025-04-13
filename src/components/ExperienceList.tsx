import { experiences } from '@/data';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:grid-rows-3">
      {experiences.map((experience, index) => {
        return (
          <ExperienceCard
            key={experience.id}
            classNames={
              index === 0 ? 'tablet:col-span-2 tablet:row-span-1' : ''
            }
            experienceInfo={experience}
          />
        );
      })}
    </div>
  );
};
