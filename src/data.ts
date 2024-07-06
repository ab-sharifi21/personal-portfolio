import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'P2P - Marketplace',
    description:
      'P2P is a platform for buying and selling second-hand video games, consoles, accessories, and PCs. Users can search for products by category, price, name, and location. By signing up, users gain full access to add and purchase products.',
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
    tools: [
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind',
      'TypeScript',
      'React',
    ],
    imageUrl: '/movie-app.png',
    bgColor: 'secondary-bg-color',
  },
  {
    id: 4,
    name: 'To Do App',
    description:
      'This simple app, built with React, TypeScript, and TailwindCSS, allows you to add, edit, remove, and mark tasks as completed or uncompleted.',
    github: 'https://github.com/ab-sharifi21/To-Do-App-React',
    url: 'https://ab-todo-app-react.netlify.app/',
    tools: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React'],
    imageUrl: '/todo-app.png',
    bgColor: 'bg-color3',
  },
];
