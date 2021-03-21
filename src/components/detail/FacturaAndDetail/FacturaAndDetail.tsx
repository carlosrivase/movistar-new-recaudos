import React, {useEffect, useState} from 'react';
import FacturaMain from "./FacturaMain";
import Factura from "../factura/factura";
import {Collapse} from "react-collapse";
import Flex from "../../ui/flex";

type FacturaObj = {
    legend: string;
    active: boolean;
    amount: number | string;
}

interface Props {
    facturas:any;
    total:number;
    active:boolean,
    handleTotal:(amount:number)=> void;
    showDetail:boolean;
}

interface State {
    showDetail?: boolean;
    facturas: Array<FacturaObj>;
    total: number | string;
}

const FacturaAndDetail: React.FC<Props> = (props) => {

    const [state, set] = useState<State>({
        showDetail: false,
        facturas: [],
        total: 155555,
    })

    useEffect(()=>{
        props.handleTotal(parseInt(state.total.toString()));
    },[state.total])

    let upDateAmountFactura = (id:number,amount:string) =>{
        amount = amount.replace(/[^0-9]/g,'');

        let total: number = 0;
        let copyFacturas = [...state.facturas]
            .map((item:any)=>{
                if(item.id === id) {
                    item.monto = amount
                }
                total = total + parseInt(item.monto)
                return item;
            });

        set({
            ...state,
            facturas:copyFacturas,
            total
        })
    }
    let activateItem = (id:number, cond:boolean)=>{
        let monto = '';
        let copArr = [...state.facturas]
            .map((item:any)=>{
            if(item.id === id){
                item.active = cond;
                monto = item.monto
            }
            return item;
        })
        monto = (cond ? parseInt( state.total.toString()) + parseInt(monto) : parseInt(state.total.toString()) - parseInt(monto)).toString();
        set({...state,facturas:copArr, total:monto})
    }

    useEffect(() => {

        if(props.facturas){
            set({...state,
                facturas: props.facturas.map((i:any,key:number)=>({
                    id:key,
                    monto:i.monto,
                    legend:i.legend,
                    active:i.monto > 0,
                    original:i.monto
                })),
                total:props.total,
                showDetail:!!(props.showDetail && props.facturas.length)
            })
        }
    }, [])

    return (
        <>
            <FacturaMain
                active={ parseInt(state.total.toString()) > 0}
                disabled={false}
                setActive={() => null}
                showDetail={() => set({...state, showDetail: !state.showDetail})}
                total={state.total}
                detailActive={!!(state.showDetail)}
                hideChevron={!state.facturas.length}
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
                            id={key}
                            active={factura.active}
                            key={key}
                            disabled={factura.original === "0"}
                            monto={factura.monto}
                            legend={factura.legend}
                            onChange={(id:number,amount:string) => upDateAmountFactura(id, amount)}
                            swith={(id:number,cond:boolean)=> activateItem(id, cond)}
                            original={factura.original}
                        />)}
                </Flex>
            </Collapse>
        </>
    )
}

export default React.memo(FacturaAndDetail);