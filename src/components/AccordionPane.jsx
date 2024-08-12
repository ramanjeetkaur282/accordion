
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const AccordionPane=({title,children,initialCollpase=true})=>{

    const [collapsible,setCollapsible]=useState(initialCollpase);
    return (
        <div className="collapsible">
            <div 
                className="collapsible-Panel"
                onClick={()=> setCollapsible(!collapsible)}>
                <span>{title}</span>
                {collapsible ? <FaAngleDown/> : <FaAngleUp/>}
            </div>
            <div className={`collapsible-content ${collapsible ? "collapsed" : ""}`}>
                {children}
            </div>
        </div>
    )
}
export default AccordionPane;