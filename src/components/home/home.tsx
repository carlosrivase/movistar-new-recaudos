import React, {useState} from 'react';
import Flex from "../ui/flex";
import Btntab from "../ui/BtnTab/Btntab";
import Title from "./title";
import {colors} from "../ui";
import Campo from "../ui/field/field";
import Btn from "../ui/btn";
import logo_ePayco from "./../../img/logo_ePayco.svg";
import Banner from "./banner/banner";
import TypeLineBtns from "./typeLineBtns/typeLinesBtns";
import ConvidInfo from "./covitInfo/covidInfo";

const Home: React.FC = (props) => {


    const [state, set] = useState({
        active: 1,
        tipoLinea: 'fija',
        number: '',
        processing:false
    })

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
                            Set={(e)=> set({...state,tipoLinea:e})}
                        />

                        <div className={"py-3 wc"}>
                            <Campo
                                value={"8"}
                                onChange={(e: any) => set({...state,number:e.target.value})}
                                disabled={false}
                                type={"number"}
                                icon={"movil"}
                            />
                        </div>

                        <Flex className={"wc py-3"}>
                            <Btn
                                className={"mb-4           col-12"}
                                onClick={() => console.log("puto")}
                                color={colors.blue}
                                big
                                disabled={!state.number}
                            >
                                <i className={'icon-icon-tiempo'}> </i> Programar mis pagos
                            </Btn>
                            <Btn
                                className={"col-6 pe-2"}
                                onClick={() => console.log("puto")}
                                type={"line"}
                                big
                                disabled={!state.number}
                                color={colors.blueDark}
                            >
                                Consultar
                            </Btn>
                            <Btn
                                className={"col-6 ps-2"}
                                onClick={() => console.log("puto")}
                                color={colors.blueDark}
                                big
                                disabled={!state.number}
                            >
                                Ir a pagar
                            </Btn>
                        </Flex>
                        <div className={"wc pt-3 text-center"}>
                            <a href="" className={"ct"}>¿Cómo hacer mi pago?</a>
                        </div>

                        <div className={"text-center pb-3 pt-4"}>
                            <p>
                                <i></i>
                                Pagos procesados por
                                <img src={logo_ePayco} alt="" height={"28px"} width={'auto'} className={"ps-2"}/>
                            </p>
                        </div>
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