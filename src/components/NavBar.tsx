import { IoCodeSlash, IoHomeOutline } from 'react-icons/io5';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { PiGraduationCapDuotone } from 'react-icons/pi';
import { Nav } from './Nav';

const links = [
  {
    id: 1,
    name: 'home',
    url: '/',
    icon: <IoHomeOutline className="h-[1.3rem] w-[1.3rem]" />,
  },
  {
    id: 2,
    name: 'education',
    url: '/education',
    icon: <PiGraduationCapDuotone className="h-[1.3rem] w-[1.3rem]" />,
  },
  {
    id: 3,
    name: 'projects',
    url: '/projects',
    icon: <IoCodeSlash className="h-[1.3rem] w-[1.3rem]" />,
  },
  {
    id: 4,
    name: 'contact',
    url: '/contact',
    icon: <MdOutlinePhoneInTalk className="h-[1.3rem] w-[1.3rem]" />,
  },
];

export const NavBar = () => {
  return (
    <nav className="sticky top-1 z-20 flex justify-around gap-3 rounded-xl border p-2 pl-4 pr-4 shadow-2xl dark:border-dark-primary-font-color/50 tablet:static tablet:w-[auto] tablet:shadow-box-shadow">
      {links.map((link) => {
        return <Nav key={link.id} link={link} />;
      })}
    </nav>
  );
};
