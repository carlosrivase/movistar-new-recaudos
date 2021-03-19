import React from 'react';
import Btntab from "../../ui/BtnTab/Btntab";
import Flex from "../../ui/flex";

interface Props {
    active:number,
    set:(e:number)=> void,
    disabled:boolean
}

const TabsGroup:React.FC<Props> = (props) => {
    return (
        <Flex className={"wc py-3"}>
            <Btntab flex={"1 0 auto"}
                    active={props.active === 1} children={"Movistar"}
                    onClick={() => props.set(1)}
                    disabled={props.disabled}
            />
            <Btntab flex={"1 0 auto"}
                    active={props.active === 2} children={"Telebucaramanga"}
                    onClick={() => props.set(2)}
                    disabled={props.disabled}
            />
            <Btntab flex={"1 0 auto"}
                    active={props.active === 3} children={"Metrotel"}
                    onClick={() => props.set(3)}
                    disabled={props.disabled}
            />
        </Flex>
    )
}

export default React.memo(TabsGroup);