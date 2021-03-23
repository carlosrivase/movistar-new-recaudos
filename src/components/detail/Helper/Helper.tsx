import {DP} from "../types";
import React from "react";
import {GroupInvoice, Extras, Invoice} from "../types";
import {UpdateFeeTypes, buildFeetypeData} from "../../checkout/updateFeetypes";


type Extra = {
    legend: string;
    monto: string;
    extra: string;
    id: number
}

type grupoFactura = {
    id: number;
    total: number;
    active: boolean;
    totalToPay: number;
    facturas: Extra[];
}

//////////////////////////////////////////
// ARMA EL OBJETO DE DETALLES
//////////////////////////////////////////

export const CreateArrayInvoices = (data: Extras) => {

    let labels = [
        {
            name: "Servicio móvil",
            value: 'extra6'
        },
        {
            name: "Equipo a cuotas",
            value: 'extra7'
        },
        {
            name: "Contenidos Adicionales",
            value: 'extra8'
        },
    ]

    let invoices: Invoice[] = [];

    invoices = labels.map((item, id) => ({
        legend: item.name,
        monto: data[item.value as keyof Extras],
        extra: item.value,
        id
    }))

    if (invoices.some((item: Invoice) => item.monto)) {
        return invoices;
    }
    return [];
}

//////////////////////////////////////////
// CREA EL GRUPO DE FACTURAS
//////////////////////////////////////////

export const CreateInvoiceGroup = (data: DP[]) => {
    let Groups: GroupInvoice[] = data.map((item, key) => (
        {
            id: key,
            total: item.total,
            active: true,
            totalToPay: item.total,
            facturas: CreateArrayInvoices({
                extra6: item.extra6,
                extra7: item.extra7,
                extra8: item.extra8,
            })
        }
    ));
    return Groups;
}

////////////////////////////////////////////////////////
//  ACTUALIZA LOS MONTOS DE LAS FACTURAS CON EL ONCHANGE
////////////////////////////////////////////////////////

export let updateInvroiceGroup = (
    id: number,
    data: any,
    invoicesCopy: GroupInvoice[],
    action: (obj: any) => void
) => {

    let copy = [...invoicesCopy]
        .map((item: any) => {
            if (item.id === id) {
                item.totalToPay = data.total;
                item.extra6 = data.extra6;
                item.extra7 = data.extra7;
                item.extra8 = data.extra8;
            }
            return item
        });

    action({facturasGrupos: copy})
}


////////////////////////////////////////////////////////
//  UPDATE FEE types
////////////////////////////////////////////////////////

export let UpdateFT = async (data: any) => {
    let FT = buildFeetypeData(data);
    let obj = {result:false}
    try {
        await UpdateFeeTypes(FT)
            .then((dta: any) => {
                obj.result =dta.result;
            })
            .catch(e => {
              console.log(e);
            })
    } catch (e) {
        console.log(e);
    }
    return obj;
}