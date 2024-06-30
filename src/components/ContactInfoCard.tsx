import { ContactInfo } from '@/types';
import Link from 'next/link';

interface ContactInfoCardProps {
  contact: ContactInfo;
}

export const ContactInfoCard = ({ contact }: ContactInfoCardProps) => {
  const { name, value, url, icon } = contact;
  return (
    <Link
      href={url}
      className="flex items-center border-b pb-[1rem] dark:border-dark-primary-font-color/50 mb-6 duration-500 hover:scale-110 hover:bg-skill-bg-color hover:rounded-md hover:shadow-box-shadow dark:hover:bg-[#383838]"
    >
      {icon}
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-primary-font-color/50 dark:text-dark-primary-font-color/50">
          {name}:
        </p>
        <p className="text-sm">{value}</p>
      </div>
    </Link>
  );
};
