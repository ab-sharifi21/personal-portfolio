import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'P2P - Marketplace',
    description:
      'It is a platform for buying and selling second-hand video games, consoles, accessories, and PCs. Users can search for products by name, price, category, and location. By signing up, users gain full access to add and buy products.',
    github: 'https://github.com/ab-sharifi21/Player2Player-Marketplace',
    url: 'https://www.youtube.com/watch?v=J51EmE-M_NM&t=18s',
    tools: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'React', 'SQL'],
    imageUrl: '/p2p.png',
    bgColor: 'secondary-bg-color',
  },
  {
    id: 3,
    name: 'Weather App',
    description:
      'This responsive app provides hourly weather forecasts and five-day predictions. Users can access this information by entering their preferred city name or using their current location.',
    github: 'https://github.com/ab-sharifi21/weather-app-react-spa',
    url: 'https://weather-app-react-spa.netlify.app',
    tools: ['HTML', 'Tailwind', 'TypeScript', 'React'],
    imageUrl: '/weather.png',
    bgColor: 'bg-color3',
  },
  {
    id: 2,
    name: 'MovieMix',
    description:
      'It is a movie web app that utilizes (TMDb) API to provide comprehensive information about movies. Discover everything from plot summaries and cast details to release dates and ratings, all in one place.',
    github: 'https://github.com/ab-sharifi21/MovieMix',
    url: 'https://mixmovie.netlify.app/',
    tools: ['Next.js', 'HTML', 'CSS', 'Tailwind', 'TypeScript', 'React'],
    imageUrl: '/movie-app.png',
    bgColor: 'secondary-bg-color',
  },
  // {
  //   id: 4,
  //   name: 'To Do App',
  //   description:
  //     'This simple app, built with React, TypeScript, and TailwindCSS, allows you to add, edit, remove, and mark tasks as completed or uncompleted.',
  //   github: 'https://github.com/ab-sharifi21/To-Do-App-React',
  //   url: 'https://ab-todo-app-react.netlify.app/',
  //   tools: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React'],
  //   imageUrl: '/todo-app.png',
  //   bgColor: 'bg-color3',
  // },
];

export const softSkills = [
  {
    id: 1,
    name: 'Team Work',
  },
  {
    id: 2,
    name: 'Quick Learning Aptitude',
  },
  {
    id: 3,
    name: 'Time Management',
  },
  {
    id: 4,
    name: 'Problem Solving',
  },
  {
    id: 5,
    name: 'Attention to details',
  },
  {
    id: 6,
    name: 'Adaptation',
  },
];

export const educations = [
  {
    id: 1,
    name: 'Desarrollo de Aplicaciones Web (DAW)',
    year: '2024 - Present',
    bgColor: 'secondary-bg-color',
    schoolName: 'IES San Clemente',
    location: 'Santiago de Compostela, Galicia, Spain',
  },
  {
    id: 2,
    name: 'Level 3 Professional Certificate in Web Development (IFCD0210)',
    year: '2023 - 2024',
    bgColor: 'bg-color3',
    schoolName: 'Academia Postal',
    location: 'Santiago de Compostela, Galicia, Spain',
  },
  {
    id: 3,
    name: 'Full-Stack  Web Development Bootcamp',
    year: 2023,
    bgColor: 'secondary-bg-color',
    schoolName: 'Hack A Boss',
    location: 'A Coruña, Galicia, Spain',
  },
];

export const experiences = [
  {
    id: 1,
    year: 'plexus.year',
    post: 'plexus.title',
    company: {
      name: 'Plexus Tech',
      url: 'https://www.plexus.es/',
    },
    bgColor: 'secondary-bg-color',
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
    bgColor: 'bg-color3',
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
