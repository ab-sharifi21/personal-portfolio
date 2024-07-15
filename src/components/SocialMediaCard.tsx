import { Socials } from '@/types';
import Link from 'next/link';
import { Tooltip } from './Tooltip';

interface SocialMediaCardProps {
  social: Socials;
}

export const SocialMediaCard = ({ social }: SocialMediaCardProps) => {
  const { name, url, icon } = social;
  return (
    <Link
      href={url}
      target="_blank"
      className={` ${(name === 'Phone' || name === 'Email') && 'tablet:hidden'} group flex h-[45px] w-[45px] items-center justify-center rounded-lg bg-primary-bg-color text-social-color shadow-box-shadow dark:bg-dark-secondary-bg-color`}
    >
      {icon}
    </Link>
  );
};
