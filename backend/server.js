const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose'); //Library to interact with mongodb
const app = express();  //Set up the express framework for the backend
const { createClient } = require('pexels'); //Library to interact with pexels API

//Port that the server runs on locally for testing 
const PORT = 8000; 

//Location of portfolio database in my mongodb cluster
const mongoURI= 'mongodb+srv://rishimurumkar:Opal3727!@cluster0.qjupq.mongodb.net/portfolio?retryWrites=true&w=majority';

//Connect to portfolio database using mongoose
mongoose
    .connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas and Portfolio database'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//Middleware to parse JSON requests
app.use(express.json());

//Enable CORS for backend and frontend communication
app.use(cors());

//Define a test route
app.get('/', (req, res) => {
    res.send('Backend is working');
});




const API_KEY = '4PFBtu8tWleWNJIAlKLgjRpZcAfiMsZiH0slevhOC3owufmIakVq5TvN';
const client = createClient(API_KEY);


const searchQueries = [
    "apple", "banana", "car", "dog", "elephant", "flower", "guitar", "hat", "island", "jelly",
    "kangaroo", "lamp", "mountain", "notebook", "ocean", "pencil", "quilt", "robot", "sandwich", "tree",
    "umbrella", "vase", "whale", "xylophone", "yacht", "zebra", "ball", "cat", "desk", "engine", "forest",
    "garden", "house", "igloo", "jacket", "kite", "ladder", "mirror", "nest", "orange", "piano",
    "queen", "rain", "sun", "train", "umbrella", "village", "wolf", "x-ray", "yogurt", "zipper",
    "anchor", "boat", "castle", "dolphin", "eagle", "fire", "giraffe", "helmet", "iceberg", "jungle",
    "kitchen", "lemon", "microphone", "necklace", "octopus", "penguin", "quill", "river", "sailboat", "telescope",
    "unicorn", "volcano", "wheel", "xenon", "yarn", "zeppelin", "bridge", "camera", "diamond", "earring",
    "fountain", "globe", "harbor", "insect", "jewel", "kangaroo", "lantern", "meadow", "noodle", "orchard", "Real Madrid"
];


//Route to fetch a random image from the pexels API
app.get('/randomImage', async (req, res) => {
    const randomIndex = Math.floor(Math.random() * searchQueries.length);
    const query = searchQueries[randomIndex];


    try {
        // Await the Pexels API call
        const data = await client.photos.search({ query, per_page: 1 });
        
        // Validate the response
        if (!data.photos || data.photos.length === 0) {
            return res.status(404).json({ error: "No photos found for the query." });
        }

        // Return the search query and photo URL
        res.json({query, photo: data.photos[0].src.original});
    } catch (error) {
        //Catch any errors
        console.error("Error fetching image:", error.message);
        res.status(500).json({ error: "An error occurred while fetching the image." });
    }
    
});


//Define a mongoose schema to interact with the documents stored in the portfolio_projects collection
const projectSchema = new mongoose.Schema({
    _id: { type: String, required: true},
    title: { type: String, required: true},
    scope: { type: String, required: true },
    project_description: { type: String, required: true },
    outcome: {type: String, required: true},
    link: {type: String, required: true},
    problem_solved_for_client: {type: String, required: false},
  });
  
//Define a model that enforeces the projectSchema on the portfolio_projects collection
const projectModel = mongoose.model('portfolio_projects', projectSchema);

//Find the project specified in the portfolio_projects collection
const findProject = async (projectId) => {
    try{
        //Wait until the project document is fetched
        const project = await projectModel.findOne({ _id: projectId});
        return project;
    } catch(error){
        //Log the error and throw it
        console.error(error.message);
        throw(error);
    }
};


//Define a route to fetch a project from the portfolio_projects collection based on the projectID parameter
app.get('/:projectId', async (req, res) => {
    const {projectId} = req.params;
    try{
        if (!projectId){
            res.status(400).json({ error: 'Project id necessary' });
        }
        //Find and return the project
        const data = await findProject(projectId);
        res.json({data});

    } catch(error){
        //Catch any errors
        res.status(500).json({error: error.message})
    }

});


//Start the server on the desired port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
