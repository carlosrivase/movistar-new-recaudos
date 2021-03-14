import React from 'react';
import styled from "@emotion/styled";

type Pr = {
    size:number;
    sizeBr:number;
    colorPath:string;
    colorLine:string;
}

let Container = styled.div<Pr>`
    height : ${props=> props.size}px;
    width  : ${props=> props.size}px;
    border : ${props=> props.sizeBr}px solid transparent;
    
    border-color: 
     ${props=> props.colorPath}
     ${props=> props.colorPath}
     ${props=> props.colorPath}
     ${props=> props.colorLine};
     
    animation: girar .5s ease-out infinite;
    border-radius:50%;
    
`;

interface Props {
    size?:number;
    sizeBr?:number;
    colorPath?:string;
    colorLine?:string;
}

const Loading:React.FC<Props> = ({
     size=30,
     sizeBr=3,
     colorPath="rgba(0,0,0,.05)",
     colorLine="white"
 }) => {

    return (
        <Container
            size={size}
            sizeBr={sizeBr}
            colorPath={colorPath}
            colorLine={colorLine}
        />
    )
}

export default React.memo(Loading);