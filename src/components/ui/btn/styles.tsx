import styled from "@emotion/styled";
import {colors, sombra, transiton} from "../index";

type ButtonProps = {
    type  : boolean;
    height: number;
    color : string;
    flex  : string;
    disabled?:boolean;
    loading?:boolean;
}

export const Container = styled.div<ButtonProps>`
     flex:${props=> props.flex};
     position:relative;
     
     button{
        width:100%;    
        border:1px solid ${props=> props.color};
        min-height:${props=> props.height}px;
        border-radius:${props=> props.height/2}px;
        background-color:${props=> props.type ? "white" :  props.color};
        color:${props=> props.loading ? props.color : (props.type ? props.color : "white")};
        box-shadow:${sombra};
        
        &:hover{}
        
        &:disabled{
            background:${props => props.type ? 'white': colors.disabled};
            color:${props => props.type ? colors.disabled : 'white'};
            border-color: ${props => props.loading ? props.color : colors.disabled };
        }
        
        transition:${transiton};
     }
     
    .loading{
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        z-index:10;
    }
`;

