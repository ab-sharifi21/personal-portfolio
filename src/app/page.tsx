import { ExperienceCard } from '@/components';
import { poppins } from '@/fonts';

import Image from 'next/image';
import { PiGraduationCapDuotone } from 'react-icons/pi';
import { experiences } from '@/data';

export default function Home() {
  return (
    <div className="desktop:xy-12 w-full flex-1 rounded-2xl bg-white/50 p-6 shadow-box-shadow dark:bg-dark-skill-bg-color">
      <div className="flex flex-col justify-between gap-6 tablet:flex-row tablet:gap-4">
        <div>
          <h2
            className={`${poppins.className} mb-6 text-[1.3rem] font-bold capitalize`}
          >
            About me<span className="text-2xl text-icon-color">.</span>
          </h2>
          <p className="max-w-md rounded-xl bg-bg-color3 p-2 pb-3 pt-3 shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl desktop:max-w-xl desktop:p-4">
            I am a highly motivated{' '}
            <span className="text-social-color dark:text-icon-color">
              Full-Stack Web Developer
            </span>{' '}
            with a range of skills spanning from front-end to back-end. I would
            like to join a dynamic team, one that not only allows me to utilize
            my existing skills but also offers an environment where I can grow
            both technically and professionally.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h2
              className={`${poppins.className} mb-6 text-[1.3rem] font-bold capitalize`}
            >
              Something interesting
              <span className="text-2xl text-icon-color">.</span>
            </h2>
            <Image
              src="/smile.svg"
              alt="smiley face"
              width={45}
              height={45}
              className="max-h-[45px] max-w-[45px] cursor-pointer duration-500 hover:rotate-20 hover:scale-125"
            />
          </div>
          <p className="max-w-sm rounded-xl bg-secondary-bg-color p-2 shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl desktop:max-w-md desktop:pl-4 desktop:pr-4">
            <span className="text-social-color dark:text-icon-color">
              When I first saw a computer I was 12 years old
            </span>
            . And I have been curious about technology and video games ever
            since. So I jumped into this amazing adventure, exploring and
            discovering everything about them all on my own.
          </p>
        </div>
      </div>

      {/* Experience section */}

      <div className="mt-12 flex flex-col">
        <div className="mb-6 flex items-center gap-2">
          <PiGraduationCapDuotone className="h-6 w-6 text-icon-color" />
          <h2
            className={`${poppins.className} text-[1.3rem] font-bold capitalize`}
          >
            Experience<span className="text-2xl text-icon-color">.</span>
          </h2>
        </div>

        <div className="flex flex-col flex-wrap justify-between tablet:flex-row">
          {experiences.map((experience) => {
            return (
              <ExperienceCard key={experience.id} experienceInfo={experience} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
