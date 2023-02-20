import styled from 'styled-components';

export const StyledHead = styled.thead`
  height: 30px;

  background-color: #85cdfd;
  color: #fff;
  text-transform: uppercase;
`;

export const StyledRows = styled.tr`
  &:nth-child(2n) {
    background-color: #dddddd;
  }
`;

export const StyledItems = styled.td`
  width: 150px;
  height: 30px;
  text-align: center;
  /* padding-left: 20px; */
`;
