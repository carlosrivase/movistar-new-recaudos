import React from 'react';

interface Props {
    active:any;
}

const Title:React.FC<Props> = (props) => {
    let Values:any = {
        1:"Movistar",
        2:"Telebucaramanga",
        3:"Metrotel",
    }
    return (
        <div className={"text-center pt-3 pb-2"} style={{fontSize:"22px"}}>
            <span className={"fl"}>Pagar mi factura</span> <br/>
            <span className={"fb"} >{ Values[props.active] }</span>
        </div>
    )
}

export default React.memo(Title);