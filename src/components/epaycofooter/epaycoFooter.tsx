import React from 'react';
import logo_ePayco from "../../img/logo_ePayco.svg";

interface Props {
    noIcon?:boolean;
    className?:string;
}

const EpaycoFooter:React.FC<Props> = (props) => {
    return (
        <div className={`text-center ${props.className}`}>
            <p className={"mb-0"}>
                {!props.noIcon && <i className={"icon-icon-seguridad"}></i>}
                Pagos procesados por
                <img src={logo_ePayco} alt="" height={"25px"} width={'auto'} className={"ps-2"}/>
            </p>
        </div>
    )
}

export default React.memo(EpaycoFooter);