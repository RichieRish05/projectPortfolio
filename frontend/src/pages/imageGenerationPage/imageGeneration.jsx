//Import react hook to render components
import React, {useState} from "react";

//Url to communicate with backend
const API_URL = "https://portfolio-backend-24v5.onrender.com";

//Image Generation Page
const ImageGenerationPage = () => {
    //Create a react hook for the image and initialize it to null
    const [image, setImage] = useState(null);

    //Handle clicks to the "Generate Random Image" button
    const handleClick = () => {
        //Fetch the photo url from the backend and set the image hook to it
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
        // Container div to center content 
        <div className="d-flex flex-column align-items-center">
            {/* Conditionally render the image if it exists */}
            {image ? 
                <img src={image} className="resized mb-3 rounded" alt="Generated Random"></img>
            : null}

             {/* Button to trigger image generation */}
            <button type="button" className="btn btn-primary" onClick={handleClick}>Generate Random Image</button>
        </div>
    )

}


export default ImageGenerationPage;