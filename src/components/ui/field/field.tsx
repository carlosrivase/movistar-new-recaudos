import React, {useState} from 'react';
import {Container} from "./styles";
import ShowError from "./showError";
import Flex from "../flex";
import {colors} from "../index";


interface Props {
    value: string;
    name?: string;
    onChange:any;
    disabled: boolean;
    flex?:string;
    className?:string,
    icon?:string;
    error?:string
    options?:string,
    type?:string
}

const Field: React.FC<Props> = (props) => {

    const [focus,set] = useState(false);

    return (
        <Container
            error={!!props.error}
            flex={props.flex || '1 0 100%'}
            icon={!!props.icon}
            colorIcon={!!props.error ? 'red' : (focus ? colors.blue : colors.blueDark )}
        >
            {!!props.icon &&
            <Flex className="icon" direction={"column"}>
                <i className={"icon-icon-" + props.icon}></i>
            </Flex>}
            <input
                type={props.type}
                onChange={props.onChange}
                onFocus={()=> set(true)}
                onBlur={()=> set(false)}
            />
            {/*<ShowError error={props.error}/>*/}
        </Container>
    )
}

export default React.memo(Field);