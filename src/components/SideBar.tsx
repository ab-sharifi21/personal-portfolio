import { poppins } from '@/fonts';
import { ContactInfoCard, SocialMediaList } from './index';
import {
  MdLocationOn,
  MdOutlineDownload,
  MdOutlineEmail,
  MdOutlinePhoneInTalk,
} from 'react-icons/md';
import Image from 'next/image';

export const SideBar = () => {
  const contacts = [
    {
      id: 1,
      name: 'Phone',
      url: 'tel:0034632698684',
      value: '632698684',
      icon: (
        <MdOutlinePhoneInTalk className="mr-4 h-[1.5rem] w-[1.5rem] text-icon-color" />
      ),
    },
    {
      id: 2,
      name: 'Email',
      url: 'mailto:ab.sharifi19@gmail.com',
      value: 'ab.sharifi19@gmail.com',
      icon: (
        <MdOutlineEmail className="mr-4 h-[1.5rem] w-[1.5rem] text-icon-color" />
      ),
    },
    {
      id: 3,
      name: 'Location',
      url: '#',
      value: 'Galicia, Spain',
      icon: (
        <MdLocationOn className="mr-4 h-[1.5rem] w-[1.5rem] text-icon-color" />
      ),
    },
  ];

  return (
    <aside className="relative mt-[5rem] flex max-w-[280px] flex-col items-center rounded-2xl bg-white p-[1.5rem] pb-[3rem] pt-[7rem] shadow-box-shadow dark:bg-dark-skill-bg-color desktop:pt-[8rem]">
      <Image
        src="/me.jpg"
        alt="Abdullah photo"
        width={180}
        height={180}
        className="absolute top-[-5rem] max-h-[180px] rounded-sm rounded-bl-2xl rounded-tr-2xl object-cover shadow-box-shadow"
      />
      <h1
        className={`${poppins.className} mb-[0.7rem] text-[1.1rem] font-bold`}
      >
        Abdullah Sharifi
      </h1>
      <p className="text-sm font-semibold text-icon-color">
        Full-Stack Web Developer
      </p>
      <SocialMediaList />
      <div className="w-full flex-1 rounded-2xl bg-primary-bg-color p-[1rem] pb-[1.5rem] pt-[1.5rem] shadow-box-shadow dark:bg-dark-secondary-bg-color dark:shadow-2xl desktop:pb-8 desktop:pt-8">
        {contacts.map((contact) => {
          return <ContactInfoCard key={contact.id} contact={contact} />;
        })}

        <a
          download
          href="/abdullah-sharifi.pdf"
          className={`${poppins.className} mt-4 flex items-center justify-center gap-2 rounded-full bg-bt-bg-gradient p-3 pl-4 pr-4 font-semibold text-white/90 desktop:mt-8`}
        >
          <MdOutlineDownload className="h-5 w-5" />
          Download CV
        </a>
      </div>
    </aside>
  );
};
