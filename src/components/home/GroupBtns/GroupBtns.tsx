import React from 'react';
import Flex from "../../ui/flex";
import Btn from "../../ui/btn";
import {colors} from "../../ui";


interface Props {
    action:(t:string)=> void;
    loading?:string;
    number?:boolean,
}

const GroupBtns:React.FC<Props> = (props) => {
    return (
        <Flex className={"wc py-3"}>
            <Btn
                className={"mb-4           col-12"}
                color={colors.blue}
                big
                loading={props.loading === "suscription"}
                disabled={!props.number || (props.loading !== '' && props.loading !== 'suscription') }
                onClick={()=> props.action('suscription')}
            >
                <i className={'icon-icon-tiempo'}> </i> Programar mis pagos
            </Btn>
            <Btn
                className={"col-6 pe-2"}
                type={"line"}
                big
                loading={props.loading === "consult"}
                disabled={!props.number || (props.loading !== '' && props.loading !== 'consult')}
                onClick={()=> props.action('consult')}
                color={colors.blueDark}
            >
                Consultar
            </Btn>
            <Btn
                className={"col-6 ps-2"}
                color={colors.blueDark}
                big
                loading={props.loading === "pay"}
                disabled={!props.number || (props.loading !== '' && props.loading !== 'pay') }
                onClick={()=> props.action('pay')}
            >
                Ir a pagar
            </Btn>
        </Flex>
    )
}

export default React.memo(GroupBtns);