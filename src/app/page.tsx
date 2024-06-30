import { poppins } from '@/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex-1 rounded-2xl bg-white/50 p-4 pl-8 pr-8 desktop:pl-12 desktop:pr-12 shadow-box-shadow dark:bg-dark-skill-bg-color">
      <h2 className={`${poppins.className} text-[1.3rem] font-bold capitalize mb-4`}>
        About me<span className="text-2xl text-icon-color">.</span>
      </h2>
      <div className='flex justify-between'>
        <p className='max-w-xl'>I am a highly motivated web developer with a range of skills spanning from front-end to back-end. I would like to join a dynamic team, one that not only allows me to utilize my existing skills but also offers an environment where I can grow both technically and professionally.</p>
        <Image src='/working.svg' width={280} height={200} alt='Developer svg' className='h-[180px] w-[280px] ml-8 mt-[-2rem] ' />
      </div>
    </div>
  );
}
