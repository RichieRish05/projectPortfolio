import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './projectPage.css'
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react";

const API_URL = "http://localhost:8000";

const ProjectPage = () => {
    const {projectId} = useParams();

    const [pageInfo, setPageInfo] = useState({});
    const [error, setError] = useState(null);
    

    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await fetch(`${API_URL}/${projectId}`)
                if (!response.ok) {
                    throw new Error(`HTTP error, status: ${response.status}`);
                }
                const data = await response.json()
                if (data.error){
                    console.error(data.error);
                    setError(data.error);
        
                } else {
                    setPageInfo(data.data);
                }
            } catch (error){
                console.error(error.message);
                setError(error.message);
            }
        } 

        fetchData();

    },[projectId])

    const titles = {
        "chess": "Chess",
        "3d_lidar_adverse_weather": "3D Lidar Adverse Weather Object Detection"
    }
    const mediaContent = {
        "chess": 
                <video width="320" height="240" autoPlay playsinline controls loop>
                    <source src="/chessPlay.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
        ,
        "3d_lidar_adverse_weather": 
            <img src="/convolution.png" alt="Convolution" className="resized"/>
        
    };

    
    

    return (
        <>
        {pageInfo ? (
            <div className="container mt-4">
            <div className="card text-light bg-dark border-light shadow-sm">
                <div className="card-body">
                    <h1 className="card-title text-warning">{titles[pageInfo._id]}</h1>
                    {pageInfo._id? mediaContent[pageInfo._id]:<p>No Media Content</p>}
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-dark text-light">
                            <strong>Scope:</strong> {pageInfo.scope}
                        </li>
                        <li className="list-group-item bg-dark text-light">
                            <strong>Description:</strong> {pageInfo.project_description}
                        </li>
                        <li className="list-group-item bg-dark text-light">
                            <strong>Outcome:</strong> {pageInfo.outcome}
                        </li>
                        {pageInfo.problem_solved_for_client && (
                        <li className="list-group-item bg-dark text-light">
                            <strong>Client Problem Solved:</strong> {pageInfo.problem_solved_for_client}
                        </li>
                        )}
                    </ul>
                    <a 
                        class="btn btn-primary text-light" 
                        href={pageInfo.link} 
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Link to project</a>
                </div>
            </div>
            </div>
        ) : (
            <div className="text-center mt-4">
            <p className="spinner-border text-warning" role="status"></p>
            <p>{error}</p>
            <h3 className='text-light'>Loading</h3>
            </div>
        )}
        </>)



            
            
            
            
            
        
        
}

export default ProjectPage;

