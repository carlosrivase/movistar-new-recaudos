import React, {useState} from 'react';
import {Container} from "./styles";
import ShowError from "./showError";
import Flex from "../flex";
import {colors} from "../index";
import SelectCities from "./selectCities";
import Cleave from "cleave.js/react";


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
    type?:string;
    theRef?:any;
    placeholder?:string
}

const Field: React.FC<Props> = (props) => {

    const [focus,set] = useState(false);

    return (
        <Container
            error={!!props.error}
            flex={props.flex || '1 0 100%'}
            icon={!!props.icon}
            colorIcon={!!props.error ? 'red' : props.disabled ? colors.disabled : (focus ? colors.blue : colors.blueDark )}
        >
            {!!props.icon &&
            <Flex className="icon" direction={"column"}>
                <i className={"icon-icon-" + props.icon}> </i>
            </Flex>}


            {props.type === "number" &&
                <>
                    <input
                        type="number"
                        pattern={"[0-9]"}
                        ref={props.theRef}
                        className={"d-md-none"}
                        onChange={(e:any)=> {
                            let obj = {
                                target:{value:e.target.value.replace(/[^0-9]/g,'')}
                            }
                            props.onChange(e)
                        }}
                    />
                    <Cleave
                        ref={props.theRef}
                        disabled={props.disabled}
                        className={"to-right wc d-none d-md-block"}
                        value={props.value}
                        options={{
                            blocks:[3,3,4,4]
                        }}
                        onChange={(e:any)=> {
                            let obj = {target:{value:e.target.rawValue}}
                            props.onChange(obj)
                        }}
                        placeholder={props.placeholder }
                    />
                </>
            }

            {props.type === "select" &&
             <SelectCities
                 Ref={props.theRef}
                 icon={!!props.icon}
                 setValue={ (e:any)=>{
                     let obj:{} = {
                         target:{
                             value:e ? e.value : 0
                         }
                     }
                     props.onChange(obj)
                 }}
                 setBlur={()=> set(false)}
                 setFocus={()=>set(true)}
                 error={!!(props.error)}
                 disabled={props.disabled}
             />
            }

            {!props.type &&
            <input
                ref={props.theRef}
                type={props.type}
                onChange={props.onChange}
                onFocus={()=> set(true)}
                onBlur={()=> set(false)}
                disabled={props.disabled}
                placeholder={props.placeholder }
            />
            }


            <ShowError error={props.error}/>
        </Container>
    )
}

export default React.memo(Field);