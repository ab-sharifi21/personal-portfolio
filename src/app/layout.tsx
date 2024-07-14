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
        className={`${raleway.className} flex justify-center bg-primary-bg-color dark:bg-dark-primary-bg-color dark:text-dark-primary-font-color desktop:flex desktop:items-center`}
      >
        <Providers>
          <div className="flex min-h-screen w-screen flex-col p-[1rem] pb-[4rem] tablet:px-[5rem] desktop:max-w-[1414px]">
            <Header />
            <main className="flex flex-1 flex-col items-center gap-8 tablet:flex-row tablet:items-start desktop:gap-12">
              <SideBar />
              <div className="flex flex-1 flex-col items-center gap-2 tablet:items-end">
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
