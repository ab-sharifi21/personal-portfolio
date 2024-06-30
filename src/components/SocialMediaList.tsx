import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SocialMediaCard } from './index';

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
  return (
    <div className="mb-[2rem] mt-[2rem] flex gap-[1.2rem]">
      {socials.map((social) => {
        return <SocialMediaCard key={social.id} social={social} />;
      })}
    </div>
  );
};
