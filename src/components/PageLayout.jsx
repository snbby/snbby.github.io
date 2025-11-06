import Stack from '@mui/material/Stack';

const PageLayout = ({
  children,
  maxWidth = '960px',
}) => {

  return (
    <Stack direction='column' spacing={3} sx={{maxWidth, margin: '0 auto', px: { xs: 2, sm: 0 }}}>
      {children}
    </Stack>
  );
};

export default PageLayout;
