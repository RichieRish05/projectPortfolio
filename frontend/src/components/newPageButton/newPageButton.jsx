//Main Component
const NewPageButton = ({btnName, link}) => {
    
    return (
        //Create a button with the specified name that links user to a new page on a separate window
        <button
            onClick={() => window.open(link, "_blank")}
            className="btn btn-primary mx-2 mb-2"
        >
            {btnName}
        </button>
    );
};


//Export for use in web pages
export default NewPageButton;
