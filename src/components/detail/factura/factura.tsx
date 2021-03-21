import React, {useEffect} from 'react';
import Flex from "../../ui/flex";
import {Container} from "./styles";
import CheckCircle from "../../ui/checkCircle/checkCircle";
import Cleave from "cleave.js/react";

interface Props {
    original:string;
    active:boolean;
    monto:string;
    disabled:boolean
    legend:string;
    onChange:(id:number,amount:string)=> void;
    swith:(id:number,cond:boolean)=>void;
    id:number;
}


const Factura:React.FC<Props> = (props) => {

    useEffect(()=>{
        if(parseInt(props.monto) < 0){
            props.swith(props.id,false)
        }
    },[])

    return (
        <Container>
            <Flex className={"wc py-2"}>
                <Flex flex={"0 0 40px"}>
                    <CheckCircle
                        disabled={props.disabled}
                        active={props.active}
                        set={()=> props.swith(props.id, !props.active)}
                    />
                </Flex>
                <Flex flex={"2 0 150px"} jc={"flex-start"} className={"legend"}>
                    {props.legend}
                </Flex>
                <Flex flex={"1 0 120px"} jc={"flex-end"}>
                    <Cleave
                        onChange={(e)=> {
                            if(parseInt(e.target.rawValue) > parseInt(props.original)) {
                                e.target.rawValue = props.original;
                            }
                            if(!e.target.rawValue || e.target.rawValue === "0") {
                                props.swith(props.id, false)
                                e.target.rawValue = "0";
                            }else{
                                props.swith(props.id,true)
                            }
                            props.onChange(props.id,e.target.rawValue);
                        }}
                        className={"to-right wc"}
                        value={props.monto}
                        disabled={props.disabled}
                        options={{
                            numeral: true,
                            prefix: '$',
                            rawValueTrimPrefix:true,
                            noImmediatePrefix: true
                        }}
                    />
                </Flex>
            </Flex>
        </Container>
    )
}

export default React.memo(Factura);