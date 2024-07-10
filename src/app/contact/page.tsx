import { poppins } from '@/fonts';
import { MdOutlinePermContactCalendar } from 'react-icons/md';

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col rounded-2xl bg-white/50 p-4 pl-8 pr-8 shadow-box-shadow dark:bg-dark-skill-bg-color">
      <div className="flex items-center gap-2">
        <MdOutlinePermContactCalendar className="h-6 w-6 text-icon-color" />
        <h2
          className={`${poppins.className} text-[1.3rem] font-bold capitalize`}
        >
          Contact<span className="text-2xl text-icon-color">.</span>
        </h2>
      </div>
      <p className="mb-8 text-sm text-primary-font-color/50 dark:text-dark-primary-font-color/50">
        Get in touch and let&apos;s work together!
      </p>
      <form className='bg-primary-bg-color flex-1 dark:bg-dark-secondary-bg-color mb-4 rounded-xl p-4'>

      </form>
    </div>
  );
}
