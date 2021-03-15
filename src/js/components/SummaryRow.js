import styled, { css } from "styled-components";
import { theme } from '../styles/theme';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: dotted 1px ${theme.color.dark};
  padding-top: 11px;
  @media ( max-width: 450px ) {
    flex-direction: column;
    align-items: center;
  }
`;

const text = css`
  font-size: 20px;
`;

export const Label = styled.div`
  ${text}
`;

export const Data = styled.div`
  ${text};
  @media ( max-width: 450px ) {
    padding-top: 8px;
  }
`;