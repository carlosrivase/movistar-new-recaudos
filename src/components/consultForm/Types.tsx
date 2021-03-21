export type finales = {
    [key:string]:any
};

export type dataToSend = {
    ref_pago      :  string;
    tipo_servicio : string;
    is_ref_number :  string;
    canal         :  string;
    tipo_pago  :  string;
    novum      :  string;
    urlcallback:  string;
    indicativo :  string;
    extra10    :  string;

    //  DATA SUSCRIPTION ::::::
    suscribir :  string;
    linea     :  string;
    numero    :  string;
    checkout  :  string;
};


type parameter = {
    porametro:string,
    value:string
}

export type requestFacturaObj = {
    "consulta":parameter[],
    "dominio": string
}

export type requestFactura = {
    paymentRef:string;
    invoiceType:string;
    isRefNumber:string;
    comerce:string;
    [key:string]:any;
}

export type tkn = {
    result:boolean,
    token:string,
    message:string,
}