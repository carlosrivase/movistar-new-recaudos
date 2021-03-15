import styled from "@emotion/styled";
import {colors, transiton} from "../index";

type Props ={
    disabled:boolean;
    active:boolean;
}


export const Container =styled.div<Props>`
    width:25px;
    height:25px;
    border:1px solid ${props=> props.disabled ? colors.disabled : colors.blue };
    border-radius:50%;
    padding:0;
    position:relative;
    
    input{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:3;
        opacity:0;
    }
    
    .chulo{
        position:absolute;
        top:2px;
        left:2px;
        width:calc(100% - 4px);
        height:calc(100% - 4px);
        z-index:2;
        color:black;
        opacity:0;
        transform:scale(.5);
        transition:${transiton};
        font-size:20px;
        line-height:10px;
        padding:0;
        text-align:center;
        background:${colors.blue};
        color:white;
        border:1px solid white;
    }
    
    .chulo.active{
        transform:scale(1);
        opacity:1;        
        border-radius:50%;
    }
`;
