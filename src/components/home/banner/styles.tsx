import styled from "@emotion/styled";
import {colors} from "../../ui";
import banner from "./../../../img/banner.jpg";

export const Container = styled.div`
    width:100%;
    background-image: url(${banner});
    background-position:bottom center;
    background-size:cover;
    height:100%;
    
    .icon{
        font-size:24px
    }
   
    .content{
        position:relative;
        z-index:1;
        min-height:calc(100vh - 90px);
    }
    
    .title{
        font-size:30px;
        margin-bottom:7px;
        @media all and (max-width:380px){
        font-size:26px;    
        }
    }
    
    .cw{color:white!important}
    .alertWhite{
        background:rgba(255,255,255,.6);
        border-radius:6px;
        color:${colors.text};
    }
    
    .medios{
        background:rgba(255,255,255,1);
        border-radius:6px;
    }
    
  @media all and (min-width: 768px) and (min-height:600px){
     min-height:calc(100vh - 150px);
     height:100%;
     
     .content{
        min-height:calc(100vh - 168px);
    }
  }
   
`

