import styled from 'styled-components';

import background from '../../assets/loginback.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: color;

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1{
      font-weight: bold;
      font-family: 'Roboto';
      font-size: 100px;
      color: #6c9ef5;
    }

    a{
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      background-color: #5b8de4;
      color: #FFF;
      border-radius: 10px;
      height: 30px;
      width: 200px;
      font-weight: bolder;
    }

    form{

      input{
        padding: 10px;
        height: 30px !important;
        margin: 10px;
        color: #222 !important;
        border-radius: 10px;
        border: 2px solid blue;
      }
    }

    .submitButton{
      width: 150px !important;
      
      div{
        color: #333 !important;
      }

    }

  }

`;
