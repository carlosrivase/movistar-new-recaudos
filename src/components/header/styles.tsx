import styled from '@emotion/styled';
import {sombra}from './../ui';



export const Container = styled.div`
    position:sticky;
    top:0;
    width:100%;
    background:white;
    flex: 0 0 auto;
    box-shadow: ${sombra}; 
    z-index:999;
    
    img{
       height:40px;
       width:auto;
       margin:auto;
       
       @media all and (max-width:768px){
         height:30px;
       }
    }

`;
