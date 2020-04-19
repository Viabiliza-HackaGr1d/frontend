import styled from 'styled-components';

export const Container = styled.div`
  background-color: #b9c2ce;
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 100%;
  
  ul{
    display: flex;
    height: 25vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    
    a{
      text-decoration: none;
      transition: opacity 2s;
    }

    li{
      color: #0575E6;
      font-weight: bold;
      font-family: 'Josefin Sans';

      &:hover{
        opacity: 80% !important;
      }

      &:checked{
        color: red;
      }

    }


  }

`;

export const Profile = styled.div`
  height: 40vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img{
    height: 180px;
  }

  h1{
    font-family: 'Roboto';
    font-size: 30px;
  }

  h3{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 15px;
  }

`;
