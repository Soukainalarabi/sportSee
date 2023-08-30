import React from "react"
function Substrats({icon,title,keyData}){
return(
        <div className={title}>
             <img src={icon} alt="" style={{width:60,height:60}}/>
             <div className={`text-${title}`}>
             <p> <strong>  {keyData}</strong>
            </p>

               <p>{title}</p>
            </div>
        {/* <div className="proteines">
             <img src={proteine} alt="" style={{width:60,height:60}}/>
             <div className="textCalorie">
               <p>calories</p>
            </div>
        </div>
        <div className="glucides">
             <img src={glucide} alt="" style={{width:60,height:60}}/>
             <div className="textCalorie">
               <p>calories</p>
            </div>
        </div>
        <div className="lipides">
             <img src={lipide} alt="" style={{width:60,height:60}}/>
             <div className="textCalorie">
               <p>calories</p>
            </div>
        </div> */}
    </div> 
)
}
export default Substrats