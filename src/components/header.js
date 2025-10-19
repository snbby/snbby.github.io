import pandaImg from '../images/panda.jpg'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header(){
    return (
        <Box sx={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            {/* <img src={pandaImg} alt='Maxim Malyshev' className='profileImage'/> */}
            <Box
                component='img'
                src={pandaImg}
                alt='Maxim Malyshev'
                sx={{ width: 150, height: 150, borderRadius: '50%', marginTop: '32px', marginBottom: '20px'}}
            />
            <Typography variant='h4' component='h1' gutterBottom>Maxim Malyshev</Typography>
            <Typography variant='h5' component='h2' gutterBottom>Software Engineer</Typography>
        </Box>
    );
}