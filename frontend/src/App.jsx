// Importing CSS for styling the application
import './App.css'; //Custom styling
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap styling

//Importing necessary components from react-router-dom for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Routing components

//Importing custom components and pages
import NavBar from './components/navBar/navBar.jsx'; //Navigation bar component
import HomePage from './pages/homePage/homePage.jsx'; //Home page component
import AboutPage from './pages/aboutPage/aboutPage.jsx'; //About page component
import ProjectsPage from './pages/projectsPage/projectsPage.jsx'; //Projects listing page
import ProjectPage from './pages/projectPage/projectPage.jsx'; //Individual project details page
import ImageGenerationPage from './pages/imageGenerationPage/imageGeneration.jsx'; //Image API page

//App component
function App() {
  return (
    //Setting up the router to manage application routes
    <BrowserRouter>
      <NavBar /> {/* Navigation bar displayed on all pages */}

      {/* Defining the application's routes */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for the home page */}
        <Route path="/about" element={<AboutPage />} /> {/* Route for the about page */}
        <Route path="/projects" element={<ProjectsPage />} /> {/* Route for the projects list */}
        <Route path="/projects/:projectId" element={<ProjectPage />} /> {/* Route for a specific project */}
        <Route path="/imageGeneration" element={<ImageGenerationPage />} /> {/* Route for the image generation page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; //Exporting the App component for use in index.js
