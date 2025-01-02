import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './card.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Card = ({ image, name}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log('Test')

    }


    return (
        <div className="card h-100" style={{ width: "18rem" }}>
            <h5 className="card-title">{name}</h5>
            <img src={image} alt={name} className="`card-img-top img-fluid sized-right"/>
            <div className="card-body d-flex flex-column">
                <Link className="btn btn-primary mt-auto" to="/">See More</Link>
            </div>
        </div>
    );
};

export default Card;
