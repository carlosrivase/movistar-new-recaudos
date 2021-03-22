import React from "react";
// @ts-ignore
import styled from "@emotion/styled";

type Prop={
    direction:string | undefined ;
    jc:string | undefined ;
    alg:string | undefined ;
    flex :string | undefined ;
}

const Container = styled.div<Prop>`
    position        : relative;
    display         : flex;
    flex-flow       : ${props => props.direction} wrap;
    justify-content : ${props => props.jc};
    align-items     : ${props => props.alg};
    flex            : ${props => props.flex};
`;

interface Props {
    children: React.ReactNode;
    jc?: string ;
    alg?: string ;
    flex?: string ;
    className?: string ;
    direction?: string ;
    style?:object
}

const Flex:React.FC<Props>= (props) => {
    return (
        <Container
            jc={props.jc}
            alg={props.alg}
            flex={props.flex}
            className={props.className}
            direction={props.direction}
            style={props.style}
        >
            {props.children}
        </Container>
    )
}

export default React.memo(Flex);
