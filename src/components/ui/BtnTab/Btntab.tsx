import React from 'react';
import {Container} from "./styles";

interface Props {
    active:boolean;
    children:React.ReactNode;
    onClick?:()=> void;
    disabled?:boolean,
    big?:boolean;
    noArrow?:boolean;
    color?:string;
    flex?:string;
    borde?:boolean;
    className?:string;
}

const Btntab:React.FC<Props> = ({
        noArrow=false,
        active=false,
        onClick,
        disabled=false,
        children,
        big=false,
        flex="0 0 auto",
        color,
        borde,
        className
}) => {

    let size = big ? '46' : '36'

    return (
        <Container className={className} borde={borde} flex={flex} active={active} size={size} disabled={disabled} color={color}>
            <button onClick={onClick} className={"px-2"}>
                {children}
            </button>
            { (active && !noArrow ) && <div className="arrow"> </div> }
        </Container>
    )
}

export default React.memo(Btntab);