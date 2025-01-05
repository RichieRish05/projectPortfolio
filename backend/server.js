const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const app = express();  //Set up the express framework for the backend

const PORT = 8000; 

const mongoURI= 'mongodb+srv://rishimurumkar:Opal3727!@cluster0.qjupq.mongodb.net/portfolio?retryWrites=true&w=majority';

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






const { createClient } = require('pexels');


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
    "fountain", "globe", "harbor", "insect", "jewel", "kangaroo", "lantern", "meadow", "noodle", "orchard"
];



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

        // Return the photo URL
        res.json({query, photo: data.photos[0].src.original});
    } catch (error) {
        console.error("Error fetching image:", error.message);
        res.status(500).json({ error: "An error occurred while fetching the image." });
    }
    
});



const userSchema = new mongoose.Schema({
    _id: { type: String, required: true},
    title: { type: String, required: true},
    scope: { type: String, required: true },
    project_description: { type: String, required: true },
    outcome: {type: String, required: true},
    link: {type: String, required: true},
    problem_solved_for_client: {type: String, required: false},
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
