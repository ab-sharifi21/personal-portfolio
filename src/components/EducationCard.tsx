import { poppins } from '@/fonts';
import { EducationInfo } from '@/types';
import { useTranslations } from 'next-intl';

interface EducationCardProps {
  educationInfo: EducationInfo;
}

export const EducationCard = ({ educationInfo }: EducationCardProps) => {
  const { year, bgColor, name, schoolName, location } = educationInfo;
  const t = useTranslations('education');
  return (
    <div
      className={`bg-${bgColor} mb-4 w-full rounded-xl p-3 pl-4 pr-4 shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl tablet:w-[48%]`}
    >
      <p className="mb-1 text-sm text-primary-font-color/70 dark:text-white/60">
        {t(year)}
      </p>
      <p className={`${poppins.className} mb-1 font-semibold`}>{t(name)}</p>
      <p className="font-semibold text-icon-color duration-300">{schoolName}</p>
      <p className="mb-1 text-xs text-primary-font-color/70 dark:text-white/60">
        {t(location)}
      </p>
    </div>
  );
};
