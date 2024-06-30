import type { Metadata } from 'next';
import { raleway } from '@/fonts';
import { Providers } from './Providers';
import './globals.css';
import { Header, NavBar, SideBar } from '@/components';

export const metadata: Metadata = {
  title: 'Abdullah Sharifi - Portfolio',
  description: 'Abdullah Sharifi - Front-End Developer, Web Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} flex justify-center bg-primary-bg-color dark:bg-dark-primary-bg-color dark:text-dark-primary-font-color`}
      >
        <Providers>
          <div className="flex min-h-screen w-screen flex-col p-[1rem] pb-[4rem] pl-[5rem] pr-[5rem]">
            <Header />
            <main className="flex flex-1 gap-8 desktop:gap-12">
              <SideBar />
              <div className="flex flex-1 flex-col items-end gap-2">
                <NavBar />
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
