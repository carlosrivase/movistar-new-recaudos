import React from "react";
export  const colors = {
    blue: "#019DF4",
    blueDark: "#0B2739",
    green: "#5CB615",
    black:"#50535A",
    text:"#0A2738",
    disabled:"#D3D4D3",
    borde:"#BCBCBC"
}

export const sombra = '0 4px 7px rgba(0,0,0,0.11)';
export const transiton = 'all 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000)';

export const WrapForm:React.FC = (props)=>{
        return(
            <div
                className={"wc p-3"}
                style={{
                    maxWidth:"450px",
                    maxHeight:'calc(100vh - 50)',
                    overflow:"hidden auto"
                }}
            >
                {props.children}
            </div>
        )
}