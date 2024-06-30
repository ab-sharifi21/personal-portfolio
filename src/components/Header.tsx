import { ThemeToggle } from './index';
import { poppins } from '@/fonts';

export const Header = () => {
  return (
    <header
      className={`flex items-center justify-between ${poppins.className} mb-[1.5rem] desktop:mb-[3rem]`}
    >
      <h1 className="text-[1.1rem] font-bold">
        Abdullah Sharifi
        <span className="text-2xl text-icon-color">.</span>
      </h1>
      <ThemeToggle />
    </header>
  );
};
