const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const app = express();  //Set up the express framework for the backend

const PORT = 8000; 

const mongoURI= 'mongodb+srv://rishimurumkar:Opal3727!@cluster0.qjupq.mongodb.net/portfolio?retryWrites=true&w=majority";'

mongoose
    .connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas and portfolio database'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//Middleware to parse JSON requests
app.use(express.json());

//Enable CORS for backend and frontend communication
app.use(cors());

//Define a test route
app.get('/', (req, res) => {
    res.send('Backend is working');
});



const userSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true},
    scope: { type: String, required: true },
    project_description: { type: String, required: true },
    outcome: {type: String, required: true},
    problem_solved_for_client: {type: String, required: false}
  });
  
const projectModel = mongoose.model('portfolio_projects', userSchema);

const findProject = async (projectId) => {
    try{
        const project = await projectModel.findOne({ _id: projectId});
        return project;
    } catch(error){
        console.error(error.message);
        throw(error);
    }
};


app.get('/:projectId', async (req, res) => {
    const {projectId} = req.params;
    try{
        if (!projectId){
            res.status(400).json({ error: 'Project id necessary' });
        }
        const data = await findProject(projectId);
        res.json({data});

    } catch(error){
        res.status(500).json({error: error.message})
    }

});


//Start the server on the desired port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
