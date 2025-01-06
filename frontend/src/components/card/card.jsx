//Import react hook for route navigation
import { Link } from 'react-router-dom';

//Custom styling
import './card.css';


//Main component
const Card = ({ image, name, projectId}) => {

    //Route to project
    const location = `/projects/${projectId}`


    return (
        //Card container with bootstrap styles
        <div className="card h-100 bg-dark border-light shadow-sm" style={{ width: "18rem" }}>
            {/* Title of card */}
            <h5 className="card-title text-light mb-4 fs-4">{name}</h5>
            {/* Load the specified image */}
            <img src={image} alt={name} className="card-img-top img-fluid sized-right"/>
            {/* Container for card body */}
            <div className="card-body d-flex flex-column">
                {/* Link to route user to specific project styled as a button */}
                <Link className="btn btn-primary mt-auto" to={location}>See More</Link>
            </div>
        </div>
    );
};


//Export for use in web pages
export default Card;
