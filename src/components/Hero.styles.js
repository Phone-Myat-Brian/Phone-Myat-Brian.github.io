import styled from 'styled-components';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;

  h1 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
  }
`;
