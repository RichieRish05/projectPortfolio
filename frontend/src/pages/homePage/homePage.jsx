import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './homePage.css'

const HomePage = () => {

    return (
        <div className="text-white">
            <h1 className="text-info">Rishi Murumkar</h1>
            <img className="img-fluid logo img-spin" src={"/logo.png"} alt="Logo" />
            <h2 className="text-info">"Simplicity is the soul of efficiency."</h2>
        </div>
    )
}

export default HomePage;