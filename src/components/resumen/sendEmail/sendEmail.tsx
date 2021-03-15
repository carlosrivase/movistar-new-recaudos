import React, {useState} from 'react';
import Field from "../../ui/field/field";
import Btn from "../../ui/btn";
import Flex from "../../ui/flex";
import {colors} from "../../ui";


type Props ={
    setLoading:(e:boolean)=> void;
}

const SendEmail:React.FC<Props> = (props) => {

    type Data = {
        error?:string;
        email:string;
        proccesing:boolean;
    }

    const [state,set] = useState<Data>({
        error:"",
        email:"",
        proccesing:false
    })

    let sendEmail = ()=>{
        props.setLoading(true);
        set({...state,proccesing:true});
    }

    return (
        <Flex className={"wc mb-4"} alg={"flex-start"}>
            <Field
                value={state.email}
                icon={"mail"}
                flex={"1 0 65%"}
                onChange={(e:any) => set({...state,email:e.target.value})}
                disabled={state.proccesing}
                error={state.error}
            />
            <Btn
                color={colors.blue}
                flex={"1 0 100px"}
                className={"ps-2 fz18"}
                onClick={() => sendEmail()}
                big
                loading={state.proccesing}
            >
                Enviar
            </Btn>
            <div className={"wc"}>
                <small>Envia o comparte el comprobante por correo</small>
            </div>
        </Flex>
    )
}

export default React.memo(SendEmail);