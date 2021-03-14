import React from 'react';
import logoMovistar from "../../img/logo_movistar.png";
import {Container} from "./styles";
import Flex from "../ui/flex";


const Header:React.FC = (props) => {
    return (
        <Container className={"py-3"}>
            <Flex alg={"center"} jc={"center"} flex={"0 0 0"} >
                <img src={logoMovistar} alt=""/>
            </Flex>
        </Container>
    )
}

export default React.memo(Header);