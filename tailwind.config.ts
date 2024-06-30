import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '640px',
        tablet: '900px',
        laptop: '1024px',
        desktop: '1536px',
      },
      backgroundImage: {
        'bt-bg-gradient': 'linear-gradient(to right, #FF9C1A, #E80505)',
      },
      colors: {
        'primary-font-color': 'black',
        'secondary-font-color': 'black/50',
        'primary-bg-color': '#F2F7FC',
        'secondary-bg-color': '#FFEBD1',
        'skill-bg-color': '#E1E8EF',
        'social-color': '#1DA1F2',
        'icon-color': '#FF9C1B',
        // Dark mode colors
        'dark-primary-font-color': '#F0F0F0',
        'dark-secondary-font-color': '#A0A0A0',
        'dark-primary-bg-color': '#333333',
        'dark-secondary-bg-color': '#1E1E1E',
        'dark-skill-bg-color': '#2A2A2A',
      },
      boxShadow: {
        'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
