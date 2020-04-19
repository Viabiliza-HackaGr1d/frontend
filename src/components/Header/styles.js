import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;

  .menu{
    min-width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul{
      list-style: none;
      display: flex;
      min-width: 300px;
      
      li{
        
        div{
          color: #333 !important;
          font-family: 'Roboto' !important;
          font-weight: 100 !important;
          border-radius: 10px !important;
          width: 150px !important;
          transition: background-color 2s !important;
        }
        
        div:hover{
          background-color: #a1aac7 !important;
        }
        
        a{
          text-decoration: none;
          color: #555;
        }
        
        float: left;
        cursor: pointer;
        padding-left: 10px;
        margin-right: 10px;
        
        
      }
    }
    
    .options{
      display: flex;
      align-items: center;
      color: #FFF;
      
      
    }
    
    .cta{
      
      a{
        text-decoration: none;
      }

      div{
        padding: 10px;
        background-color: #6c9ef5 !important;
        transition: background-color 2s;
        color: #555 !important;
        font-weight: 400 !important;
      }

      div:hover{
        background-color: #DFE5EC !important;
      }
      

    }

  }
`;