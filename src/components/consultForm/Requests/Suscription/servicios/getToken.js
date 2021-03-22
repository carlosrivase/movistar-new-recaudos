import axios from "axios";

export const GetToken = async (dominio, url) =>{
    let obj = {};
    await axios({
        url:url,
        data:{dominio:dominio},
        method:"post"
    })
        .then( result =>{
            if(result.status === 200){
                obj.status = true;
                obj.token = result.data.data.token;
            }
            else{
                obj.status = false;
                obj.message = "No se pudo obtener el token.";
            }
        })
        .catch(e=>{
            obj.status = false;
            obj.message = e;
        });
    return obj;
};

