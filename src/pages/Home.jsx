import Divider from '@mui/material/Divider';

import Header from '../components/Header';
import IconChips from '../components/ContactChips';
import ExperienceTimeline from '../components/ExperienceTimeline';
import TechChips from '../components/TechChips';
import PageLayout from '../components/PageLayout';

const Home = () => (
  <PageLayout>
    <Header />
    <IconChips />
    <Divider textAlign="center">Experience</Divider>
    <ExperienceTimeline />
    <Divider textAlign="center">Preferred Tech</Divider>
    <TechChips />
  </PageLayout>
);

export default Home;
