import React from 'react';
import Flex from "../../ui/flex";
import {Container} from "./styles";

const Banner: React.FC = (props) => {
    return (
        <div className={"col-12 col-md-6 col-lg-5 col-xl-4"}>
            <Container className={"p-3 pt-4 p-sm-3 p-lg-5"}>
                <Flex className="content" direction={"column"} jc={"flex-start"}>
                    <Flex className={"wc"} flex={"1 0 auto"} jc={"flex-start"} direction={"column"}>
                        <div className="medios wc p-3 text-center mb-4">
                            <p>Nuevos medios de pago disponibles para ti</p>
                            <Flex>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                            </Flex>
                        </div>
                        <div className={"mb-3"}>
                            <div className="title cw">Disfruta más de tu tiempo</div>
                            <p className={"cw"}>Programa tus pagos y hazlo todo más fácil</p>
                        </div>
                        <div className={"cw"}>
                            <div className={"mb-2"}>Paga en línea todo tus productos</div>
                            <div className={"mb-2"}>Paga con tarjeta de crédito o debito</div>
                            <div className={"mb-2"}>Pagos automáticos con un clic</div>
                            <div>Olvídate de hacer filas en el banco</div>
                        </div>
                    </Flex>
                    <div className={"alertWhite p-2 wc"}>
                        <Flex className={"wc"}>
                            <Flex flex={"0 0 40px"} className="icon">
                                <i className={"icon-icon-info"}></i>
                            </Flex>
                            <Flex className={"text-center"} flex={"1 0 60%"}>
                                <p className={"mb-0"}>No se aceptan pagos con tarjetas de cédito internacionales</p>
                            </Flex>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default React.memo(Banner);