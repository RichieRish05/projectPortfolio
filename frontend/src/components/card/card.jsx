import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './card.css'

const Card = ({image, name, description}) => {

    return (
        <div class="card">
            <img src={image} alt={name} style="width:100%"/>
            <div class="container">
                <h4><b>{name}</b></h4>
                <p>{description}</p>
            </div>
        </div>
    )

}

export default Card;