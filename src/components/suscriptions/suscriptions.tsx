import React, {useEffect, useState} from 'react';
import Flex from "../ui/flex";
import Btn from "../ui/btn";
import {colors} from "../ui";
import Cleave from "cleave.js/react";
import {withRouter} from "react-router-dom";
import EpaycoFooter from "../epaycofooter/epaycoFooter";
import MediosPagosIcons from "../ui/mediosPagos/MediosPagos";

interface Props {
    history:any
}


const Suscription:React.FC <Props> = (props) => {

    let toHome:boolean = !!(sessionStorage.getItem('suscription'));

    type State = {
        ref:number|string;
        date:string;
        amount:number|string;
        processing:boolean;
    }

    let [data,set] = useState<State>({
        ref:'Sin información',
        date:"Sin información",
        amount:0,
        processing:false
    });

    useEffect(()=>{

    },[])


    return (
        <Flex className={"wc"} flex={"1 0 80%"}>
           <div className={"col-12 col-sm-10 mx-auto col-md-6 col-lg-5 col-xl-4"}>
               <p className={"fz22 text-center mb-3"}>
                   <span className={"fb"}>Información</span>
                   <br/> de tu cuenta
               </p>

               <Flex className={"px-sm-3 py-2"} jc={"space-between"}>
                   <span className={"fb"}>Número de referencia</span>
                   <span>{data.ref}</span>
               </Flex>
               <Flex className={"px-sm-3 py-2"} jc={"space-between"}>
                   <span className={"fb"}>Fecha de vencimiento</span>
                   <span>{data.date}</span>
               </Flex>
               <Flex className={"px-sm-3 py-2"} jc={"space-between"}>
                   <span className={"fb"}>Valor a pagar</span>
                   <span>{data.amount}</span>
               </Flex>

               <Flex className={"pt-3 mb-4 pb-4"}>
                   <Btn
                       onClick={()=> {
                           if(toHome) return props.history.push('/');
                           props.history.push('/detail')
                       }}
                       className={"col-6 col-md-5 fz18"}
                       type={"line"}
                       big
                       disabled={data.processing}
                   >Regresar
                   </Btn>
                   <Btn
                       onClick={()=>{
                           set({...data,processing:true})
                       }}
                       className={"col-6 col-md-7 ps-3 fz18"}
                       loading={data.processing}
                       big
                       color={colors.blueDark}>Programe sus pagos
                   </Btn>
               </Flex>
               <MediosPagosIcons/>
               <EpaycoFooter noIcon={true} className={"py-3"}/>
           </div>
        </Flex>
    )
}

export default withRouter(React.memo(Suscription));