import React, { useState } from 'react';
import { ProjectsContainer, ProjectsGrid, ProjectCard, FilterButtons } from './Projects.styles';
import Modal from './Modal';

const projectsData = [
    { id: 1, title: 'Project One', category: 'Web', description: 'A web development project.' },
    { id: 2, title: 'Project Two', category: 'Design', description: 'A design project.' },
    { id: 3, title: 'Project Three', category: 'Web', description: 'Another web development project.' },
    { id: 4, title: 'Project Four', category: 'Mobile', description: 'A mobile app project.' },
    { id: 5, title: 'Project Five', category: 'Design', description: 'Another design project.' },
    { id: 6, title: 'Project Six', category: 'Web', description: 'A third web development project.' },
];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <ProjectsContainer>
            <h2>Projects</h2>
            <FilterButtons>
                <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
                <button onClick={() => setFilter('Web')} className={filter === 'Web' ? 'active' : ''}>Web</button>
                <button onClick={() => setFilter('Design')} className={filter === 'Design' ? 'active' : ''}>Design</button>
                <button onClick={() => setFilter('Mobile')} className={filter === 'Mobile' ? 'active' : ''}>Mobile</button>
            </FilterButtons>
            <ProjectsGrid>
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} onClick={() => openModal(project)}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href="#" onClick={(e) => {e.preventDefault(); openModal(project)}}>View Project</a>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
            <Modal project={selectedProject} closeModal={closeModal} />
        </ProjectsContainer>
    );
};

export default Projects;
