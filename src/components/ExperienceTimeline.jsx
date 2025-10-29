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

import { experienceSteps } from './ExperienceStepper';

export default function ExperienceTimeline() {
    return (
        <Timeline position="right">
            {experienceSteps.map((step, index) => (
                <TimelineItem key={step.company}>
                    <TimelineOppositeContent
                        sx={{
                            m: 'auto 0',
                            textAlign: 'right',
                            flex: { xs: 1, sm: 0.25 },
                            px: { xs: 2, sm: 0 },
                        }}
                    >
                        <Typography variant="body2">
                            {step.dates.from} - {step.dates.to}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {step.type}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                m: 0,
                                p: 0,
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                            }}
                        >
                            <Box
                                component="img"
                                src={step.logo}
                                alt={`${step.company} logo`}
                                sx={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: '20%',
                                    opacity: 0.9,
                                }}
                            />
                        </TimelineDot>
                        {index < experienceSteps.length - 1 && (
                            <TimelineConnector
                                sx={{
                                    bgcolor: 'divider',
                                }}
                            />
                        )}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: 2, px: 2 }}>
                        <Stack spacing={0.5}>
                            <Typography variant="h6">
                                <Link href={step.company_linkedin_link}>
                                    {step.company}
                                </Link>
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                {step.position}
                            </Typography>
                            <Typography variant="body2">
                                {step.company_description} {step.position_description}
                            </Typography>
                        </Stack>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
