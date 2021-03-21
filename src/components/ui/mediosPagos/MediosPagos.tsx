import React from 'react';
import MediosPagos from "../../../img/mediosPagos.png";

const MediosPagosIcons:React.FC = (props) => {
    return (
        <div className={"wc text-center py-2"}>
            <img src={MediosPagos} alt="" height={"25px"} width={"auto"} className={"mx-auto"}/>
        </div>
    )
}

export default React.memo(MediosPagosIcons);