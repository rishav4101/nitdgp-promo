import React from "react";

export default function Loader(){
    return (
        <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", position:"fixed", zIndex:99999, backgroundColor:"#fff7ef", }}>
            <img alt="." src="./nitdgp.png" style={{width:120}} />
        </div>
    )
}