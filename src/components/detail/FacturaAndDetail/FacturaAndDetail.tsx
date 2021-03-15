import React, {useEffect, useState} from 'react';
import FacturaMain from "./FacturaMain";
import Factura from "../factura/factura";
import {Collapse} from "react-collapse";
import Flex from "../../ui/flex";

type Factura = {
    legend: string;
    active: boolean;
    amount: number | string;
}

interface Props {
    facturas:any;
    total:number|string;
}

interface State {
    showDetail?: boolean;
    facturas: Array<Factura>;
    total: number | string;
}

const FacturaAndDetail: React.FC<Props> = (props) => {

    const [state, set] = useState<State>({
        showDetail: false,
        facturas: [],
        total: 155555
    })

    useEffect(() => {
        if(props.facturas){
            set({...state,
                facturas: props.facturas.map((i:any)=>({monto:i.monto,legend:i.legend, active:i.monto > 0})),
                total:props.total,
            })
        }
    }, [])

    return (
        <>
            <FacturaMain
                active={true}
                disabled={false}
                setActive={() => null}
                showDetail={() => set({...state, showDetail: !state.showDetail})}
                total={state.total}
                detailActive={!!(state.showDetail)}
            />

            <Collapse isOpened={!!(state.showDetail)}>
                <Flex className={"pb-3"}>
                    <Flex className={"wc py-1"}>
                        <Flex flex={"0 0 120px"}><small>Discriminado</small></Flex>
                        <Flex flex={"1 0 auto"}> </Flex>
                        <Flex flex={"0 0 80px"}><small>Valor</small></Flex>
                    </Flex>
                    {state.facturas.length &&
                    state.facturas.map((factura:any, key) =>
                        <Factura
                            active={factura.amount != 0}
                            key={key}
                            disabled={false}
                            monto={factura.monto}
                            legend={factura.legend}
                            onChange={()=> null}
                            swith={()=> null}
                        />)}
                </Flex>
            </Collapse>
        </>
    )
}

export default React.memo(FacturaAndDetail);