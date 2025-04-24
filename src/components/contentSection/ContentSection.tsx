import React from "react"

import { CSSProperties } from "react"

function ContentSection({label, children, style = {} , label_style ={}}:{label:React.ReactNode, children?:React.ReactNode, style?:React.CSSProperties, label_style?:CSSProperties}){

    let default_mainpage_style: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#111111",
        ...style
      };

    let default_label_style:CSSProperties = {
              fontSize: "2em",
              ...label_style
          };
    return <>
        <div style={default_mainpage_style} className="mainpage">
            <h1 style = {default_label_style}>{label}</h1>
            
            {children}
        </div>
    </>

}
export default ContentSection