import styled from 'styled-components';

export const StyledFriendsList = styled.ul`
  list-style: none;
  padding-left: 0;
  & .item {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    margin-bottom: 10px;
    padding: 10px;
    width: 300px;
    /* border: 1px solid #c4c4c4; */
    background-color: #fff;
    box-shadow: 5px 5px 5px #adadad;
  }
`;

export const StyledSpan = styled.span`
  margin-left: 20px;
  width: 15px;
  height: 15px;
  /* background-color: gray; */

  /* border: 1px solid #c4c4c4; */
  border-radius: 50%;

  &.green {
    background-color: green;
  }

  &.red {
    background-color: red;
  }
`;

export const StyledName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
