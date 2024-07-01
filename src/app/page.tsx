import { poppins } from '@/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex-1 rounded-2xl bg-white/50 p-6 shadow-box-shadow dark:bg-dark-skill-bg-color desktop:pl-12 desktop:pr-12">
      <div className='flex gap-4 justify-between'>
        <div>
          <h2
            className={`${poppins.className} mb-4 text-[1.3rem] font-bold capitalize`}
          >
            About me<span className="text-2xl text-icon-color">.</span>
          </h2>
            <p className="max-w-md desktop:max-w-xl bg-secondary-bg-color desktop:p-4 p-3 pt-4 pb-4 rounded-md shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl">
              I am a highly motivated <span className='text-icon-color'>full-stack web developer</span> with a range of skills spanning
              from front-end to back-end. I would like to join a dynamic team, one
              that not only allows me to utilize my existing skills but also offers
              an environment where I can grow both technically and professionally.
            </p>
        </div>
        <div className='hidden desktop:block'>
          <Image src='/arrow.svg' alt='right arrow' width={250} height={100} className='mt-24' />
        </div>
        <div>
          <div className='flex items-center gap-3'>
            <h2
              className={`${poppins.className} mb-4 text-[1.3rem] font-bold capitalize`}
            >
              Something interesting<span className="text-2xl text-icon-color">.</span>
            </h2>
            <Image src='/smile.svg' alt='smiley face' width={45} height={45} className='cursor-pointer duration-500 hover:scale-125 hover:rotate-20 max-w-[45px] max-h-[45px]' />
          </div>
            <p className="max-w-sm desktop:max-w-md bg-bg-color3 p-2 desktop:pr-4 desktop:pl-4 rounded-md shadow-box-shadow dark:bg-cards-bg dark:shadow-2xl">
              <span className='text-icon-color'>When I first saw a computer I was 12 years old</span>. And I have been curious about technology and video games ever since. So i Jumped into this amazing adventure, exploring and discovering everything about them all on my own.
            </p>
        </div>
      </div>
    </div>
  );
}
