import Divider from '@mui/material/Divider';

import Header from '../components/Header';
import IconChips from '../components/ContactChips';
import ExperienceTimeline from '../components/ExperienceTimeline';
import PageLayout from '../components/PageLayout';
import AboutSection from '../components/AboutSection';
import TechnologyRadar from '../components/TechnologyRadar';

const Home = () => {
  return (
    <PageLayout>
      <Header />
      <IconChips />
      <Divider textAlign="center">About</Divider>
      <AboutSection />
      <Divider textAlign="center">Experience</Divider>
      <ExperienceTimeline />
      <Divider textAlign="center">Technology radar</Divider>
      <TechnologyRadar />
    </PageLayout>
  );
};

export default Home;
