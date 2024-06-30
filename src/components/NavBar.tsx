import { IoCodeSlash, IoHomeOutline } from 'react-icons/io5';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { Nav } from './Nav';

const links = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    icon: <IoHomeOutline className="h-[1.3rem] w-[1.3rem]" />,
  },
  //   {
  //     id: 2,
  //     name: 'Work & Skills',
  //     url: '/work',
  //     icon: <PiSuitcaseSimpleDuotone className='h-[1.3rem] w-[1.3rem]' />,
  //   },
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
    <nav className="flex justify-around gap-3 rounded-xl border p-2 pl-4 pr-4 shadow-box-shadow dark:border-dark-primary-font-color/50">
      {links.map((link) => {
        return <Nav key={link.id} link={link} />;
      })}
    </nav>
  );
};
