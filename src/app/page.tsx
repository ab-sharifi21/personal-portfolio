import Image from 'next/image';
import { poppins } from '@/fonts';
import { useTranslations } from 'next-intl';
import { PiGraduationCapDuotone } from 'react-icons/pi';
import { ExperienceList } from '@/components';

export default function Home() {
  const t = useTranslations();
  return (
    <div className="desktop:xy-12 w-full flex-1 rounded-2xl bg-white/50 p-6 shadow-box-shadow dark:bg-dark-skill-bg-color">
      <div>
        <div className="flex gap-4">
          <h2
            className={`${poppins.className} mb-6 text-[1.3rem] font-bold capitalize`}
          >
            {t('about_me.title')}
            <span className="text-2xl text-icon-color">.</span>{' '}
          </h2>
          <Image
            src="/smile.svg"
            alt="smiley face"
            width={45}
            height={45}
            className="max-h-[45px] max-w-[45px] cursor-pointer duration-500 hover:rotate-20 hover:scale-125"
          />
        </div>
        <p className="rounded-xl bg-bg-color3 p-2 pb-3 pt-3 shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl desktop:p-4">
          {t('about_me.description_1')}{' '}
          <span className="text-social-color dark:text-icon-color">
            {t('about_me.my_title')}
          </span>{' '}
          {t('about_me.description_2')}
        </p>
      </div>

      {/* Experience section */}

      <div className="mt-12 flex flex-col">
        <div className="mb-6 flex items-center gap-2">
          <PiGraduationCapDuotone className="h-6 w-6 text-icon-color" />
          <h2
            className={`${poppins.className} text-[1.3rem] font-bold capitalize`}
          >
            {t('experiences.title')}
            <span className="text-2xl text-icon-color">.</span>
          </h2>
        </div>

        <ExperienceList />
      </div>
    </div>
  );
}
