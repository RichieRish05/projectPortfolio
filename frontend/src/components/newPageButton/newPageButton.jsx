
import React from 'react';

const NewPageButton = ({btnName, link}) => {

    return (
        <button
            onClick={() => window.open(link, "_blank")}
            className="btn btn-primary mx-2"
        >
            {btnName}
        </button>
    );
};

export default NewPageButton;
