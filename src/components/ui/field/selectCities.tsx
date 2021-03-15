import React, {useEffect, useState} from 'react';
import Select,{components} from "react-select";
import getCities from "./getCities";
import {colors} from "../index";
import Flex from "../flex";


interface Props {
    value?:string;
    placeholder?:string;
    disabled?:boolean;
    icon?:boolean
    setFocus:()=> void;
    setBlur:()=> void;
    setValue:(e:any)=> void;
    error?:boolean
}

type City = {
    id:string;
    nombre:string;
    ciudad_departamento:string;
    indicativo:string;
    departamento:string;
}

type City_reduced = {
    "label":string;
    "value":string;
}





const SelectCities:React.FC<Props> = (props) => {


    type Estado = {
        options:City_reduced[];
        searchValue:string,
        isFocus:boolean
    }


    const [MyState,set] = useState<Estado>({
        options:[],
        searchValue:'',
        isFocus:false
    });

    let Mychevron = (props:any) => {
        return (
            <Flex flex={"0 0 30px"} >
                <components.IndicatorsContainer {...props} />
                <i className={"icon-icon-chevron"}> </i>
            </Flex>
        );
    };


    let addcities = ()=> {
        let cantidad = 500;
        let copycities = [...getCities()];
        let citiesN  = copycities.filter( (_,key) => key < cantidad )
        let cities = citiesN.map((item:City)=> ({"label": item.nombre,"value":item.indicativo}))
        set({...MyState, options:cities})
    }

    let filtrar = (e:any) =>{


        let cities = [...getCities()];
        let reduceCities:City_reduced[]= cities.map(obj=>({"label":obj.nombre,"value":obj.indicativo}))
        let nuevascities:City_reduced[] = [];



        if(props.value !== ""){
            nuevascities = reduceCities.filter(item =>
                item.label
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .includes(e.toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, ""))
            )
        }
        set({
            ...MyState,
            options:nuevascities
        })
    }

    const customStyles = {
        control: (provided:any,state:any) => ({
            ...provided,
            // none of react-select's styles are passed to <Control />
            border:"none",
            borderBottom:`2px solid ${ state.isFocused ? colors.blue : colors.blueDark}`,
            borderRadius:0,
            height:"56px",
            boxShadow:"none",
            '&:hover': {
                borderColor: props.error ? "red" : (state.isFocused ? colors.blue : colors.blueDark),
            },
        }),

        valueContainer: (provided:any,state:any) => ({
            ...provided,
            // none of react-select's styles are passed to <Control />
            height:"56px",
            paddingLeft: props.icon ? "35px":0
        }),
        singleValue: (provided:any,state:any) => ({
            ...provided,
            // none of react-select's styles are passed to <Control />
            top:"58%"
        }),
        placeholder: (provided:any,state:any) => ({
            ...provided,
            // none of react-select's styles are passed to <Control />
            top:"58%"
        }),
    }


    useEffect(()=>{ addcities() },[]);
    useEffect(()=>{
        if(MyState.searchValue.length > 2){
            filtrar(MyState.searchValue);
        }
    },[MyState.searchValue]);



        return (
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={MyState.options[1]}
                isDisabled={props.disabled}
                isClearable={true}
                onChange={(e)=> props.setValue(e)}
                onInputChange={(e) => filtrar(e) }
                // isRtl={isRtl}
                isSearchable={true}
                name="label"
                options={MyState.options}
                styles={customStyles}
                components={{
                    DropdownIndicator:Mychevron,
                }}
                onFocus={()=> {
                    props.setFocus()
                    set({...MyState,isFocus:true})
                }}
                onBlur={()=>  {
                    props.setBlur()
                    set({...MyState,isFocus:false})
                }}
            />
        );
}

export default React.memo(SelectCities);
