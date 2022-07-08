import gamestackTexture2Large from 'assets/launch_screentwo.png';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/launch_screentwo.png';
import gamestackTextureLarge from 'assets/launch_screen.png';
import gamestackTexturePlaceholder from 'assets/launch_screen.png';
import gamestackTexture from 'assets/launch_screen.png';
// import sliceTextureLarge from 'assets/Robostack.gif';
// import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
// import sliceTexture from 'assets/Robostack.gif';
import Robostack from 'assets/Robor.png';
import RobostackTextureLarge from 'assets/Robor.png';
import Robohome from 'assets/Robohome.png'
import Robohomelarge from 'assets/Robohome.png'
import sprTextureLarge from 'assets/Chatime.png';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/Chatime.png';
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
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

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
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Chatime"
        description="About Personal Chat Room or Workspace to share resources and hangout with friends build with React.js, Material-UI, and Firebase."
        buttonText="View project"
        buttonLink="https://github.com/ravindra3003/Chatime"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
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
        title="Robo Reward Program"
        description="Plain & Simple – Our customer loyalty software creates more loyal customers, rewards them, & keeps them coming back spending more.        "
        buttonText="View website"
        buttonLink="https://www.roborewards.com/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [Robostack, RobostackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [Robohome, Robohomelarge],
              placeholder: gamestackTexture2Placeholder,
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
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
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
