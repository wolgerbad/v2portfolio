import { FaGithub } from 'react-icons/fa';
import Card from './Card';
import Project from './Project';

export default function Projects() {
  const projects = [
    {
      name: 'Habitland',
      overview:
        'Full-stack habit tracking app with authentication, progress tracking, and optimistic UI.',
      stack: ['Next.js', 'PostgreSQL', 'JWT', 'Context API', 'TailwindCSS'],
      github: 'https://github.com/wolgerbad/habitland',
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/habitland-dark.png',

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
        'Full-stack blog platform with role-based authentication, PostgreSQL, and optimistic UI updates.',
      stack: ['Next.js', 'PostgreSQL', 'Next Auth', 'TailwindCSS'],
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/blogapp.png',

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
      name: 'moviecorn',
      overview:
        'Single-page movie discovery app with search, favorites, and smooth client-side navigation.',
      stack: [
        'React',
        'React Router',
        'React Query',
        'Redux Toolkit',
        'TailwindCSS',
      ],
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/currentcorn.png',
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
        'Kanban-style task management app with real-time updates and database persistence.',
      stack: ['Next.js', 'Better Auth', 'PostgreSQL'],
      github: 'https://github.com/wolgerbad/trello-like',
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/trellocur.png',
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
        'Recipe search and discovery app with detailed views and favorites management.',
      stack: ['Nextjs'],
      github: 'https://github.com/wolgerbad/recipe-app',
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/recipediacur%20(1).png',
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
    {
      name: 'The React Quiz',
      overview:
        'Interactive quiz app that tests users’ React.js knowledge with real-time scoring.',
      stack: ['React', 'Typescript', 'Context API'],
      github: 'https://github.com/wolgerbad/react-quiz-app',
      image:
        'https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/rquiz.png',
      technicalDetails: [
        'Built an interactive quiz application to let users test their React.js knowledge and view their score in real time.',
        'Used TypeScript to add static type checking and improve code reliability throughout the app.',
        'Managed global and local state with React Context API to handle quiz progress, selected answers, and final scoring.',
        'Fetched and rendered question data dynamically using useEffect and React hooks for controlled component updates.',
        'Implemented conditional rendering to display questions, results, and feedback based on user actions.',
        'Styled the interface with TailwindCSS for clean user experience.',
      ],
      projectColor: 'bg-sky-700',
      demoLink: 'https://react-quiz-app-rouge-tau.vercel.app/',
    },
  ];
  return (
    <div id="projects" className="scroll-mt-20">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}
