import React, {useState} from "react";
import { createClient } from 'pexels';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


const API_KEY = "INSERT YOUR API KEY HERE";
const client = createClient(API_KEY);


const ImageGenerationPage = () => {
    const [image, setImage] = useState(null);


    const handleClick = () => {
        const query = "Tigers";

        client.photos
            .search({ query, per_page: 1, orientation: "landscape" })
            .then(data => {
                console.log(data);
                if (data.photos && data.photos.length > 0) {
                    setImage(data.photos[0].src.original); 
                } else {
                    console.error("No images found for the query.");
                }
            })
            .catch(error => console.error("Error fetching images:", error.message));
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