import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


const API_URL = "https://portfolio-backend-24v5.onrender.com";

const ImageGenerationPage = () => {
    const [image, setImage] = useState(null);


    const handleClick = () => {
        console.log("FETCHING")
        fetch(`${API_URL}/randomImage`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error){
                console.error(data.error)
            } else {
                console.log(data.query);
                setImage(data.photo);
            }
        }).catch((error) => error.message)

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