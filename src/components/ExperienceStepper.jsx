import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Stack from '@mui/material/Stack';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import CloudLinuxLogo from '../images/cloudlinux_logo.jpeg'
import InstoriesLogo from '../images/instories_logo.jpeg'
import PaltaLogo from '../images/palta_logo.jpeg'
import LamodaLogo from '../images/lamoda_logo.jpeg'
import YandexLogo from '../images/yandex_logo.jpeg'

const steps = [
    {
        company: 'CloudLinux',
        company_linkedin_link: 'https://www.linkedin.com/company/cloudlinux/',
        position: 'Senior Fullstack Developer',
        dates: { 'from': '2025-10', 'to': 'today' },
        logo: CloudLinuxLogo,
        type: 'Remote. Full-time',
        company_description: `is the only commercially supported operating system (OS) optimized 
        for hosting service providers who manage a significant level of shared hosting accounts and 
        for datacenters who sell servers to enterprise and SMB customers.`,
        position_description: ``,
    },
    {
        company: 'Instories',
        company_linkedin_link: 'https://www.linkedin.com/company/instories/',
        position: 'Web Tech Lead',
        dates: { 'from': '2023-07', 'to': '2024-09' },
        logo: InstoriesLogo,
        type: 'Remote. Full-time',
        company_description: `is a video creation platform with ~$1M monthly revenue in 2024 according to SensorTower.`,
        position_description: `I joined to launch a new web direction and scale engineering operations.`,
    },
    {
        company: 'Palta',
        position: 'Senior Software Engineer',
        company_linkedin_link: 'https://www.linkedin.com/company/paltafamily/',
        dates: { 'from': '2021-09', 'to': '2022-10' },
        logo: PaltaLogo,
        type: 'Hybrid. Limassol, Cyprus',
        company_description: `is a venture studio behind apps like Flo and Simple, 
        focused on health and wellness technology.`,
        position_description: `I joined their new startup (later branded as Lovi) at the idea stage, 
        as one of the first 10 employees.`,
    },
    {
        company: 'Lamoda',
        company_linkedin_link: 'https://www.linkedin.com/company/lamodagroup/',
        position: 'Python Developer -> Backend Tech Lead',
        dates: { 'from': '2016-12', 'to': '2021-05' },
        logo: LamodaLogo,
        type: 'Hybrid. Moscow, Russia',
        company_description: `is a leading online fashion retailer in Russia and was 
        part of the Global Fashion Group (GFG). 
        The platform serves millions of users annually, with approximate revenue $2B in 2024`,
        position_description: `I joined Marketing department as a Python developer. 
        After 1.5 years I started to assemble a new team and slowly taking ownership over 3 Python developers as a Tech Lead`,
    },
    {
        company: 'Yandex',
        company_linkedin_link: 'https://www.linkedin.com/company/yandex/',
        position: 'Technical support -> Analyst Developer',
        dates: { 'from': '2013-03', 'to': '2016-12' },
        logo: YandexLogo,
        type: 'On-site. Moscow, Russia',
        company_description: `is a Russian multinational technology company founded in 1997 with $11.22 billion annual revenue in 2024.`,
        position_description: `I joined commercial department as a phone technical support. I slowly learned how to analyse data with Python and started to make small interfaces with Javascript.`,
    },
];

function createStepIconComponent(imageSrc) {
    return function CustomStepIcon(props) {
        const { active, completed, icon } = props;


        return (
                <img
                    src={imageSrc}
                    style={{
                        width: '50px', 
                        borderRadius: '20%', 
                        opacity: active ? 1 : 0.5
                    }}
                />
        );
    }
}
export default function ExperienceStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepClick = (index) => {
        setActiveStep((prev) => (prev === index ? null : index)); // toggle open/close
    };

    return (
        <Box >
            <Stepper orientation="vertical" nonLinear activeStep={activeStep}>
                {steps.map((step, index) => (
                    <Step key={step.company} expanded={activeStep === index}>
                        <StepLabel StepIconComponent={createStepIconComponent(step.logo)} onClick={() => handleStepClick(index)} sx={{ cursor: 'pointer', userSelect: 'none' }}>
                            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                                <Stack>
                                    <Typography><b>{step.company}</b></Typography>
                                    <Typography variant='caption'>{step.position}</Typography>
                                </Stack>
                                <Stack sx={{alignItems: "flex-end"}}>
                                    <Typography>{step.dates.from} - {step.dates.to}</Typography>
                                    <Typography variant='caption'>{step.type}</Typography>
                                </Stack>
                            </Box>
                        </StepLabel>
                        {activeStep === index && (
                            <StepContent>
                                <Typography><Link href={step.company_linkedin_link} target='_blank'>{step.company}</Link> {step.company_description} {step.position_description}</Typography>
                            </StepContent>
                        )}
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
