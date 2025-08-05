import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #333;
  color: white;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 15px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #ddd;
    }
  }
`;
