import { useState } from "react"
import "./Buttons.css"
import Like from "../../assets/like.svg"
import LikeFill from "../../assets/like-fill.svg"


function LikeButton(props){
    const [likes, setLikes] = useState(0)
    const [isLike, setIsLike] = useState(false)

    function countLike(){
        setLikes(likes + (isLike ? -1 : 1))
        setIsLike(!isLike)
    }

    return(
        <div className="btnAction">
        <button className={`btnComponenent ${isLike ? "liked" : ""}`} onClick={countLike}>
            <img src={ isLike ? LikeFill : Like } />
        </button>
        {props.tooltip && <span className="tooltip">{props.tooltip}</span>}
        </div>
    )
}

export default LikeButton