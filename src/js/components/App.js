import styled from 'styled-components';
import { theme } from '../styles/theme';

export const App = styled.div`
  *, & {
    box-sizing: border-box;
    font-family: 'Roboto', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: ${theme.color.dark};
  }
`;