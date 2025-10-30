'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === 'dark') {
    return (
      <div
        className="group flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-dark-skill-bg-color transition-all duration-300 hover:shadow-lg dark:bg-dark-skill-bg-color dark:hover:bg-icon-color/20"
        onClick={() => setTheme('light')}
      >
        <FiSun className="h-[20px] w-[20px] duration-500 group-hover:rotate-360 group-hover:scale-125" />
      </div>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <div
        className="group flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-skill-bg-color transition-all duration-300 hover:bg-icon-color/10 hover:shadow-lg"
        onClick={() => setTheme('dark')}
      >
        <FiMoon className="h-[20px] w-[20px] duration-500 group-hover:rotate-360 group-hover:scale-125" />
      </div>
    );
  }
}
