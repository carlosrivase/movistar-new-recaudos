import axios from "axios";
import config from "../../config/config";


interface typesFeetypes {
    "sumaServiceAmount"      : string;
    "sumaDeviceInstAmtQIInfo": string;
    "sumaAditionalContents"  : string;
    "totalAmount"            : string;
    "control_num"            : string;
    "total_factura"          : string;
}

export const buildFeetypeData = (data:any)=> {
    return ({
        sumaServiceAmount       : data.extra6,
        sumaDeviceInstAmtQIInfo : data.extra7,
        sumaAditionalContents   : data.extra8,
        totalAmount             : data.totalToPay,
        control_num             : data.number,
        total_factura           : data.total
    })
}


export const UpdateFeeTypes = async (feetypes:typesFeetypes) =>{
    let obj = {result:false};

    try{
        await axios({
            method:'post',
            url:`${config.amonServices}/payment/update/feetype`,
            data:feetypes
        })
            .then((resp:any)=>{
                if(resp.data.success){
                    obj.result = true;
                }
            })
            .catch(e=>{
                console.log('::::: Error al actualizar feetypes ::::', e)
            })
    }
    catch (e) {
        console.log('::::: Error al intentar actualizar feetypes ::::', e)
    }

    return obj;
}