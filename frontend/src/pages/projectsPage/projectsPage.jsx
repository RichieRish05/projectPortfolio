import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './projectsPage.css'
import Card from "../../components/card/card";


const ProjectsPage = () => {
    return (
        <div className ="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <Card image={"/chess.png"} name={"Chess"} projectId={"chess"}/>
                </div>
                <div className="col-md-6">
                    <Card image={"/research.png"} name={"Research"} projectId={"3d_lidar_adverse_weather"}/>
                </div>
            </div>
        </div>

    )
};

export default ProjectsPage;