import {dataToSend} from "../Types";

export let SetDataToSend = (paramsUrl:{
    tipo_servicio?:string;
    ref_pago:string;
    is_ref_number:string;
    canal:string;
    novum:string;
    urlcallback:string;
    extra10:string;
    indicativo:string;
    suscribir?:string;
    linea?:string;
    numero?:string;
    checkout?:string;
}) => {
    let dataToSet;
    if (paramsUrl.tipo_servicio === 'movil') {
        dataToSet = {
            nMovil: paramsUrl.ref_pago,
            tipo_servicio: paramsUrl.tipo_servicio,
            is_ref_number: paramsUrl.is_ref_number,
            canal: paramsUrl.canal,
            novum: paramsUrl.novum,
            urlcallback: paramsUrl.urlcallback,
            extra10: paramsUrl.extra10
        }
    }
    if (paramsUrl.tipo_servicio === 'corporativo') {
        dataToSet = {
            nCorporativo: paramsUrl.ref_pago,
            tipo_servicio: paramsUrl.tipo_servicio,
            is_ref_number: paramsUrl.is_ref_number,
            canal: paramsUrl.canal,
            novum: paramsUrl.novum,
            urlcallback: paramsUrl.urlcallback,
            extra10: paramsUrl.extra10
        }
    }
    if (paramsUrl.tipo_servicio === 'fijo') {
        if (paramsUrl.is_ref_number === 'false') {
            let nPrefijo = '';
            let nFijo = '';
            if (paramsUrl.ref_pago) {
                nPrefijo = paramsUrl.indicativo;
                nFijo = paramsUrl.ref_pago;
            }

            dataToSet = {
                nFijo: nFijo,
                nPrefijo: nPrefijo,
                tipo_servicio: paramsUrl.tipo_servicio,
                is_ref_number: paramsUrl.is_ref_number,
                canal: paramsUrl.canal,
                novum: paramsUrl.novum,
                urlcallback: paramsUrl.urlcallback,
                extra10: paramsUrl.extra10
            }
        } else {
            dataToSet = {
                nFactura: paramsUrl.ref_pago,
                tipo_servicio: paramsUrl.tipo_servicio,
                is_ref_number: paramsUrl.is_ref_number,
                canal: paramsUrl.canal,
                extra10: paramsUrl.extra10
            }
        }

    }
    return dataToSet
}

////////////////////////////
////////////////////////////


export let getVariableParam = (parametro:string) => {
    let results = new RegExp('[\?&]' + parametro + '=([^&#]*)').exec(window.location.href);
    if (!results) {
        return '';
    } else {

        return decodeURI(results[1])  || '';
    }
};


////////////////////////////
////////////////////////////


export const DataFromSmartLink = () => {

     let dta:dataToSend = {
        ref_pago      : getVariableParam("ref_pago"),
        tipo_servicio : getVariableParam("tipo_servicio"),
        is_ref_number : getVariableParam("is_ref_number"),
        canal         : getVariableParam("canal"),
        tipo_pago  : getVariableParam("tipo_pago"),
        novum      : getVariableParam("novum"),
        urlcallback: getVariableParam("urlcallback"),
        indicativo : getVariableParam("indicativo"),
        extra10    : getVariableParam("extra10"),

        //  DATA SUSCRIPTION ::::::
        suscribir : getVariableParam("suscribir"),
        linea     : getVariableParam("linea"),
        numero    : getVariableParam("numero"),
        checkout  : getVariableParam("checkout")
    };

     console.log("::::::",dta.tipo_pago,":::::")

    return dta;
}