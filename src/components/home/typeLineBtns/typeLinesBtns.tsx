import React from 'react';
import Flex from "../../ui/flex";
import Btntab from "../../ui/BtnTab/Btntab";
import {colors} from "../../ui";
import {Collapse} from "react-collapse";


interface Props {
    Set:(e:string)=> void;
    active:string;
    open:boolean;
    disabled:boolean;
    corporativo:boolean;
}

const TypeLineBtns:React.FC<Props> = (props) => {
    return (
       <Collapse isOpened={props.open}>
           <Flex className={"wc py-2 "}>
               <Btntab
                   color={colors.blueDark}
                   className={"px-2"}
                   borde
                   noArrow
                   flex={"0 0 90px"}
                   children={"Móvil"}
                   active={props.active === "movil"}
                   onClick={() => props.Set('movil')}
                   disabled={props.disabled}
               />
               <Btntab
                   color={colors.blueDark}
                   className={"px-2"}
                   borde
                   noArrow
                   flex={"0 0 90px"}
                   children={"Fija"}
                   active={props.active === "fija"}
                   onClick={() => props.Set('fija')}
                   disabled={props.disabled}
               />

               {props.corporativo &&
               <Btntab
                   color={colors.blueDark}
                   className={"px-2"}
                   borde
                   noArrow
                   flex={"0 0 90px"}
                   children={"Corporativa"}
                   active={props.active === "corporativa"}
                   onClick={() => props.Set('corporativa')}
                   disabled={props.disabled}
               />}
           </Flex>
       </Collapse>
    )
}

export default React.memo(TypeLineBtns);