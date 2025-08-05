import React from 'react';
import { HeaderContainer, Nav } from './Header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
