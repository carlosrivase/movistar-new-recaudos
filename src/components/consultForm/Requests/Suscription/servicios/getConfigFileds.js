import axios from "axios";
import config from "./../../../../config/config";

export const GetConfigFields = async (token,dominio,public_key)=> {
    let obj = {};

    try{
        await axios({
                method:"post",
                url:`${config.REACT_APP_AMBIENTE}/api/recaudo/proyecto/cliente/opcion/consulta`,
                data:{dominio,public_key},
                header:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : `Bearer ${token}`
                }})
            .then(result => {
                if(result.status === 200){
                    let data = result.data.data;
                    let campo   = data.busqueda[0].campo;
                    let entidad = data.busqueda[0].entidad;
                    let tabla   = data.busqueda[0].tabla;
                    obj.data ={
                        campo,
                        entidad,
                        tabla,
                    };
                    obj.status = true;
                    return obj;
                }else{
                    obj.status = false;
                    obj.message = "Error: no se enontraron campos configurados";
                    return obj;
                }
            })
            .catch(e=>{
                obj.status = false;
                obg.error= e;
                obj.message = "Error en la consulta los campos configurados."
                return obj;
            })
    }
    catch (e) {
        obj.status = false;
        obg.error= e;
        obj.message = "Error al intentar consultar los campos configurados."
        return obj;
    }

    return obj;
};
