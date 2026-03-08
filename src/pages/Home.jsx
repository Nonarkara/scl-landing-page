import HeroSection from '../components/HeroSection';
import AboutProgram from '../components/AboutProgram';
import ProgramJourney from '../components/ProgramJourney';
import Alumni from '../components/Alumni';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <>
      <div className="grid-bg" />
      <HeroSection />
      <AboutProgram />
      <ProgramJourney />
      <Alumni />
      <Gallery />
    </>
  );
};

export default Home;
