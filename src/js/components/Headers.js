import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 28px;
  display: ${props => props.inline ? 'inline-block' : 'block'};
`;