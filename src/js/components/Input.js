import styled from "styled-components";
import { theme } from '../styles/theme';

export const Input = styled.input`
  color: ${theme.color.dark};
  border: solid 1px ${theme.color.dark};
  outline: none;
  border-radius: 4px;
  padding: 10px;
  width: 260px;
  ${props => props.marginRight && `margin-right: 10px`};
  @media ( max-width: 570px ) {
    width: 100%;
    margin: 5px 0;
  }
`;