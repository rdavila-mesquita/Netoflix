import { Link } from "react-router-dom"
import "./MovieCard.css"
import Play from "../../assets/play.svg"
import SeeMore from "../../assets/see-more.svg"
import IconButton from "../button/IconButton"
import LikeButton from "../button/LikeButton"


function MovieCard({backdrop_path, title, name, genres, id}){

        
  
    return(
        
            <div className="container">  
                    <div className="movie-card">
                            <div className="inner-card">                         
                            <div className="card-img"> 
                                <img src={backdrop_path} width={220}/>
                            </div>
                        <h4>{ title || name }</h4>    
                        <div className="btns">
                            <Link to={`/details/${id}`}><IconButton name={Play} tooltip="Ver Trailer"/></Link>
                            <LikeButton tooltip="Gostei" />
                            <div className="sm">
                            <Link to={`/details/${id}`}><IconButton name={SeeMore} tooltip="Mais Informações" /></Link>
                            </div>
                        </div>
                            <ul className="media-type">
                            {genres?.map((genre) => (
                                <li key={genre.name}>{genre.name}</li>
                            ))}
                            </ul>
                        </div>
                    </div>            
        </div>  
    )
}

export default MovieCard