import styled from "@emotion/styled";
import {colors} from "../../ui";

export const Container = styled.div`
       border:1px solid red;
`

type Props ={
    active:boolean;
}

export const ContainerFacturaMain = styled.div<Props>`
       width:100%;
       border-bottom:2px solid ${colors.blueDark};
       
       .to-righ{
        text-align:right;
        &:disabled{
            color:${colors.blueDark};
            background:transparent;
        }
       }
       
       .showDetail{
           background:transparent;
           cursor:pointer;
           transform:rotate(${props=> props.active ? "180deg" : 0});
           border:none;
           box-shadow:none;
           
           &:focus{
           border:none;
           box-shadow:none;
           outline:none;
           }
       }
`