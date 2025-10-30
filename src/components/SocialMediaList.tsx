import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SocialMediaCard, Tooltip } from './index';
import { MdOutlineEmail, MdOutlinePhoneInTalk } from 'react-icons/md';

const socials = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/ab-sharifi21',
    icon: (
      <FaGithub className="h-[28px] w-[28px] duration-1000 group-hover:rotate-360 group-hover:scale-110" />
    ),
  },
  {
    id: 2,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/abdullahsharifi/',
    icon: (
      <FaLinkedinIn className="h-[28px] w-[28px] duration-1000 group-hover:rotate-360 group-hover:scale-110" />
    ),
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/ab.sharifi21/',
    icon: (
      <FaInstagram className="h-[28px] w-[28px] duration-1000 group-hover:rotate-360 group-hover:scale-110" />
    ),
  },
];

export const SocialMediaList = () => {
  const email = {
    id: 1,
    name: 'Email',
    url: 'mailto:ab.sharifi19@gmail.com',
    icon: (
      <MdOutlineEmail className="h-[28px] w-[28px] duration-1000 group-hover:rotate-360 group-hover:scale-110" />
    ),
  };

  return (
    <div className="mb-[2rem] mt-[2rem] flex flex-wrap items-center justify-center gap-[1.2rem]">
      <SocialMediaCard social={email} />
      {socials.map((social) => {
        return (
          <Tooltip
            key={social.id}
            message={social.name}
            styles={`top-full left-[90%]`}
          >
            <SocialMediaCard social={social} />
          </Tooltip>
        );
      })}
    </div>
  );
};
