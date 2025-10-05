import { poppins } from '@/fonts';
import { ContactInfoCard, SocialMediaList } from './index';
import {
  MdLocationOn,
  MdOutlineDownload,
  MdOutlineEmail,
} from 'react-icons/md';
import { IoLogoGithub } from 'react-icons/io5';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const contacts = [
  {
    id: 2,
    name: 'email',
    url: 'mailto:ab.sharifi19@gmail.com',
    value: 'ab.sharifi19@gmail.com',
    icon: (
      <MdOutlineEmail className="mr-4 h-[1.5rem] w-[1.5rem] text-icon-color" />
    ),
  },
  {
    id: 1,
    name: 'recent_project',
    url: 'https://github.com/ab-sharifi21/watchly',
    value: 'Watchly',
    icon: (
      <IoLogoGithub className="mr-4 h-[1.5rem] w-[1.5rem] text-icon-color" />
    ),
  },
  {
    id: 3,
    name: 'location',
    url: '#',
    value: 'Galicia, Spain',
    icon: (
      <MdLocationOn className="mr-4 h-[1.5rem] w-[1.5rem] text-icon-color" />
    ),
  },
];

export const SideBar = () => {
  const t = useTranslations();
  return (
    <aside className="relative mt-[5rem] flex w-[85%] flex-col items-center rounded-2xl bg-white/50 p-[1.5rem] pb-[2rem] pt-[8rem] shadow-box-shadow dark:bg-dark-skill-bg-color mobile:w-[60%] tablet:sticky tablet:top-[7rem] tablet:max-w-[280px]">
      <Image
        src="/me.jpg"
        alt="Abdullah photo"
        width={180}
        height={180}
        priority
        sizes="(max-width: 768px) 180px, 180px"
        className="absolute top-[-5rem] max-h-[180px] rounded-sm rounded-bl-2xl rounded-tr-2xl object-cover shadow-box-shadow"
      />
      <h1
        className={`${poppins.className} mb-[0.7rem] text-[1.5rem] font-bold`}
      >
        Abdullah Sharifi
      </h1>
      <p className="font-semibold text-icon-color">{t('about_me.my_title')}</p>
      <SocialMediaList />
      <div className="hidden w-full flex-1 rounded-2xl bg-primary-bg-color p-[1rem] py-6 shadow-box-shadow dark:bg-dark-secondary-bg-color dark:shadow-2xl tablet:block">
        {contacts.map((contact) => {
          return <ContactInfoCard key={contact.id} contact={contact} />;
        })}
      </div>
      <a
        download
        href="/abdullah_sharifi_cv.pdf"
        className={`${poppins.className} flex items-center justify-center gap-2 rounded-full bg-bt-bg-gradient p-3 pl-4 pr-4 font-semibold text-white/90 duration-300 hover:scale-105 tablet:mt-8`}
      >
        <MdOutlineDownload className="h-5 w-5" />
        <span>{t('general.download_cv')}</span>
      </a>
    </aside>
  );
};
