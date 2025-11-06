import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import Blog from './pages/Blog';
import Home from './pages/Home';


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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
