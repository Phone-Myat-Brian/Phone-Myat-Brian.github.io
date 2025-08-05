import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;

  input, textarea {
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 1rem;
    background: #6a11cb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #2575fc;
    }
  }
`;
