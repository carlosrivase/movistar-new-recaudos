

export type Extras = {
    extra6:string;
    extra7:string;
    extra8:string;
}

export type Invoice ={
    legend:string,
    monto:string,
    id:number
}

export type GroupInvoice ={
    total:number;
    active:boolean;
    facturas:Invoice[];
}



export type DP ={
    descripcion: string;
    documento:string;
    extra1:string;
    extra2:string;
    extra3:string;
    extra4:string;
    extra5: boolean;
    extra6:string;
    extra7:string;
    extra8:string;
    extra9:string;
    extra10: boolean;
    extra13: boolean;
    facturaId:string;
    id:string;
    identificacionEmpresa:string;
    moneda: string;
    total:number;
}

export type statedetail = {
    facturasGrupos:GroupInvoice[];
    processing:boolean;
    totalToPay:number;
    identificacionEmpresa:string;
    facturaId:string;
}