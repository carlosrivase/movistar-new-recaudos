import axios from "axios";
import {tkn,requestFactura} from "../Types";
import config from "./../../../config/config";



//////////////////////////////////
// GET FACTURAS ::::::::::::::::::
//////////////////////////////////

export const RequestInvoiceMovistar = async (data:requestFactura)=> {
    let obj:{
        result:boolean,
        [key:string]:any
    }= {result:false };

    try {
        await axios({
            method:'post',
            url:`https://secure2.epayco.io/recaudo/api/recaudo/proyecto/api/consulta/facturas`,
            data:{
                "consulta": [
                    {
                        "parametro": "paymentRef",
                        "value": data.paymentRef
                    },
                    {
                        "parametro": "invoiceType",
                        "value": data.invoiceType
                    },
                    {
                        "parametro": "isRefNumber",
                        "value": data.isRefNumber
                    },
                    {
                        "parametro": "comerce",
                        "value": ""
                    }
                ],
                "dominio": "https://reviewkarina.epayco.io/recaudo/moviprueba3"
            },
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${data.token}`
            }
        })
            .then((resp:any) =>{
                if(resp.status === 200){
                    obj.facturas = resp.data.data.facturas;
                    obj.total    = resp.data.data.total
                    obj.result   = true
                    obj.message  = 'Facturas consultadas con éxito'
                }
                else{
                    obj.result   = false
                    obj.message  = 'Error consultando facturas'
                }
            })
            .catch((e:any)=>{
                console.log(e)
                obj.result   = false
                obj.message  = 'Error intentando consultar facturas'
            })
    }
    catch (e) {
        obj.result   = false
        obj.message  = 'Error intentando consultar facturas'
    }

    return obj;

}


//////////////////////////////////
// GET TOKEN :::::::::::::::::::::
//////////////////////////////////

export const GetToken = async ()=> {

    let obj:tkn = {
        result:false,
        token:'',
        message:'',
    };

    try {
        await axios({
            url:"https://secure2.epayco.io/recaudo/api/recaudo/get/token",
            method:"post",
            data:{dominio:'https://reviewkarina.epayco.io'}
        })
            .then((data:any)=>{
                if(data.status === 200){
                    obj.result = true;
                    obj.token = data.data.data.token ;
                    obj.message = "Token generado con éxito";
                }else{
                    obj.result = false;
                    obj.token = '';
                    obj.message = "Token no generado.";
                }
            })
            .catch((e:any)=>{
                console.log(e, ":: Error obteniendo token ::")
                obj.result = false;
                obj.token = '';
                obj.message = "Error generando token.";
            })
    }

    catch (e) {
        console.log(e, ":: Error intentando obtener token ::")
        obj.result = false;
        obj.token = '';
        obj.message = "Error intentando generar token.";
    }

    return obj;
}


//////////////////////////////////
// REQUEST INVOICES ::::::::::::::
//////////////////////////////////

export const GET_FACTURAS = async (data:requestFactura) =>{
    let obj:{
        [key:string]:any,
        result:boolean
    } = {result:false};

    let token = await GetToken();
    if(token.result){
        data.token = token.token;
        let Facturas = await RequestInvoiceMovistar(data)
        if(Facturas.result){
            obj = Facturas;
        }else{
            obj.message = 'Error obteniendo facturas ::'
            obj.result = false;
        }
    }else{
        obj.message = 'Error obteniendo token ::'
        obj.result = false;
    }

    return obj;
}
