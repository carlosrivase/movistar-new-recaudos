import React from 'react';
import {Container} from "./styles";
import {colors} from "../index";
import Loading from "../loading/loading";
import Flex from "../flex";

interface Props {
    children:React.ReactNode;
    type?:string;
    disabled?:boolean;
    big?:boolean;
    color?:string;
    flex?:string;
    loading?:boolean
    onClick:()=> void,
    className?:string
}

const Btn:React.FC<Props> = ({
        type='',
        disabled=false,
        big,
        color= colors.blue,
        flex= "0 0 auto",
        loading= false,
        onClick= ( ) => null,
        children,
        className
 }) => {

    let height = big ? 46 : 36;

    return (
        <Container
            type={type === "line" ? '1' : undefined }
            height={height}
            flex={flex}
            color={disabled ? type === "line" ? "white" : colors.disabled : color}
            disabled={disabled}
            className={className}
            loading={loading ? '1': undefined }
        >
            <button disabled={disabled} onClick={onClick}>{children}</button>
            {loading &&
            <Flex className="loading" direction={"column"}>
                <Loading size={big?  40 : 30 } sizeBr={big ? 5 : 3 }/>
            </Flex>
            }
        </Container>
    )
}

export default React.memo(Btn);