import MoviesDailyhomelarge from 'assets/launch_screentwo.png';
import MoviesDailyhomeplaceholder from 'assets/launch_screentwo.png';
import MoviesDailyhome from 'assets/launch_screentwo.png';

//MoviesDaily splash
import MoviesDailylarge from 'assets/launch_screen.png';
import MoviesDailyplaceholder from 'assets/launch_screen.png';
import MoviesDaily from 'assets/launch_screen.png';

//Bluetimo
import Bluetimo from 'assets/bluetimo.png';
import Bluetimolarge from 'assets/bluetimo.png';
import Bluetimoplaseholder from 'assets/bluetimo.png';

import Bluetimohome from 'assets/bluetimo_home.png';
import Bluetimohomelarge from 'assets/bluetimo_home.png';
import Bluetimohomeplaseholder from 'assets/bluetimo_home.png';

//RoboReward loading screen
import Robostack from 'assets/Robor.png';
import Robostacklarge from 'assets/Robor.png';
import Roboplaceholder from 'assets/Robor.png';

//Robo Home
import Robohome from 'assets/Robohome.png'
import Robohomelarge from 'assets/Robohome.png';
import Roboplaceholderhome from 'assets/Robohome.png'


import ChatimeLarge from 'assets/Chatime.png';
import ChatimePlaceholder from 'assets/Chatime.png';
import Chatime from 'assets/Chatime.png';

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Developer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Software Developer"
        description="Design portfolio of Ravindra Nakrani — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        // alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Robo Reward Program"
        description="Automated Customer Loyalty Reward Program Software Made Easy! Plain & Simple – Our customer loyalty software creates more loyal customers, rewards them, & keeps them coming back spending more."
        buttonText="View admin panel"
        buttonLink="https://v2.roborewards.net"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [Robostack, Robostacklarge],
              placeholder: Roboplaceholder,
            },
            {
              srcSet: [Robohome, Robohomelarge],
              placeholder: Roboplaceholderhome,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Bluetimo"
        description="Bluetimo provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. Once on the platform, our match-making algorithm identifies professionals who are closest to the users' requirements and available at the requested time and date."
        buttonText="View Details"
        buttonLink="https://github.com/ravindra3003/Bluetimo"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [Bluetimo, Bluetimolarge],
              placeholder: Bluetimoplaseholder,
            },
            {
              srcSet: [Bluetimohome, Bluetimohomelarge],
              placeholder: Bluetimohomeplaseholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        // title="Biomedical image collaboration"
        // description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        // buttonText="View project"
        // buttonLink="/projects/slice"
        // model={{
        //   type: 'phone',
        //   alt: 'App login screen',
        title="MoviesDaily"
        description="DailyMovies is the ultimate streaming guide for movies and TV shows. Track what you want to watch. Movie tracker and movie finder app where you can find movies, series, seasons, and episodes. Movie reviews, movie trailers, movie recommendations, and actors from the largest community database TMDB. We take you behind the scenes. Stay up to date with new movies, tv shows, and web series."
        buttonText="View project"
        buttonLink="https://play.google.com/store/apps/details?id=com.dailymovies"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            // {
            //   srcSet: [sliceTexture, sliceTextureLarge],
            //   placeholder: sliceTexturePlaceholder,
            // },
            {
              srcSet: [MoviesDaily, MoviesDailylarge],
              placeholder: MoviesDailyplaceholder,
            },
            {
              srcSet: [MoviesDailyhome, MoviesDailyhomelarge],
              placeholder: MoviesDailyhomeplaceholder,
            },
          ],
        }}
      />
     
      <ProjectSummary
         id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Chatime"
        description="About Personal Chat Room or Workspace to share resources and hangout with friends build with React.js, Material-UI, and Firebase."
        buttonText="View web app"
        buttonLink="https://github.com/ravindra3003/Chatime"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [Chatime, ChatimeLarge],
              placeholder: ChatimePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
