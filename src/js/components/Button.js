import styled from "styled-components";
import { theme } from '../styles/theme';

export const Button = styled.button`
  color: ${theme.color.dark};
  background-color: ${theme.color.grey};
  border: solid 1px ${theme.color.dark};
  outline: none;
  border-radius: 4px;
  padding: 8px;
  ${props => props.width && `width: ${props.width};`}
`;