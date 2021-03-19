import React, {useEffect, useState} from 'react';
import Flex from "../ui/flex";
import Title from "./title";
import Campo from "../ui/field/field";
import Banner from "./banner/banner";
import TypeLineBtns from "./typeLineBtns/typeLinesBtns";
import ConvidInfo from "./covitInfo/covidInfo";
import GroupBtns from "./GroupBtns/GroupBtns";
import {Collapse} from "react-collapse";
import EpaycoFooter from "../epaycofooter/epaycoFooter";
import TabsGroup from "./TabsGroup/TabsGroup";

const Home: React.FC = (props) => {


    const [state, set] = useState({
        active: 1,
        tipoLinea: 'movil',
        number: '',
        processing: '',
        indicativo:''
    })

    let submit = (type: string) => {
        set({...state, processing: type});
    }


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
                    <div className={"col-12 col-sm-10 col-md-11 col-lg-7 col-xl-6 col-xxl-4 mx-auto"}>

                        <TabsGroup
                            active={state.active}
                            set={(e:number)=> set({...state,active:e})}
                            disabled={!!state.processing}
                        />

                        <Title active={state.active}/>

                        <TypeLineBtns
                            open={state.active === 1}
                            active={state.tipoLinea}
                            Set={(e) => set({...state, tipoLinea: e})}
                            disabled={!!state.processing}
                        />

                        <Collapse className={"up-index"} isOpened={state.tipoLinea === "fija" && state.active === 1}>
                            <div className={"pb-3 up-index"}>
                                <Campo
                                    value={state.indicativo}
                                    onChange={(e: any) => set({...state, indicativo: e.target.value})}
                                    disabled={!!state.processing}
                                    type={"select"}
                                    icon={"ubicacion"}
                                />
                            </div>
                        </Collapse>

                        <div className={"pb-3 wc"}>
                            <Campo
                                value={state.number}
                                onChange={(e: any) => set({...state, number: e.target.value})}
                                disabled={!!state.processing}
                                type={"mask"}
                                icon={state.tipoLinea === 'fija' ? 'fijo' : "movil"}
                            />
                        </div>

                        <GroupBtns
                            loading={state.processing}
                            action={(ty:string)=> submit(ty)}
                            number={state.number.length > 6}
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