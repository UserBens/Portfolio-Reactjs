// import React from 'react'
// import { useEffect, useState } from 'react'
import React, { useEffect, useState } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
// import { experiences } from '../../data/constants';
import { Container, Wrapper, Title, Desc, TimelineSection } from './ExperienceStyle';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';

const Experience = () => {

    const [experience, setExperience] = useState([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "experience"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setExperience(newData);
            })

    }

    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My work experience as a Web Development and working on different companies and projects.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {experience.map((experience, index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experience.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience