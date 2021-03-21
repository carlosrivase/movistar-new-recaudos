import React from 'react';
import {ContainerFacturaMain} from "./styles";
import Flex from "../../ui/flex";
import CheckCircle from "../../ui/checkCircle/checkCircle";
import Cleave from 'cleave.js/react';

interface Props {
    total:number|string;
    showDetail:()=> void;
    setActive:()=> void;
    active:boolean;
    disabled:boolean;
    detailActive:boolean;
    hideChevron:boolean
}

const FacturaMain:React.FC<Props> = (props) => {
    return (
        <ContainerFacturaMain active={props.detailActive}>
            <Flex className={"py-3"}>
                <Flex flex={"0 0 30px"}>
                    <CheckCircle
                        disabled={props.disabled}
                        active={props.active}
                        set={()=> props.setActive()}
                    />
                </Flex>
                <Flex flex={"1 0 50px"} jc={"flex-start"} className={"fb ps-2 fz18"}> Total a pagar</Flex>
                <Flex flex={"0 0 140px"} className={"fb"}>
                    <Cleave
                        disabled={true}
                        className={"fb to-righ fz18 wc"}
                        value={props.total}
                        options={{
                            numeral:true,
                            delimiter:'.',
                            prefix: '$',
                        }}
                    />
                </Flex>
                <Flex flex={"0 0 30px"}>
                    {!props.hideChevron &&
                    <button className={"showDetail"} onClick={()=> props.showDetail()}>
                        <i className={"icon-icon-chevron"}> </i>
                    </button>}
                </Flex>
            </Flex>
        </ContainerFacturaMain>
    )
}

export default React.memo(FacturaMain);