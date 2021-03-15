import React from 'react';
import styled from "@emotion/styled";
import {colors} from "../../ui";

const Cointainer = styled.div`
    border:1px solid ${colors.disabled};
    border-radius:6px;
`


const Info:React.FC = (props) => {
    return (
        <Cointainer className={"p-2 px-md-3 col-12 my-3"}>
            Envia <span className={"fb"}>FACTURA</span> como mensaje de texto al 85202 desde tu línea móvil <span className={"fb"}>Movistar</span> y conoce el <span className={"fb"}>detalle de tu pago.</span>
        </Cointainer>
    )
}

export default React.memo(Info);