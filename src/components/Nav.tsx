'use client';

import { Socials } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavProps {
  link: Socials;
}

export const Nav = ({ link }: NavProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={link.url}
      className={`${pathname === link.url && 'bg-bt-bg-gradient'} flex flex-col items-center justify-center rounded-xl bg-skill-bg-color p-2 text-sm transition-all duration-500 hover:bg-bt-bg-gradient dark:bg-dark-skill-bg-color`}
    >
      {link.icon}
      <p className="font-semibold">{link.name}</p>
    </Link>
  );
};
