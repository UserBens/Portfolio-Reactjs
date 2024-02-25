import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import ProjectCards from '../Cards/ProjectCard'


const Projects = ({ openModal, setOpenModal }) => {

  const [projects, setProjects] = useState([]);


  const fetchPost = async () => {

    await getDocs(collection(db, "projects"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setProjects(newData);
        // console.log(newData);
      })

  }

  useEffect(() => {
    fetchPost();
  }, [])

  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'UI/UX' ?
            <ToggleButton active value="UI/UX app" onClick={() => setToggle('UI/UX')}>UI/UX</ToggleButton>
            :
            <ToggleButton value="UI/UX" onClick={() => setToggle('UI/UX')}>UI/UX</ToggleButton>
          }
          {/* <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((projects) => (
              <ProjectCards projects={projects} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((projects) => (
              <ProjectCards projects={projects} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects