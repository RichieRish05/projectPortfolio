//Custom styling
import './aboutPage.css'

//Custom component that creates a button that loads a new window when pressed
import NewPageButton from '../../components/newPageButton/newPageButton';

//About Page
const AboutPage = () => {

    const emailAddress = "rmurumka@uci.edu";
    const subject = "Let's work together!";

    //Links to resources
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}`;
    const githubLink="https://github.com/RichieRish05";
    const linkedinLink = "https://www.linkedin.com/in/rishi-murumkar/";

    return (
        <>
            {/* Main container for the About Me section with top and bottom margins */}
            <div className="container mt-4 mb-3 resized-container">
                {/* Card container with a dark theme, light text, and shadow effect */}
                <div className="card text-light bg-dark border-light shadow-sm">
                    <div className="card-body">
                        {/* Title for the About Me section */}
                        <h1 className="card-title text-gold mb-4">About Me</h1>
                        
                        {/* Image section */}
                        <img src="/aboutMe.jpg" className="resize img-fluid rounded mb-3" alt="Could Not Load Image"/>
                        
                        {/* Description paragraph */}
                        <p className="text-light">
                            Hi, I’m Rishi Murumkar, a software enthusiast with a passion for coding and 
                            building impactful solutions. I enjoy solving complex problems, learning new 
                            technologies, and collaborating with teams to create meaningful projects. 
                            Outside of work, I’m an avid soccer and basketball fan, always up for a game or a good discussion.
                        </p>
                    </div>
                </div>
            </div>

            {/* Create a container to hold buttons. On big screens, the buttons align horizontally. On small screens,
            buttons align vertically. */}
            <div className="container d-flex justify-content-center align-items-center">
                {/* Row to organize buttons */}
                <div className="row">
                    {/* Responsive column with github button */}
                    <div className="col-md-auto col-12">
                        <NewPageButton btnName={"Github"} link={githubLink} />
                    </div>
                    {/* Responsive column with email button */}
                    <div className="col-md-auto col-12">
                        <NewPageButton btnName={"Let's Work Together!"} link={mailtoLink} />
                    </div>
                    {/* Responsive column with linkedin button */}
                    <div className="col-md-auto col-12">
                        <NewPageButton btnName={"Linkedin"} link={linkedinLink} />
                    </div>
                </div>
            </div>

        </>
    );
};
    
export default AboutPage;
    