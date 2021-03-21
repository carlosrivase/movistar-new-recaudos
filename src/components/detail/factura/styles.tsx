import styled from "@emotion/styled";
import {colors} from "../../ui";


export const Container = styled.div`
    width:100%;
    border-top    : 1px solid ${colors.borde};
    border-bottom : 1px solid ${colors.borde};
    margin-bottom:-1px;
    
    .to-right{
        text-align:right;
        
        &:focus{
            outline:none;
            background:#f1f1f2;
        }
        &:disabled{
            color:#999999;
        }
    }
`;