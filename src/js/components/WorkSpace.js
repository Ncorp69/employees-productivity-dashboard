import styled from "styled-components";

export const WorkSpace = styled.div`
  background-color: #fff;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
`;

export const Panel = styled.div`
  padding: 16px 12px;
  display: flex;
  ${props => props.column && `flex-direction: column;`};
  ${props => props.justify && `justify-content: ${props.justify};`};
  ${props => props.align ? `align-items: ${props.align}` : 'align-items: center;'};
  
  @media ( max-width: 570px ) {
    flex-direction: column;
    align-items: stretch;
  }
`;