import styled from 'styled-components';

export const Container = styled.button`
  height: 40px;
  width: 120px;
  background-image: linear-gradient(to right, #36D1DC, #5B86E5);
  border-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  color: #FFF;
  font-family: 'Roboto';
  font-weight: bold;
  transition: opacity 2s;

  &:hover{
    opacity: 50%;
  }
`;