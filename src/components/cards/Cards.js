import React from "react";

// gets results from App component
const Cards = ({results}) => {

    let display;

    // maps results from API
    if (results) {
        display = results.map(x => {
            return <div className='col-4'></div>
        })
    }
    // error message: no results
    else {
        display = "No Characters found"
    }

    return <div className='col-4'>Cards</div>
}

export default Cards;