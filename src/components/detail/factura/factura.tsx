import React from 'react';
import Flex from "../../ui/flex";
import {Container} from "./styles";
import CheckCircle from "../../ui/checkCircle/checkCircle";
import Cleave from "cleave.js/react";

interface Props {
    active:boolean;
    monto:number|string;
    disabled:boolean
    legend:string;
    onChange:(e:any)=> void
    swith:()=>void
}


const Factura:React.FC<Props> = (props) => {
    return (
        <Container>
            <Flex className={"wc py-2"}>
                <Flex flex={"0 0 40px"} >
                    <CheckCircle
                        disabled={props.disabled}
                        active={props.active}
                        set={()=> null}
                    />
                </Flex>
                <Flex flex={"2 0 150px"} jc={"flex-start"}>
                    {props.legend}
                </Flex>
                <Flex flex={"1 0 120px"} jc={"flex-end"}>
                    <Cleave
                        className={"to-right wc"}
                        value={props.monto}
                        options={{
                            numeral:true,
                            delimiter:'.',
                            prefix: '$',
                        }}
                    />
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Factura);