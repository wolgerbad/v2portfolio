import { FaGithub } from 'react-icons/fa';
import Card from './Card';
import Project from './Project';

export default function Projects() {
  const projects = [
    {
      name: 'The Aurora',
      overview:
        'A full-stack booking platform built with Next.js and TypeScript that enables users to browse, filter, and reserve luxury rooms. Features secure authentication, real-time availability management, and user dashboard.',
      stack: ['Nextjs', 'Typescript', 'TailwindCSS', 'MySQL'],
      github: 'https://github.com/wolgerbad/booking-app',
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/aurora_home.png',
      orderCart: 1,
      orderImage: 2,
      technicalDetails: [
        'Built a web application to let users search, explore, and save recipes from different cuisines around the world.',
        'Integrated a public recipe API to fetch detailed recipe data including ingredients, preparation steps, and images.',
        'Implemented local state management to handle search results, favorites, and user interactions.',
        'Added search functionality to filter recipes by keywords for faster and more accurate results.',
        'Designed a simple and readable layout for browsing and viewing recipe details.',
        'Styled the interface with TailwindCSS for clean user experience.',
        'Focused on creating a smooth user experience with quick data fetching and clean navigation.',
      ],
      projectColor: 'bg-amber-600',
      demoLink: 'https://theaurora.vercel.app/',
    },
    {
      name: 'Habitland',
      overview:
        'Full-stack habit tracking application featuring secure authentication, daily progress tracking and optimistic UI updates for a fast, distraction-free user experience. Built with a responsive, dark-mode–ready interface and a REST API backed by a relational database.',
      stack: ['Next.js', 'PostgreSQL', 'JWT', 'Context API', 'TailwindCSS'],
      github: 'https://github.com/wolgerbad/habitland',
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/habit_land_current.png',

      orderCart: 1,
      orderImage: 2,
      technicalDetails: [
        'Built a full-stack habit tracking application to allow users to create, monitor, and maintain daily habits efficiently with no distractions, with protected routes only accessible to registered users.',
        'Connected the app to a Supabase PostgreSQL database to store user data, habits, and habit logs in structured tables.',
        'Implemented authentication and authorization with JWT tokens, issued and verified through Next.js API routes using bcrypt, with cookies for session persistence.',
        'Developed JSON-returning REST API and Postgres databases for users, habits and habit logs.',
        'Managed optimistic UI updates locally to make habit state changes appear instantly before API confirmation.',
        'Added optimistic UI updates to improve response time and user experience by updating state before API confirmation.',
        'Used React Context API to share dark theme preference and optimistic state across components.',
        'Styled the interface with TailwindCSS and built responsive layouts for all viewports.',
        'Deployed on Vercel with environment-based configuration for secure database and token handling.',
      ],
      projectColor: 'bg-violet-600',
      demoLink: 'https://habitland-beta.vercel.app/',
    },
    {
      name: 'Next Blog',
      overview:
        'Full-stack blog platform featuring secure authentication, protected user interactions, and optimistic UI updates for a smooth user experience. Built with an admin dashboard for content management and a REST API backed by a relational database.',
      stack: ['Next.js', 'PostgreSQL', 'Next Auth', 'TailwindCSS'],
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/Gemini_Generated_Image_xmz5xqxmz5xqxmz5.png',

      github: 'https://github.com/wolgerbad/blog',
      orderCart: 2,
      orderImage: 1,
      technicalDetails: [
        'Built a full-stack blog platform to allow users to read, comment on, with protected actions only accessible to registered users.',
        'Developed admin dashboard to create, delete and update posts with protected routes only accessible to admins.',
        'Developed JSON-returning REST API and Postgres databases for users, posts and comments.',
        'Implemented authentication/authorization using Better Auth integrated with Prisma to connect Postgres DB.',
        'Added optimistic UI updates to make comment submissions and state changes appear instantly before server confirmation.',
        'Used Next.js server-side rendering to improve performance and search engine visibility.',
        'Deployed on Vercel with environment variables for secure database and auth configuration.',
      ],
      projectColor: 'bg-blue-600',
      demoLink: 'https://next-react-blogapp.vercel.app/',
    },
    {
      name: 'Moviecorn',
      overview:
        'Single-page movie and TV show discovery application featuring searchable content, user-curated favorites and client-side state management. Built with accessible routing, centralized global state and optimized data fetching with caching using React Query to deliver a fast, responsive experience.',
      stack: [
        'React',
        'React Router',
        'React Query',
        'Redux Toolkit',
        'TailwindCSS',
      ],
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/Gemini_Generated_Image_n1ciztn1ciztn1ci.png',
      github: 'https://github.com/wolgerbad/moviecorn',
      orderCart: 1,
      orderImage: 2,
      technicalDetails: [
        'Built a single-page application to let users search, explore, and save movies and TV shows for easier discovery and organization.',
        'Created a global state system to keep movie data, favorites, and user actions synchronized with Redux Toolkit.',
        'Handled API data fetching and caching with React Query to reduce redundant network requests and improve performance.',
        'Implemented client-side routing with React Router for fast navigation between search, d  etail, and favorites pages.',
        'Integrated an external movie API to fetch up-to-date movie and TV show data with detailed information.',
        'Styled the application with TailwindCSS to ensure a clean, responsive interface across all devices.',
      ],
      projectColor: 'bg-amber-900',
      demoLink: 'https://moviecorn-one.vercel.app/',
    },
    {
      name: 'Trello Like',
      overview:
        'Trello-inspired task management application featuring authenticated users, structured boards, columns, cards and optimistic UI updates for instant drag-and-drop interactions. Built with a relational PostgreSQL backend and a responsive interface designed for smooth, real-time task organization.',
      stack: ['Next.js', 'Better Auth', 'PostgreSQL'],
      github: 'https://github.com/wolgerbad/trello-like',
      image:
        'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image_9597vq9597vq9597.png',
      orderCart: 2,
      orderImage: 1,
      technicalDetails: [
        'Built a Trello-inspired task management application to let users organize tasks across boards, columns, and cards.',
        'Developed with Next.js using the App Router and server actions to handle all CRUD operations securely on the server side.',
        'Connected the app to a PostgreSQL database on Supabase, maintaining structured relations across board, column, and card tables.',
        'Implemented authentication and session management with Better Auth, integrated into the PostgreSQL database via Prisma ORM.',
        'Handled database responses and errors on the client side based on the results returned from the server.',
        'Added optimistic UI updates to make drag-and-drop interactions and card edits reflect instantly before server confirmation.',
        'Styled the interface with TailwindCSS for clean user experience.',
        'Deployed the application on Vercel with environment variables for secure database and API connections.',
      ],
      projectColor: 'bg-sky-600',
      demoLink: 'https://trello-like-kappa.vercel.app/',
    },
    {
      name: 'Recipedia',
      overview:
        'Recipe discovery application featuring searchable recipes, saved favorites and client-side state updates for a smooth browsing experience. Built with API-driven data fetching and a clean, readable interface focused on easy navigation and usability.',
      stack: ['Nextjs'],
      github: 'https://github.com/wolgerbad/recipe-app',
      image:
        'https://xjlakfmpndqhejusdjij.supabase.co/storage/v1/object/public/images/ChatGPT%20Image%20Jan%204,%202026,%2004_46_09%20PM.png',
      orderCart: 1,
      orderImage: 2,
      technicalDetails: [
        'Built a web application to let users search, explore, and save recipes from different cuisines around the world.',
        'Integrated a public recipe API to fetch detailed recipe data including ingredients, preparation steps, and images.',
        'Implemented local state management to handle search results, favorites, and user interactions.',
        'Added search functionality to filter recipes by keywords for faster and more accurate results.',
        'Designed a simple and readable layout for browsing and viewing recipe details.',
        'Styled the interface with TailwindCSS for clean user experience.',
        'Focused on creating a smooth user experience with quick data fetching and clean navigation.',
      ],
      projectColor: 'bg-amber-600',
      demoLink: 'https://recipe-app-ten-flax.vercel.app/',
    },

  ];
  return (
    <div id="projects" className="scroll-mt-20">
      <h1 className="text-2xl font-bold mb-4 underline uppercase">Projects</h1>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
