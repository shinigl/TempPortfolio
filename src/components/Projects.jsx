import React from 'react';
import ShinHaven from '../assets/ShinRavenCover.png';
import CodiMaths from '../assets/CodiMathsCover.png';
import GeminiCover from '../assets/GeminiCover.png';
import Cards from './Cards';

const Projects = () => {
  const projectJson = [
    {
      title: 'ShinHaven Meditation Web App',
      desc: `'Developed a mental wellness platform integrating the Google Gemini API to provide AI-driven support for users.
             Created a mood tracker that suggests personalised relaxation activities and guided breathing exercises.
             Built an interactive AI chat feature to offer motivational responses and address mental health-related queries.'`,
      image: ShinHaven,
      live: "https://shinhaven.netlify.app/",
      github: "https://github.com/shinigl/MEDITATION-APP",
    },
    {
      title: 'CodiMaths',
      desc: `Led the front-end development of a global Space Science Olympiad platform, enabling students worldwide to
             participate.
             Implemented a dynamic registration form for seamless Olympiad sign-ups with real-time validation and error handling.
             Designed responsive UI with interactive animations.`,
      image: CodiMaths,
      live: "https://www.codimaths.com/",
    },
    {
      title: 'Google GEMINI Clone',
      desc: `Developed a fully working Google Gemini Clone with API integration.It is able to solve and answer all the possible human questions. The website is fully responsive and able to adapt according to all mobile devices`,
      image: GeminiCover,
      live: "https://gemini-aniket.netlify.app/",
      github: "https://github.com/shinigl/Gemini-A.I.-CLONE"
    }
  ];

  return (
    <section id="projects" className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 py-16 px-6">
      {/* White Gradient Shade */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50 z-0"></div>

      <div className="mb-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-semibold mb-8 text-white border-b-4 border-yellow-400 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectJson.map((items, index) => {
            return <Cards key={index} item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
