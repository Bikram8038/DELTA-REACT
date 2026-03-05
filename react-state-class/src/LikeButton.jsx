import { use, useState } from "react";

export default function LikeButton(){
    let [isLiked,setisLiked]=useState(false);
    let [Click,setClick]=useState(0);

    let click=()=>{
        setisLiked(!isLiked);
        setClick(Click+1);
        
    }
    let style={
        color:"red",
    }
     return(
        <div>
            <p>click={Click}</p>
            <p onClick={click}>
                {isLiked ? <i className="fa-solid  fa-heart" style={style}></i> : <i className="fa-regular fa-heart"></i>}
            </p>
        </div>
     );
}