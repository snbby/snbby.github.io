import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import CloudLinuxLogo from '../images/cloudlinux_logo.jpeg';
import InstoriesLogo from '../images/instories_logo.jpeg';
import PaltaLogo from '../images/palta_logo.jpeg';
import LamodaLogo from '../images/lamoda_logo.jpeg';
import YandexLogo from '../images/yandex_logo.jpeg';


export const experienceSteps = [
    {
        company: 'CloudLinux',
        company_linkedin_link: 'https://www.linkedin.com/company/cloudlinux/',
        position: 'Senior Fullstack Developer',
        dates: { 'from': '2025-10'},
        logo: CloudLinuxLogo,
        type: 'Remote. Full-time',
        company_description: `CloudLinux develops software that makes Linux servers more secure, stable, and efficient. 
        The company also created and supports AlmaLinux, a free open-source operating system trusted by businesses worldwide as a stable alternative to CentOS and RHEL.`,
        position_description: `I joined the internal team to support patch release cycle`,
    },
    {
        company: 'Instories',
        company_linkedin_link: 'https://www.linkedin.com/company/instories/',
        position: 'Web Tech Lead',
        dates: { 'from': '2023-07' },
        logo: InstoriesLogo,
        type: 'Remote. Full-time',
        company_description: `Instories is a video creation platform with ~$1M monthly revenue in 2024 according to SensorTower.`,
        position_description: `I joined to launch a new web direction and scale engineering operations.`,
    },
    {
        company: 'Palta',
        position: 'Senior Software Engineer',
        company_linkedin_link: 'https://www.linkedin.com/company/paltafamily/',
        dates: { 'from': '2021-09'},
        logo: PaltaLogo,
        type: 'Hybrid. Limassol, Cyprus',
        company_description: `Palta is a venture studio behind apps like Flo and Simple, 
        focused on health and wellness technology.`,
        position_description: `I joined their new startup (later branded as Lovi) at the idea stage, 
        as one of the first 10 employees.`,
    },
    {
        company: 'Lamoda',
        company_linkedin_link: 'https://www.linkedin.com/company/lamodagroup/',
        position: 'Python Developer -> Backend Tech Lead',
        dates: { 'from': '2016-12'},
        logo: LamodaLogo,
        type: 'Hybrid. Moscow, Russia',
        company_description: `Lamoda is a leading online fashion retailer in Russia and was 
        part of the Global Fashion Group (GFG). 
        The platform serves millions of users annually, with approximate revenue $2B in 2024.`,
        position_description: `I joined Marketing department as a Python developer. 
        After 1.5 years I started to assemble a new team and slowly taking ownership over 3 Python developers as a Tech Lead.`,
    },
    {
        company: 'Yandex',
        company_linkedin_link: 'https://www.linkedin.com/company/yandex/',
        position: 'Technical support -> Analyst Developer',
        dates: { 'from': '2013-03'},
        logo: YandexLogo,
        type: 'On-site. Moscow, Russia',
        company_description: `Yandex is a Russian multinational technology company founded in 1997 with $11.22 billion annual revenue in 2024.`,
        position_description: `I joined commercial department as a phone technical support. I slowly learned how to analyse data with Python and started to make small interfaces with Javascript.`,
    },
];

export default function ExperienceTimeline() {
    const [expandedIndex, setExpandedIndex] = React.useState(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleToggle = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <Timeline position="right">
            {experienceSteps.map((step, index) => {
                const isExpanded = expandedIndex === index;
                return (
                <TimelineItem key={step.company}>
                    <TimelineOppositeContent
                        sx={{
                            textAlign: 'right',
                            flex: { xs: 0, sm: 0.25 },
                            mx: 0,
                            pl: 0,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        <Stack>
                            <Typography variant='body2' component="span" >
                                {step.dates.from}
                            </Typography>
                            <Typography component="span" variant="caption" color="text.secondary" >
                                {step.type}
                            </Typography>
                        </Stack>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{m: 0, p: 0, backgroundColor: 'transparent', boxShadow: 'none'}}
                        >
                            <Box
                                component="img"
                                src={step.logo}
                                alt={`${step.company} logo`}
                                sx={{width: 50, height: 50, borderRadius: '20%', opacity: 0.9}}
                            />
                        </TimelineDot>
                        {index < experienceSteps.length - 1 && (
                            <TimelineConnector sx={{bgcolor: 'divider'}}/>
                        )}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: 0, px: 2 }}>
                        <Stack spacing={0.5}>
                            <Stack>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                                    <Typography variant='h6'>
                                        <Link href={step.company_linkedin_link}> {step.company}</Link>
                                    </Typography>
                                    <IconButton
                                        size="small"
                                        onClick={() => handleToggle(index)}
                                        aria-label={`Toggle details for ${step.company}`}
                                        aria-expanded={isExpanded}
                                        sx={{ color: 'inherit', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
                                    >
                                        <ExpandMoreIcon fontSize="inherit" />
                                    </IconButton>
                                </Box>
                                <Typography variant='subtitle2' color='text.secondary'>
                                    {step.position}
                                </Typography>
                            </Stack>

                            <Collapse in={isExpanded} timeout='auto' unmountOnExit>
                                <Typography variant='body2' sx={{ mt: 1, mb: 1}}>
                                    {step.company_description} {step.position_description}
                                </Typography>
                            </Collapse>
                        </Stack>
                    </TimelineContent>
                </TimelineItem>
                );
            })}
        </Timeline>
    );
}
