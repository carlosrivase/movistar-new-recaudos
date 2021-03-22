import config from "../../../../config/config";
import ServiceApi from "../../../requests";
import Cookies from "universal-cookie";
const cookies = new Cookies();


export const GetFacturas = async (number , token, dominio,saveCopy,campo)=>{

    let dataRequest = {
        referencia:number,
        band:"r",
        public_key: config.REACT_APP_MOVISTAR_RECAUDO_PUBLIC_KEY,
        option : campo,
        dominio: dominio
    };

    let obj= {};

    await  ServiceApi(
        dataRequest,
        `${config.REACT_APP_AMBIENTE}/api/recaudo/proyecto/consultar/facturas`,
        "POST",
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    )
        .then(async response =>{
            let data = response.data;
            console.log(data)

            // SI NO TIENE FACTURAS
            if (response.data.facturas.length === 0) {
                obj.facturas = false;
                obj.status = true;
                return '';
            }
            else {

                // GUARDAR LA DATA EN SESSION STORAGE
                let paramSearch = response.data.parametrosConsultaSuscripcion ? JSON.stringify(response.data.parametrosConsultaSuscripcion) : "Sin información";
                sessionStorage.setItem('paramSearch', paramSearch);

                response.redirect = "recaudo";
                response.isRefNumber = data.is_ref_number;

                let paymentData = {
                    paymentData   : [response.data.facturas[0]],
                    comerce       : true,
                    invoice_type  : response.invoice_type,
                    total_balance : response.data.facturas[0].total,
                    public_key    : config.REACT_APP_MOVISTAR_RECAUDO_PUBLIC_KEY,
                    is_ref_number : false,
                    suscriptionProyectoId : response.data.parametrosConsultaSuscripcion ? response.data.parametrosConsultaSuscripcion.suscripcionProyectoId : "",
                    isSuscrito            : response.data.isSuscrito,
                    accion                : response.data.accion,
                    extra3                : response.data.facturas[0].facturaId
                };

                if(saveCopy){
                    await sessionStorage.setItem("copiaPD",JSON.stringify(paymentData))
                }else{
                    await sessionStorage.setItem('paymentData', JSON.stringify(paymentData));
                }
                obj.facturas = true;
                obj.status = true;
                obj.message = "Se obtuvo la información y se guardo en session storage.";
            }
        })
        .catch(e=>{
            obj.status = false;
            obj.message = e
        });

    return obj;
};
