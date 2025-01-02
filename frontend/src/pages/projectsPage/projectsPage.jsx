import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/card";
import chessImage from "./chess.png"

const navigate = useNavigate();
const handleClick = () => navigate('/');


const ProjectsPage = () => {
    const chessName = "Chess"
    const chessDescription = "An interesting chess game"

    return (
        <>
            <h1>Projects</h1>
            <Card image={chessImage} name={chessName} description={chessDescription}/>
        </>
    )
};

export default ProjectsPage;