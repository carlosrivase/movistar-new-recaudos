import React from "react";
import config from "../../config/config";


export type facuraresp = {
    descripcion:string;
    documento:string;
    extra1: string;
    extra2: string;
    extra3: string;
    extra4: string;
    extra5: boolean;
    extra6: number;
    extra7: number;
    extra8: number;
    extra9: string;
    extra10: boolean;
    extra11: boolean;
    facturaId:string;
    id: string;
    identificacionEmpresa:string;
    moneda: string;
    total: number;
}

let fdasf = {
    showServices: true,
    data: [],
    amounToPay: "",
    payment_ref: "",
    total_balance: "",
    is_greta: false,
    canal: "",
    extra10: "",
    is_ref_number: "",
    number: "",
    account_number: "",
    num_document: "",
    num_control: "",
    invoice_type: "",
    public_key: "",
    fecha_expiracion: "",
    control_num: "",
    empresa: '',
    metrotelRefNumber: false,
    canSusbcribe: false
}

export const checkoutRender = () =>{
    const script:any = document.createElement('script');
    script.src = config.EPAYCO_APP_CHECKOUT;
    document.body.appendChild(script);
};

declare global {
    interface Window {
        ePayco:any;
    }

    interface Document {
        onHistoryGo:any;
    }
}




const getDataFetType = (key:string, value:string) => {
    switch (key) {
        case '1':
            return `1 : ${value}`;
        case '2':
            return `2 : ${value}`;
        case '4':
            return `4 : ${value}`;
    }
}

const validaFeetype = (name:string, digito:number, monto:string) => {

    if (digito === 0 || digito === 1) {
        return (parseInt(monto) !== 0);
    } else {

        if (digito === 2 && name === "sumaServiceAmount") {
            return true;
        } else if (digito === 3 && name === "sumaDeviceInstAmtQIInfo") {
            return true;
        } else if (digito === 5 && name === " sumaAditionalContents") {
            return true;
        } else {
            return false
        }
    }
}

const BuildDataFeetype = (
    feetype_name: string,
    id_feetype: string,
    checked: boolean,
    deuda: string,
    value: string,
    name: string
) => {
    return ({
        feetype_name,
        id_feetype,
        checked,
        deuda,
        value,
        name
    })
}



interface DataCheckout {
    //Parametros compra (obligatorio)
    name       : string;
    description: string;
    invoice    : string;
    currency   : string;
    amount     : string;
    tax_base   : string;
    tax        : string;
    country    : string;
    lang       : string;
    external   : string;

    //Atributos opcionales
    extra1       : string;
    extra2       : string;
    extra3       : string;
    extra5       : string;
    extra6       : string;
    extra7       : string;
    extra8       : string;
    confirmation : string;
    response     : string;
}

const PrepareDataCheckout = (data:any)=>{
    return ({
        name       : `Pago servicio ${data.extra1} `,
        description: `Pago servicio ${data.extra1} ` ,
        invoice    : data.identificacionEmpresa,
        currency   : 'COP',
        amount     : data.total,
        tax_base   : '0',
        tax        : '0',
        country    : 'co',
        lang       : 'es',
        external   : 'false',

        //Atributos opcionales
        extra1       :data.extra3,
        extra2       :data.extra1,
        extra3       :data.facturaId,
        extra5       :data.extra9,
        extra6       :data.extra4,
        extra7       :data.identificacionEmpresa,
        extra8       :data.facturaId,
        confirmation :`${config.amonServices}/payment/on/confirmation`,
        response     :'/resume',
    })
}



export const OpenCheckout = ( form:DataCheckout, callB:()=> void ) => {
    let data:DataCheckout = PrepareDataCheckout(form);

    let ePayco = window.ePayco; // ok

    let handler = ePayco.checkout.configure({
        key: config.movistar_key,
        test: config.checkOutPruebas, //Modo produccion,
    });

    handler.open(data);
    handler.onCloseModal = () => {
        callB();
    };
    document.onHistoryGo = function () {
        return false;
    }
}

