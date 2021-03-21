import React, {useEffect, useRef, useState} from 'react';
import TabsGroup from "../home/TabsGroup/TabsGroup";
import Title from "../home/title";
import TypeLineBtns from "../home/typeLineBtns/typeLinesBtns";
import {Collapse} from "react-collapse";
import Campo from "../ui/field/field";
import GroupBtns from "../home/GroupBtns/GroupBtns";
import {withRouter} from "react-router-dom";
import {DataFromSmartLink} from "./Helpers";
import {finales,dataToSend} from "./Types";

interface Props {
    history:any
}


const ConultForm: React.FC<Props> = (props) => {

    type Estado = {
        active: number;
        typeLine: string;
        number: string;
        processing: string;
        indicative: string,
        isCorporativo:boolean;
    }

    const [state, set] = useState<Estado>({
        active: 1,
        typeLine: 'movil',
        number: '',
        processing: '',
        indicative: '',
        isCorporativo:false
    })

    const inputRef  :any = useRef(null);
    const selectRef :any = useRef(null);

    let submit = (type: string) => {
        set({...state, processing: type});
        setTimeout(function(){
            if(type === "suscription"){
                props.history.push('/suscription');
            }else{
                props.history.push('/detail');
            }
        },1500)
    }


    useEffect(() => {
        if (state.active !== 1) { set({...state, typeLine: 'movil'})}
        if(inputRef.current) {
            inputRef.current.element?.focus()
        };
    }, [state.active])


    useEffect(()=>{


        if(props.history.location.pathname === "/"){
            sessionStorage.clear();
        }

        if (window.location.search !== "") {
            let data:dataToSend = DataFromSmartLink();
            let actives:finales = {
                "movistar":1,
                "telebucaramanga":2,
                "metrotel":3,
                'corporativa':1
            }

            let activo:string = data.tipo_pago ? data.tipo_pago : 'movistar' ;
            let line:string   = data.tipo_servicio ? data.tipo_servicio : 'movil';
            let number:string = '';


            if (data.suscribir) {
                sessionStorage.setItem(
                    'suscription',
                    JSON.stringify({
                        isSuscription: true,
                        number: data.numero,
                        linea: data.linea,
                        checkout: true })
                )

                number = data.numero;
            }

            set({...state,
                isCorporativo: !!sessionStorage.getItem('isCorporativo'),
                active: actives[activo],
                typeLine: line ,
                number
            })
        }

        // focus al input
       if(inputRef.current) {
           inputRef.current.element?.focus()
       }

    },[])

    return (
        <>
            <TabsGroup
                active={state.active}
                set={(e: number) => set({...state, active: e})}
                disabled={!!state.processing}
            />

            <Title active={state.active}/>

            <TypeLineBtns
                open={state.active === 1}
                active={state.typeLine}
                Set={(e) => set({...state, typeLine: e})}
                disabled={!!state.processing}
                corporativo={state.isCorporativo}
            />

            <Collapse className={"up-index"} isOpened={state.typeLine === "fija" && state.active === 1}>
                <div className={"pb-3 up-index"}>
                    <Campo
                        value={state.indicative}
                        onChange={(e: any) => set({...state, indicative: e.target.value})}
                        disabled={!!state.processing}
                        type={"select"}
                        icon={"ubicacion"}
                        theRef={selectRef}
                    />
                </div>
            </Collapse>

            <div className={"pb-3 wc"}>
                <Campo
                    value={state.number}
                    onChange={(e: any) => set({...state, number: e.target.value})}
                    disabled={!!state.processing}
                    type={"mask"}
                    icon={state.typeLine === 'fija' ? 'fijo' : "movil"}
                    theRef={inputRef}
                    placeholder={"Ingresa el número de línea o de pago"}
                />
            </div>

            <GroupBtns
                loading={state.processing}
                action={(ty: string) => submit(ty)}
                number={state.number.length > 6}
            />
        </>
    )
}

export default withRouter(React.memo(ConultForm));