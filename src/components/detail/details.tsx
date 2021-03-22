import React, {useEffect, useState} from 'react';
import Flex from "../ui/flex";
// @ts-ignore
import Total from "../../img/total.svg";
import Btn from "../ui/btn";
import {colors} from "../ui";
import Info from "./info/info";
import FacturaAndDetail from "./FacturaAndDetail/FacturaAndDetail";
import {FacturasQuemadas} from "./facturasQuemadas";
import EpaycoFooter from "../epaycofooter/epaycoFooter";
import {withRouter} from "react-router-dom";
import MediosPagosIcons from "../ui/mediosPagos/MediosPagos";
import {DP, statedetail} from "./types";
import {CreateInvoiceGroup} from "./Helper/Helper";

interface Props {
    history?:any;
}

const Details:React.FC<Props> = (props) => {

    const [detail,set]=useState<statedetail>({
        totalToPay:0,
        facturasGrupos:[],
        processing:false,
        identificacionEmpresa:'',
        facturaId:'',
    })

    let dataPayment:string  = sessionStorage.getItem('dataPayment') || '';

    useEffect(()=>{
        if(dataPayment){
            let dta:DP[] = JSON.parse(dataPayment);
            set({
                ...detail,
                facturasGrupos:CreateInvoiceGroup(dta),
                identificacionEmpresa:dta[0].identificacionEmpresa,
                facturaId:dta[0].facturaId,
            });
        }
    },[])


    return (
        <Flex className={"wc px-3 px-sm-5"} flex={"1 0 80%"}>
            <div className="col-12 mx-auto col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5">
                <Flex className={"wc pt-3"}>
                    <img src={Total} alt="" className={"mb-3 mb-md-0 me-md-4"}/>
                    <Flex jc={"flex-start"} flex={"0 0 auto"} className={"px-3"}>
                        <p className={"mb-0 wc fz18"}>Número de línea </p>
                        <small>Referencia de pago {detail.identificacionEmpresa}</small>
                    </Flex>
                </Flex>

                <div className={"text-center py-4"}>
                    <p className={"mb-0 fl fz18"}>Información de tu factura</p>
                    <small>Factura No. {detail.facturaId}</small>
                </div>

                {   detail.facturasGrupos.length &&
                    detail.facturasGrupos.map((item,key)=>
                        <FacturaAndDetail
                            key={key}
                            total={item.total}
                            active={item.active}
                            facturas={item.facturas}
                            handleTotal={(amount:number)=> set({...detail,totalToPay: amount}) }
                            showDetail={!!(item.facturas.length)}
                        />
                    )}

                <Flex className="col-12 mx-auto col-md-10 col-lg-8 py-3">
                    <Btn
                        flex={"1 0 100%"}
                        className={"mb-3 fz20"}
                        big
                        onClick={()=> props.history.push('/suscription')}
                        disabled={detail.processing}

                    >
                        <i className={"icon-icon-tiempo"}> </i> Programar
                    </Btn>
                    <Btn
                        flex={"1 0 45%"}
                        big
                        className={"pe-2 fz20"}
                        color={colors.blueDark}
                        type={'line'}
                        onClick={()=> props.history.push('/')}

                    >
                        Cancelar
                    </Btn>
                    <Btn
                        flex={"1 0 45%"}
                        big
                        className={"ps-2 fz20"}
                        onClick={()=> null}
                        color={colors.blueDark}
                        disabled={parseInt(detail.totalToPay.toString()) < 1}

                    >
                        Pagar
                    </Btn>
                </Flex>

                <Info/>

                <MediosPagosIcons/>
                <EpaycoFooter noIcon={true} className={"pb-3 pt-2"}/>

            </div>
        </Flex>
    )
}

export default withRouter(React.memo(Details));