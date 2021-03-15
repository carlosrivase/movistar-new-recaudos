import React, {useEffect, useState} from 'react';
import Flex from "../ui/flex";
import Btntab from "../ui/BtnTab/Btntab";
import Title from "./title";
import Campo from "../ui/field/field";
import Banner from "./banner/banner";
import TypeLineBtns from "./typeLineBtns/typeLinesBtns";
import ConvidInfo from "./covitInfo/covidInfo";
import GroupBtns from "./GroupBtns/GroupBtns";
import {Collapse} from "react-collapse";
import EpaycoFooter from "../epaycofooter/epaycoFooter";

const Home: React.FC = (props) => {


    const [state, set] = useState({
        active: 1,
        tipoLinea: 'movil',
        number: '',
        processing: ''
    })

    // let submit = (type: string) => {
    //     set({...state, processing: type});
    // }

    useEffect(() => {
        if (state.active !== 1) {
            set({...state, tipoLinea: 'movil'})
        }
    }, [state.active])

    return (
        <Flex className={"wc"} flex={"1 0 70%"} alg={"stretch"}>
            <Flex
                className={"col-12 p-3 p-lg-0 col-md-6 col-lg-7 col-xl-8"}
                direction={"column"}
                jc={"flex-start"}

            >
                <Flex className={"wc"} flex={"1 0 auto"} direction={"column"}>
                    <div className={"col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-4 mx-auto"}>
                        <Flex className={"wc py-3"}>
                            <Btntab flex={"1 0 auto"} active={state.active === 1} children={"Movistar"}
                                    onClick={() => set({...state, active: 1})}/>
                            <Btntab flex={"1 0 auto"} active={state.active === 2} children={"Telebucaramanga"}
                                    onClick={() => set({...state, active: 2})}/>
                            <Btntab flex={"1 0 auto"} active={state.active === 3} children={"Metrotel"}
                                    onClick={() => set({...state, active: 3})}/>
                        </Flex>
                        <Title active={state.active}/>

                        <TypeLineBtns
                            open={state.active === 1}
                            active={state.tipoLinea}
                            Set={(e) => set({...state, tipoLinea: e})}
                        />

                        <Collapse isOpened={state.tipoLinea === "fija" && state.active === 1}>
                            <div className={"pb-3"}>
                                <Campo
                                    value={"8"}
                                    onChange={(e: any) => set({...state, number: e.target.value})}
                                    disabled={false}
                                    type={"select"}
                                    icon={"ubicacion"}
                                />
                            </div>
                        </Collapse>

                        <div className={"pb-3 wc"}>
                            <Campo
                                value={"8"}
                                onChange={(e: any) => set({...state, number: e.target.value})}
                                disabled={false}
                                icon={state.tipoLinea === 'fija' ? 'fijo' : "movil"}
                            />
                        </div>

                        <GroupBtns
                            loading={state.processing}
                            action={() => console.log("hola")}
                            number={state.number.length > 7}
                        />

                        <div className={"wc pt-3 text-center"}>
                            <a
                                target={"_blank"}
                                rel="noreferrer"
                                href="https://www.youtube.com/watch?v=YYbtiK7iwVk&ab_channel=MovistarColombia"
                               className={"ct"}>¿Cómo hacer mi pago?
                            </a>
                        </div>

                        <EpaycoFooter className={"pt-4"}/>
                    </div>
                </Flex>
                <ConvidInfo className={"d-none d-md-block"}/>
            </Flex>

            <Banner/>
            <ConvidInfo className={"d-md-none"}/>
        </Flex>
    )
}

export default React.memo(Home);