import React, {useEffect} from 'react';
import Flex from "../ui/flex";
import Banner from "./banner/banner";
import ConvidInfo from "./covitInfo/covidInfo";
import EpaycoFooter from "../epaycofooter/epaycoFooter";
import ConultForm from "../consultForm/consultForm";
import {withRouter} from "react-router-dom";

interface Props {
    history:any,
}

const Home: React.FC<Props> = (props) => {

    useEffect(()=>{
        sessionStorage.clear();
    },[])

    return (
        <Flex className={"wc"} flex={"1 0 70%"} alg={"stretch"}>
            <Flex
                className={"col-12 p-3 p-lg-0 col-md-6 col-lg-7 col-xl-8"}
                direction={"column"}
                jc={"flex-start"}
            >
                <Flex className={"wc"} flex={"1 0 auto"} direction={"column"}>
                    <div className={"col-12 col-sm-10 col-md-11 col-lg-7 col-xl-6 col-xxl-4 mx-auto"}>

                        {/* /////// Formulario de consulta */}
                        <ConultForm/>

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

            {/* BANNER ///////////////////// */}
            <Banner/>
            <ConvidInfo className={"d-md-none"}/>
        </Flex>
    )
}

export default withRouter(React.memo(Home));