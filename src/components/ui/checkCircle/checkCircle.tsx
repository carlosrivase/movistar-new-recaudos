import React from 'react';
import {Container} from "./styles";
import Flex from "../flex";


interface Props {
    active:boolean;
    set:()=>void
    disabled:boolean;
}

const CheckCircle:React.FC<Props> = (props) => {
    return (
        <Container
            active={props.active}
            disabled={props.disabled}
        >
            <input
                type="checkbox"
                onChange={()=> props.set()}
                disabled={props.disabled}
            />
            <Flex className={`chulo ${props.active && 'active'}`}>
                <i className={"icon-icon-check"}> </i>
            </Flex>
        </Container>
    )
}

export default React.memo(CheckCircle);