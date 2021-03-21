import {DP} from "../types";
import React from "react";
import {GroupInvoice, Extras,Invoice} from "../types";


export const CreateArrayInvoices = (data:Extras)=> {

     let labels = [
         {
             name:"Servicio móvil",
             value:'extra6'
         },
         {
             name:"Equipo a cuotas",
             value:'extra7'
         },
         {
             name:"Contenidos Adicionales",
             value:'extra8'
         },
     ]

     let invoices:Invoice[] = [];



    invoices = labels.map((item,id) => ({
        legend: item.name,
        monto : data[item.value as keyof Extras],
        id
    }))

    if(invoices.some((item:Invoice )=> item.monto)){
        return invoices;
    }

    return [];

}

export const CreateInvoiceGroup = (data:DP[])=> {


    let Groups:GroupInvoice[] = data.map((item)=>(
        {
            total:item.total,
            active:true,
            facturas:CreateArrayInvoices({
                extra6: item.extra6,
                extra7: item.extra7,
                extra8: item.extra8,
            })
        }
    )) ;
    return Groups;
}