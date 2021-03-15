import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';


export const Warn = styled.div`
  @media ( max-width: 864px ) {
    &:before {
      display: flex;
      text-align: center;
      padding: 8px 0;
      content: 'Some columns were hidden, use more widescreen device';
      background-color: ${theme.color.accent};
      width: 100%;
    }
  }
`;

export const Table = styled.table`
  text-align: left;
  position: relative;
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
`;

export const Tbody = styled.tbody`
  width: 100%;
  overflow: hidden;
`;

const switchingAnimation = css`
  animation: switchingAnimation 140ms ease-in-out forwards;
  transform-origin: center;
  
  @keyframes switchingAnimation {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0, 0);
    }
  }
`;

export const Tr = styled.tr`
  &:nth-child(2n) {
    background-color: ${theme.color.greyLight};
  }
  ${props => props.switching && switchingAnimation};
`;

const hideOnSmallScreens = css`
  @media ( max-width: 864px ) {
    &:nth-child(3) {
      display: none;
    }
  }
  @media ( max-width: 719px ) {
    &:nth-child(4) {
      display: none;
    }
  }
  @media ( max-width: 553px ) {
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const Th = styled.th`
  position: sticky;
  top: -1px;
  background-color: ${theme.color.grey};
  padding: 10px;
  ${props => props.right && `text-align: right`};
  ${props => props.minWidth && `min-width: ${props.minWidth}`};
  ${hideOnSmallScreens};
  @media ( max-width: 570px ) {
    &:nth-child(1) {
      min-width: 150px;
    }
  }
`;

export const Td = styled.td`
  padding: 10px;
  ${props => props.right && `text-align: right`};
  ${hideOnSmallScreens};
`;