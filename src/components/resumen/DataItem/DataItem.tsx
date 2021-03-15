import React from 'react';
import styled from "@emotion/styled";

interface DataItemP {
    label:string;
    value:string;
    uppercase?:boolean;
    bold?:boolean;
}

const Container =styled.div`
    
    small{
        line-height:1em;
        display:block;
        color:#777;
    }
`

const Dataitem:React.FC<DataItemP> = (props) => {
    return (
        <Container className={"wc text-left mb-3"}>
            <small className={"fl mb-0"}>{props.label}</small>
            <p className={`mb-0 ${!props.bold && 'fl'}`}>{props.value}</p>
        </Container>
    )
}

export default React.memo(Dataitem);