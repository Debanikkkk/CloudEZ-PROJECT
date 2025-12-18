import {Circle, Dot, Ellipsis, MoreVerticalIcon} from "lucide-react"
import { useState } from "react"
const InstanceBox=()=>{
    const [dropDown, setDropDown]=useState(false)
    return (
        <>
            <div className="bg-white rounded-md flex flex-row gap-2.5 justify-between p-5 m-10px items-center">
                <div className="bg-orange-400 rounded-md p-1 text-white">AWS</div>
            
                <div >Debanik's Instance</div>
                <div className="flex flex-row gap-1 items-center">
                    <div>
                <Dot size={40} color="green"/>
                </div>
                <div>Running...</div></div>
                <div>
                <div className="hover:bg-grey"onClick={()=>setDropDown(!dropDown)}><MoreVerticalIcon/></div>
                {/* <div className="bg-white z-[999] relative inline-block">hello</div>               */}
                    </div>
            </div>
        </>
    )
}

export default InstanceBox