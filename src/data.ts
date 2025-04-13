import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'P2P - Marketplace',
    description: 'p2p.description',
    github: 'https://github.com/ab-sharifi21/Player2Player-Marketplace',
    url: 'https://www.youtube.com/watch?v=J51EmE-M_NM&t=18s',
    tools: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'React', 'SQL'],
    imageUrl: '/p2p.png',
    bgColor: 'secondary-bg-color',
  },
  {
    id: 2,
    name: 'Watchly',
    description: 'watchly.description',
    github: 'https://github.com/ab-sharifi21/watchly',
    url: 'https://watchly-app.vercel.app/',
    tools: ['Next.js', 'TailwindCSS', 'TypeScript', 'HTML'],
    imageUrl: '/watchly.png',
    bgColor: 'secondary-bg-color',
  },
  {
    id: 3,
    name: 'Weather App',
    description: 'weather_app.description',
    github: 'https://github.com/ab-sharifi21/weather-app-react-spa',
    url: 'https://weather-app-react-spa.netlify.app',
    tools: ['HTML', 'Tailwind', 'TypeScript', 'React'],
    imageUrl: '/weather.png',
    bgColor: 'bg-color3',
  },
];

export const softSkills = [
  {
    id: 1,
    name: 'team_work',
  },
  {
    id: 2,
    name: 'quick_learning_aptitude',
  },
  {
    id: 3,
    name: 'time_management',
  },
  {
    name: 'adaptation',
    id: 6,
  },
  {
    id: 4,
    name: 'problem_solving',
  },
  {
    id: 5,
    name: 'attention_to_details',
  },
];

export const educations = [
  {
    id: 1,
    name: 'san_clemente.name',
    year: 'san_clemente.year',
    bgColor: 'secondary-bg-color',
    schoolName: 'IES San Clemente',
    location: 'san_clemente.location',
  },
  {
    id: 2,
    name: 'academia_postal.name',
    year: 'academia_postal.year',
    bgColor: 'bg-color3',
    schoolName: 'Academia Postal',
    location: 'academia_postal.location',
  },
  {
    id: 3,
    name: 'hack_a_boss.name',
    year: 'hack_a_boss.year',
    bgColor: 'secondary-bg-color',
    schoolName: 'Hack A Boss',
    location: 'hack_a_boss.location',
  },
];

export const experiences = [
  {
    id: 5,
    year: 'altia.year',
    post: 'altia.title',
    company: {
      name: 'Altia Consultores',
      url: 'https://www.altia.es/es/altia',
    },
    bgColor: 'secondary-bg-color',
    tasks: [
      {
        id: 1,
        description: 'altia.function_1',
      },
      {
        id: 2,
        description: 'altia.function_2',
      },
      {
        id: 3,
        description: 'altia.function_3',
      },
      {
        id: 4,
        description: 'altia.function_4',
      },
    ],
  },
  {
    id: 1,
    year: 'plexus.year',
    post: 'plexus.title',
    company: {
      name: 'Plexus Tech',
      url: 'https://www.plexus.es/',
    },
    bgColor: 'bg-color3',
    tasks: [
      {
        id: 1,
        description: 'plexus.function_1',
      },
      {
        id: 2,
        description: 'plexus.function_2',
      },
      {
        id: 3,
        description: 'plexus.function_3',
      },
    ],
  },
  {
    id: 2,
    year: 'freelance.year',
    post: 'freelance.title',
    company: {
      name: 'Freelance',
      url: '#',
    },
    bgColor: 'bg-color3',
    tasks: [
      {
        id: 1,
        description: 'freelance.function_1',
      },
      {
        id: 2,
        description: 'freelance.function_2',
      },
      {
        id: 3,
        description: 'freelance.function_3',
      },
    ],
  },
  {
    id: 3,
    year: 'igfae.year',
    post: 'igfae.title',
    company: {
      name: 'IGFAE',
      url: 'https://igfae.usc.es/igfae/es/la-experiencia-de-abdullah-en-el-igfae-tres-semanas-de-trabajo-para-mejorar-la-organizacion-interna-del-centro/',
    },
    bgColor: 'secondary-bg-color',
    tasks: [
      {
        id: 1,
        description: 'igfae.function_1',
      },
      {
        id: 2,
        description: 'igfae.function_2',
      },
      {
        id: 3,
        description: 'igfae.function_3',
      },
    ],
  },
  {
    id: 4,
    year: 'takapoo.year',
    post: 'takapoo.title',
    company: {
      name: 'Takapoo',
      url: '#',
    },
    bgColor: 'secondary-bg-color',
    tasks: [
      {
        id: 1,
        description: 'takapoo.function_1',
      },
      {
        id: 2,
        description: 'takapoo.function_2',
      },
      {
        id: 3,
        description: 'takapoo.function_3',
      },
    ],
  },
];
