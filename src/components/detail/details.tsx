import React, {useState} from 'react';
import Flex from "../ui/flex";
import Total from "./../../img/total.svg"
import Btn from "../ui/btn";
import {colors} from "../ui";
import Info from "./info/info";
import FacturaAndDetail from "./FacturaAndDetail/FacturaAndDetail";
import {FacturasQuemadas} from "./facturasQuemadas";
import EpaycoFooter from "../epaycofooter/epaycoFooter";
import {withRouter} from "react-router-dom";
import MediosPagosIcons from "../ui/mediosPagos/MediosPagos";

interface Props {
    history?:any;
}

const Details:React.FC<Props> = (props) => {

    const [detail,set]=useState({
        totalToPay:1485555,
        facturasGrupos:[],
        processing:false
    })


    return (
        <Flex className={"wc px-3 px-sm-5"} flex={"1 0 80%"}>
            <div className="col-12 mx-auto col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <Flex className={"wc pt-3"}>
                    <img src={Total} alt="" className={"mb-3 mb-md-0 me-md-4"}/>
                    <Flex jc={"flex-start"} flex={"0 0 auto" }>
                        <p className={"mb-0 wc fz18"}>Número de línea </p>
                        <small>Referencia de pago </small>
                    </Flex>
                </Flex>

                <div className={"text-center py-4"}>
                    <p className={"mb-0 fl fz18"}>Información de tu factura</p>
                    <small>Factura No. 596810665453</small>
                </div>

                <FacturaAndDetail
                    total={detail.totalToPay}
                    active={false}
                    facturas={FacturasQuemadas}
                    handleTotal={(amount:number)=> set({...detail,totalToPay: amount}) }
                    showDetail={detail.facturasGrupos.length < 1}
                />

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