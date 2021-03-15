import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${theme.color.dark};
  color: #fff;
  border: none;
  outline: none;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  } 
`;

const ScrollToTopBtn = () => {
    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return <ScrollToTop onClick={onClick}>To top</ScrollToTop>
};

export default ScrollToTopBtn;