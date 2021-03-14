import React from 'react';
import {Collapse } from 'react-collapse';

interface PROPS {
    error:string|undefined
}

const ShowError : React.FC<PROPS> = ({error}) => {
    return (
        <Collapse isOpened={!!error}>
            <small className={"error"}>{error}</small>
        </Collapse>
    )
}

export default React.memo(ShowError);