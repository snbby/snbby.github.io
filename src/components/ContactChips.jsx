import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import ArticleIcon from '@mui/icons-material/Article';
import Chip from '@mui/material/Chip';
import { Link as RouterLink } from 'react-router-dom';

export default function ContactChips() {
  return (
    <Stack direction="row" spacing={1} sx={{justifyContent: "center"}}>
      <Chip icon={<GitHubIcon />} label="@snbby" component="a" href="https://github.com/snbby" variant="outlined" clickable/>
      <Chip icon={<LinkedInIcon />} label="in/malyshev-max" component="a" href="https://www.linkedin.com/in/malyshev-max/" variant="outlined" clickable/>
      <Chip icon={<LocationPinIcon />} label="Barcelona, Spain" variant="outlined" />
      <Chip icon={<EmailIcon />} label="max909907@gmail.com" variant="outlined" />
      <Chip icon={<ArticleIcon />} label="Blog" component={RouterLink} to="/blog" variant="outlined" clickable/>
    </Stack>
  );
}
