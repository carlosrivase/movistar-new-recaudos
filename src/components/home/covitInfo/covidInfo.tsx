import React from 'react';
import Flex from "../../ui/flex";

type Props = {
    className?:string;
}

const ConvidInfo:React.FC<Props> = (props) => {
    return (
        <Flex className={` wc py-3 px-3 ${props.className}`} flex={"0 0 auto"}>
            <div className={"wc text-center"}>
                <small className={"d-block"}>
                    <strong className={"fb"}>#QuédateEnCasa</strong> para más información de lo que estamos haciendo sobre el <strong className={"fb"}>COVID-19</strong>
                    <a href="" className={"ct ps-2"}>Haz clic aquí</a>
                </small>
            </div>
        </Flex>
    )
}

export default React.memo(ConvidInfo);