import styled from "styled-components";
import { theme } from '../styles/theme';

export const InputWrap = styled.div`
  position: relative;
`;

export const CloseIconWrap = styled.div`
  color: ${theme.color.dark};
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-24px, -6px);
  cursor: pointer;
`;

export const DateRangeContainer = styled.div`
  position: absolute;
  border: solid 1px ${theme.color.dark};
  z-index: 99999;
  top: 48px;
  right: 0;
  @media ( min-width: 719px ) {
    & > :last-child {
      display: none;
    }
  }
  @media ( max-width: 719px ) {
    & > :first-child {
      display: none;
    }
  }
  @media ( max-width: 468px ) {
    width: 100%;
    overflow: scroll;
  }
`;