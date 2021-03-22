import config from "../../../../config/config";
import {GetFacturas} from "./getFacturas";
import {GetToken} from "./getToken";
import {GetConfigFields} from "./getConfigFileds";


// CONSULTA EL TOKEN Y LAS FACTURAS EN UNO SOLO
export const ConsultaParaSuscribir = async (number,saveData) => {

    let obj = {};
    let TYPE ='fs';

    if(number.length > 8 && number.length < 11 ){
        number = number + "1";
        TYPE = "fs";
        sessionStorage.setItem('tipoProyecto',"GTA")
    }
    if(number.length === 11 && number[10] === "1" ){
        TYPE = "fs";
        sessionStorage.setItem('tipoProyecto',"GTA")
    }
    else if(number.length === 8){
        TYPE = "scl";

        sessionStorage.setItem('tipoProyecto',"SCL")
    }

    else if(number.length === 11 && number[10] !== "1"){
        obj.status = false;
        obj.message = "EL número ingresado no pose facturas para programar.";
        return obj;
    }

    let dominioFacturas = {
        scl: config.REACT_APP_MOVISTAR_DOMINIO_FACTURAS_SCL,
        fs: config.REACT_APP_MOVISTAR_DOMINIO_FACTURAS
    };

    try{

        // OBTEN EL TOKEN PARA PEDIR LAS FACTURAS
        let token = await GetToken(
            config.REACT_APP_MOVISTAR_DOMINIO,
            config.REACT_APP_GET_TOKEN
        );

        if(token.status){

            // CONSULTA LOS CAMPOS CONFIGURADOS
            let camposConfigurados = await GetConfigFields(
                token.token,
                dominioFacturas[TYPE],
                config.REACT_APP_MOVISTAR_RECAUDO_PUBLIC_KEY
            );


            if(camposConfigurados.status){
                // CONSULTA LAS FACTURAS CON EL TOKEN
                    let data = await GetFacturas(
                        number,
                        token.token,
                        dominioFacturas[TYPE],
                        saveData,camposConfigurados.data.entidad
                    );
                    if(data.status){
                        if(data.facturas){
                            obj.status  = true;
                            obj.message = "Consulta exitosa.";
                        }else{
                            obj.status = false;
                            obj.message = "No tiene facturas para suscribir.";
                        }
                    }
                    else{
                        obj.status = false;
                        obj.message = "No se pudo obetener información de facturas.";
                    }
            }
            else{
                obj.status = false;
                obj.message = camposConfigurados.message;
            }
        }
        else{
            obj.status = false;
            obj.message = "No se pudo obtener el token.";
        }
    }
    catch (e) {
        obj.status = false;
        obj.message = e ;
    }
    return obj;
};
