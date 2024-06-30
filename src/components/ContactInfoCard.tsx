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
      className="mb-6 flex items-center border-b pb-[1rem] duration-500 hover:scale-110 hover:rounded-md hover:bg-skill-bg-color hover:shadow-box-shadow dark:border-dark-primary-font-color/50 dark:hover:bg-[#383838]"
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
