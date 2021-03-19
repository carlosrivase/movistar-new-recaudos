import styled from "@emotion/styled";
import {colors} from "../index";


type Props = {
    flex:string;
    icon:boolean | undefined;
    error:boolean;
    children?:React.ReactNode;
    colorIcon?:string
}

export const Container = styled.div<Props>`

    flex:${props=> props.flex};
    position:relative;
    width:100%;
    
    .icon{
        position:absolute;
        left:0;
        top:0;
        width:auto;
        height:100%;
        font-size:22px;
        color:${props=> props.colorIcon};
        z-index:10;
        height:56px;
    }
    
    input{
        padding-left: ${props=> props.icon ? '35px' : '0'};
        border:none;
        height:56px;
        width:100%;
        border-bottom:2px solid ${props=> props.error ? "red" : colors.blueDark};
        color:${props=> props.error ? "red" : colors.text};
        cursor:pointer;
        
        &:disabled{
            border-color:${colors.disabled};
            cursor:not-allowed;
            color:#999999;
        }
        
        &:focus{
            border-color:${props=> props.error ? "red" : colors.blue};
            outline:none;
        }
    }   

`;