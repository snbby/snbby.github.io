import './App.css';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import Header from './components/Header';
import IconChips from './components/ContactChips';
import ExperienceStepper from './components/ExperienceStepper';
import TechChips from './components/TechChips';
import ExperienceTimeline from './components/ExperienceTimeline';


const darkTheme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#fff', // white links
          textDecorationColor: '#fff',
        },
      },
      defaultProps: {
        target: '_blank', // open in new tab by default
        rel: 'noopener noreferrer', // security best practice
      },
    }
  },
  typography: {
    h4: {fontFamily: 'Cambria, serif'},
    h5: {fontFamily: 'Cambria, serif'},
  },
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Stack
          direction="column"
          spacing={3}
          sx={{
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
        <Header/>
        <IconChips/>
        <Divider textAlign="center">Experience</Divider>
        {/* <ExperienceStepper/> */}
        <ExperienceTimeline/>
        <Divider textAlign="center">Preferred Tech</Divider>
        <TechChips/>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
