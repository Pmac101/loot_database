import React from "react";

// props passed from App.js useState
const Pagination = ({pageNumber, setPageNumber}) => {

    // adds 1 to page number
    let next = () => {
        setPageNumber(x => x+1)
    }

    // subtracts 1 from page number
    let prev = () => {
        
        if (pageNumber === 1) return;
        setPageNumber(x => x-1)
    }

    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button onClick={prev} className="btn btn-primary">Previous</button>
            <button onClick={next} className="btn btn-primary">Next</button>
        </div>
    )
}

export default Pagination