import { IoCodeSlash, IoHomeOutline } from 'react-icons/io5';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { Nav } from './Nav';
import { FaGraduationCap } from 'react-icons/fa';

const links = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    icon: <IoHomeOutline className="h-[1.3rem] w-[1.3rem]" />,
  },
  {
    id: 2,
    name: 'Education',
    url: '/education',
    icon: <FaGraduationCap className="h-[1.3rem] w-[1.3rem]" />,
  },
  {
    id: 3,
    name: 'Projects',
    url: '/projects',
    icon: <IoCodeSlash className="h-[1.3rem] w-[1.3rem]" />,
  },
  {
    id: 4,
    name: 'Contact',
    url: '/contact',
    icon: <MdOutlinePhoneInTalk className="h-[1.3rem] w-[1.3rem]" />,
  },
];

export const NavBar = () => {
  return (
    <nav className="sticky top-1 z-20 flex w-full justify-around gap-3 rounded-xl border p-2 pl-4 pr-4 shadow-box-shadow dark:border-dark-primary-font-color/50 tablet:static tablet:w-[auto]">
      {links.map((link) => {
        return <Nav key={link.id} link={link} />;
      })}
    </nav>
  );
};
