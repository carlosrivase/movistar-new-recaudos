import styled from "@emotion/styled";
import {colors, transiton} from "../index";


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
        color:${props => props.active ? "white" :(!!props.color ? props.color : colors.blue) };
        min-height:${props => props.size}px;
        cursor:${props => props.disabled ? "not-allowed" : 'pointer'};
        border-radius:${props => props.size === "36" ? "16px" : "23px"};
        width:100%;
        transition: ${transiton};
        border: 1px solid ${props => props.borde ? props.color : "transparent"};
        
        &:disabled{ 
            cursor:pointer;
            color:white;
            background-color:${colors.disabled}
        }
    }
    
    .arrow{
        width:12px;
        height:12px;
        border-radius:2px;
        position:absolute;
        top:${props => props.active ? "100%" : "50%" };
        opacity: ${props => props.active ? 1 : 0};
        left:50%;
        transform:translate(-50%,-60%) rotate(-45deg) ;
        background-color:${colors.blue};
        transition: ${transiton};
    }
`