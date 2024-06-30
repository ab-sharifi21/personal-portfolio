import { Socials } from '@/types';
import Link from 'next/link';

interface SocialMediaCardProps {
  social: Socials;
}

export const SocialMediaCard = ({ social }: SocialMediaCardProps) => {
  const { name, url, icon } = social;
  return (
    <Link
      href={url}
      target="_blank"
      title={name}
      className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-primary-bg-color text-social-color shadow-box-shadow dark:bg-dark-secondary-bg-color desktop:h-[45px] desktop:w-[45px]"
    >
      {icon}
    </Link>
  );
};
