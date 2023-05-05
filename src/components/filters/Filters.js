import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";


const Filters = () => {
    return (
        <div className="col-3">
            <div className="text-center fw-bold fs-4 mb-2">Filter</div>
            <div
                className="text-center text-primary text-decoration-underline"
                style={{cursor: "pointer"}}
            >
                Clear Filters
            </div>
            <div className="accordion" id="accordionExample">
                <Status/>
                <Species/>
                <Gender/>
            </div>
        </div>
    )
}

export default Filters;