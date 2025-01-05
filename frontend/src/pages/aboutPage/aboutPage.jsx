import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './aboutPage.css'
import NewPageButton from '../../components/newPageButton';

const AboutPage = () => {

    const emailAddress = "rmurumka@uci.edu";
    const subject = "Let's work together!";
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}`;

    const githubLink="https://github.com/RichieRish05";

    const linkedinLink = "https://www.linkedin.com/in/rishi-murumkar/";

    return (
        <>
            <div className="container mt-4 mb-3 resized-container">
                <div className="card text-light bg-dark border-light shadow-sm">
                    <div className="card-body">
                        <h1 className="card-title text-warning">About Me</h1>
                        <img src="/aboutMe.jpg" className="resize img-fluid rounded mb-3" alt="Could Not Load Image"></img>
                        <p className="text-light">
                            Hi, I’m Rishi Murumkar, a software enthusiast with a passion for coding and 
                            building impactful solutions. I enjoy solving complex problems, learning new 
                            technologies, and collaborating with teams to create meaningful projects. 
                            Outside of work, I’m an avid soccer and basketball fan, always up for a game or a good discussion.
                        </p>

                    </div>
                </div>

            </div>

            <NewPageButton btnName={"Github"} link={githubLink}/>
            <NewPageButton btnName={"Let's Work Together!"} link={mailtoLink}/>
            <NewPageButton btnName={"Linkedin"} link={linkedinLink}/>
        </>

    )
};

export default AboutPage;