import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { createClient } from 'pexels';


const API = "http://localhost:8000";

const API_KEY = '4PFBtu8tWleWNJIAlKLgjRpZcAfiMsZiH0slevhOC3owufmIakVq5TvN';
const client = createClient(API_KEY);



const ImageGenerationPage = () => {
    const [image, setImage] = useState(null);


    const handleClick = () => {
        const searchQueries = ['tigers', 'nature', 'ocean'];
        const randomIndex = Math.floor(Math.random()*searchQueries.length)
        const query = searchQueries[randomIndex];
        console.log(query);
        try {
            client.photos.search({ query, per_page: 1 }).then(data => 
                {
                    setImage(data.photos[0].src.original);
                })
            
        } catch (error) {
            console.error(error.message)
        }

    };


    return (
        <div className="d-flex flex-column align-items-center">
            {image ? 
                <img src={image} className="resized mb-3 rounded" alt="Generated Random"></img>
            : null}
            
            <button type="button" className="btn btn-primary" onClick={handleClick}>Generate Random Image</button>
        </div>
    )

}

export default ImageGenerationPage;