import React, {useState} from 'react';
import Flex from "../ui/flex";
import EpaycoFooter from "../epaycofooter/epaycoFooter";
import Btn from "../ui/btn";
import {colors} from "../ui";
import DataItem from "./DataItem/DataItem";
import {withRouter} from "react-router-dom";
import SendEmail from "./sendEmail/sendEmail";

type Props ={
    history:any;
}

const Resume: React.FC<Props> = (props) => {

    type Data = {
        proccesing:boolean;
    }

    const [state,set] = useState<Data>({
        proccesing:false
    })

    return (
        <Flex className={"wc p-3"} flex={"1 0 80%"}>
            <div className={"col-12 text-center py-3"}>
                <p className={"mb-0 fz26 fl ct"}>Transaccion Aceptada <i className={"icon-icon-check"}></i></p>
            </div>
            <Flex className={"col-12 col-md-10 col-lg-8 "} alg={"flex-start"}>

                <Flex className={"col-12 col-md-6"}>
                    <DataItem
                        label={"Empresa"}
                        value={"COLOMBIA TELECOMUNICACIONES S.A. E.SP"}
                        bold
                    />
                    <DataItem
                        label={"NIT"}
                        value={"830.122.566-1"}
                    />
                    <DataItem
                        label={"Valor"}
                        value={"$217.149"}
                        bold
                    />
                    <DataItem
                        label={"Fecha y Hora"}
                        value={"2021-02-06 13:58:19"}
                    />
                    <DataItem
                        label={"Número de recibo"}
                        value={"1341235-345355678"}
                    />
                    <DataItem
                        label={"Descripción"}
                        value={"Pago servicio móvil"}
                    />
                    <DataItem
                        label={"Estado transacción"}
                        value={"ACEPTADA"}
                        bold
                    />
                </Flex>

                <Flex className={"col-12 col-md-6"}>

                    <DataItem label={"Referencia"} value={"69sfw9r7498ds46evxc"}/>
                    <DataItem label={"IP origen"} value={"190.33.345.198"}/>
                    <DataItem label={"Autorización CUS"} value={"09870183"}/>

                    <SendEmail
                        setLoading={(val)=> set({...state,proccesing:val})}
                    />

                    <Btn
                        type={"line"}
                        color={colors.blue}
                        flex={"1 0 100%"}
                        className={"mb-3 mb-md-4 fz18"}
                        onClick={() => null}
                        big
                        disabled={state.proccesing}
                    >
                        Imprimir o guardar
                    </Btn>
                    <Btn
                        color={colors.blue}
                        onClick={() => props.history.push('/')}
                        flex={"1 0 100%"}
                        big
                        className={"fz18"}
                        disabled={state.proccesing}
                    >
                        Finalizar transacción
                    </Btn>
                </Flex>
            </Flex>
            <EpaycoFooter noIcon={true} className={"col-12 pt-4"}/>
        </Flex>
    )
}

export default withRouter(React.memo(Resume));