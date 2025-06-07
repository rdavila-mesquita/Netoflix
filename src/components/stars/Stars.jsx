import "./Stars.css"
import StarFill from "../../assets/fill-star.svg"
import StarHalf from "../../assets/half-star.svg"
import Star from "../../assets/star.svg"

function Stars({vote_average}){



let convertedNote = vote_average / 2 

    const stars = []

    for ( let i = 0; i < 5; i++) {
      
        if ( convertedNote >= 1 ){
            stars.push(
                <p key={i}><img src={StarFill} /></p>
            )

            convertedNote -= 1 
        }
        
        else if ( convertedNote >= 0.5 ) {
            stars.push(
                <p key={i}><img src={StarHalf} /></p>

            )

            convertedNote = 0
        } else {
            stars.push( 
                <p key={i}><img src={Star} /></p>

            )
        }

    }

    return (
        <div className="stars-average">
            {stars}
        </div>
    );

};

export default Stars
