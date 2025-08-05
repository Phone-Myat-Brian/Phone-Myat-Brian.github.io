import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f9f9f9;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

export const FilterButtons = styled.div`
  margin-bottom: 2rem;

  button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #6a11cb;
    background: transparent;
    color: #6a11cb;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;

    &:hover, &.active {
      background: #6a11cb;
      color: white;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  a {
    color: #6a11cb;
    text-decoration: none;
    font-weight: bold;
  }
`;
