//Import react hooks for component rendering
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react";

//Import custom component
import NewPageButton from '../../components/newPageButton/newPageButton';

//Custom styling
import './projectPage.css'

//Url to communicate with backend
const API_URL = "https://portfolio-backend-24v5.onrender.com";

//Project Page
const ProjectPage = () => {
    //Get the projectId from the route
    const {projectId} = useParams();

    //React hooks to get the page information and handle errors
    const [pageInfo, setPageInfo] = useState({});
    const [error, setError] = useState(null);
    

    //React hook to load new project info every time the projectID changes
    useEffect(() => {

        //Asynchronous function to fetch the data from the backend 
        const fetchData = async () => {
            try{
                const response = await fetch(`${API_URL}/${projectId}`)
                if (!response.ok) {
                    throw new Error(`HTTP error, status: ${response.status}`);
                }
                const data = await response.json()
                if (data.error){
                    //Handle errors that occured in the backend
                    console.error(data.error);
                    setError(data.error);
        
                } else {
                    //Set the info for the page
                    setPageInfo(data.data);
                }
            } catch (error){
                //Handle any errors that occured during fetching
                console.error(error.message);
                setError(error.message);
            }
        } 

        fetchData(); //Fetch the project info data

    },[projectId])

    //Assign the media content of the page based on project_id
    const mediaContent = {
        "chess": 
                <video width="320" height="240" autoPlay playsInline controls loop>
                    <source src="/chessPlay.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
        ,
        "3d_lidar_adverse_weather": 
            <img src="/convolution.png" alt="Convolution Image" className="resized rounded img-fluid"/>
    };

    
    

    return (

        //Renders the page content dynamically based on the presence of `pageInfo`
        <>
            {pageInfo ? (
                //If pageInfo exists, render the project details
                <div className="container mt-4">
                    {/* Card container with a dark background, light text, and shadow effect */}
                    <div className="card text-light bg-dark border-light shadow-sm ">
                        <div className="card-body">
                            {/* Project title */}
                            <h1 className="card-title text-warning mb-4">{pageInfo.title}</h1>

                            {/* Render media content if available" */}
                            {pageInfo._id ? mediaContent[pageInfo._id] : <p>No Media Content</p>}

                            {/* Render additional project details as a list */}
                            <ul className="list-group list-group-flush">
                                {/* Project scope */}
                                <li className="list-group-item bg-dark text-light">
                                    <strong>Scope:</strong> {pageInfo.scope}
                                </li>
                                {/* Project description */}
                                <li className="list-group-item bg-dark text-light">
                                    <strong>Description:</strong> {pageInfo.project_description}
                                </li>
                                {/* Project outcome */}
                                <li className="list-group-item bg-dark text-light">
                                    <strong>Outcome:</strong> {pageInfo.outcome}
                                </li>
                                {/* Conditionally render the problem solved for client if available */}
                                {pageInfo.problem_solved_for_client && (
                                    <li className="list-group-item bg-dark text-light">
                                        <strong>Client Problem Solved:</strong> {pageInfo.problem_solved_for_client}
                                    </li>
                                )}
                            </ul>
                            {/* Button component to link to the project */}
                            <NewPageButton btnName={"Link to project"} link={pageInfo.link} />
                        </div>
                    </div>
                </div>
            ) : (
                //If pageInfo does not exist, show a loading spinner and error message
                <div className="text-center mt-4">
                    {/* Loading spinner */}
                    <p className="spinner-border text-warning" role="status"></p>
                    {/* Display error message if available */}
                    <p>{error}</p>
                    {/* Message indicating the search for a project */}
                    <h3 className="text-light">Loading</h3>
                </div>
            )}
        </>)
}

export default ProjectPage;

