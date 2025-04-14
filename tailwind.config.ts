import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-secondary-bg-color',
    'bg-bg-color3',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '640px',
        tablet: '900px',
        laptop: '1024px',
        desktop: '1380px',
      },
      backgroundImage: {
        'bt-bg-gradient': 'linear-gradient(to right, #FF9C1A, #E80505)',
        'cards-bg':
          'radial-gradient(circle 160px at 50% 120%, #353535, #1f1f1f)',
      },
      colors: {
        'primary-font-color': 'black',
        'secondary-font-color': 'black/50',
        'primary-bg-color': '#F2F7FC',
        'secondary-bg-color': '#ffe3bf',
        'bg-color3': '#ffeed9',
        'skill-bg-color': '#E1E8EF',
        'social-color': '#1DA1F2',
        'icon-color': '#FF9C1B',
        // Dark mode colors
        'dark-primary-font-color': '#F0F0F0',
        'dark-secondary-font-color': '#A0A0A0',
        'dark-primary-bg-color': '#333333',
        'dark-secondary-bg-color': '#212121',
        'dark-skill-bg-color': '#2A2A2A',
      },
      boxShadow: {
        'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      rotate: {
        '360': '360deg',
        '20': '20deg',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
