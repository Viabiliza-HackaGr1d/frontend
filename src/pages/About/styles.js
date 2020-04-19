import styled from 'styled-components';
import background from '../../assets/background.jpg';

export const Container = styled.div`
  height: 110vh;
  width: 100vw;
  background-image: url(${background});
  background-color: #DFE5EC;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 70%;
  background-blend-mode: soft-light !important;
`;

export const Landscape = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 270px;

  p{
    font-size: 40px;
  }

  span{
    font-size: 20px;
  }

`;
