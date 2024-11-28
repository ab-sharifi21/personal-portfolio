import { ThemeToggle } from './index';
import { poppins } from '@/fonts';
import LocaleSwitcher from './LocaleSwitcher';

export const Header = () => {
  return (
    <header
      className={`flex items-center justify-between ${poppins.className} mb-[3rem]`}
    >
      <h1 className="text-[1.1rem] font-bold">
        Abdullah Sharifi
        <span className="text-2xl text-icon-color">.</span>
      </h1>
      <div className="flex gap-2">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
};
