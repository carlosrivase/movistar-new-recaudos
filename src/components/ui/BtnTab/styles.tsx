import styled from "@emotion/styled";
import {colors, sombra, transiton} from "../index";


type Props ={
    active:boolean;
    size:string;
    disabled:boolean;
    flex:string;
    children: React.ReactNode;
    color:string | undefined;
    borde?:boolean
}

export const Container = styled.div<Props>`

    position:relative;
    flex:${props=> props.flex};
        
    button{
        background-color:${props => props.active ? (!!props.color ? props.color : colors.blue) : "transparent"};
        color:${props => props.active ? "white" : ( props.disabled ? colors.disabled : (!!props.color ? props.color : colors.blue) ) };
        min-height:${props => props.size}px;
        cursor:${props => props.disabled ? "not-allowed" : 'pointer'};
        border-radius:${props => props.size === "36" ? "20px" : "23px"};
        width:100%;
        transition: ${transiton};
        padding-bottom:5px;
        border: 1px solid ${props => props.borde ? (props.disabled ? colors.disabled : props.color) : "transparent"};
        
        &:disabled{ 
            cursor:not-allowed;
            opacity:${props => !props.active ? .8 : 1};
        }
        
        &:hover{
            box-shadow:${sombra};
        }
    }
    
    .arrow{
        width:12px;
        height:12px;
        border-radius:2px;
        position:absolute;
        top:100%;
        opacity: ${props => props.active ? 1 : 0};
        left:50%;
        transform:translate(-50%,-60%) rotate(-45deg) ;
        background-color:${props => props.color ? 'transparent' : colors.blue};
        transition: ${transiton};
    }
`