//Custom styling
import './homePage.css';

const HomePage = () => {

    return (
        //Main container for the home page
        <div className="text-white">
            {/* Display the name with a custom font */}
            <h1 className="light-blue futuristic-font">Rishi Murumkar</h1>

            {/* Logo image with responsive design and spin animation */}
            <img className="img-fluid logo img-spin" src={"/logo.png"} alt="Logo"/>

            {/* Subtitle with a futuristic font  */}
            <h2 className="light-blue futuristic-font">"Simplicity is the soul of efficiency."</h2>
        </div>
    );
};

export default HomePage;
