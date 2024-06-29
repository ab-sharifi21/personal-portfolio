import { ThemeToggle } from './index';
import { poppins } from "@/fonts";

export const Header = () => {
  return (
    <header className={`flex items-center justify-between ${poppins.className} mb-[3.5rem]`}>
      <h1 className="text-[1.1rem] font-bold">
        Abdullah Sharifi
        <span className='text-icon-color text-2xl'>.</span>
      </h1>
      <ThemeToggle />
    </header>
  );
};
