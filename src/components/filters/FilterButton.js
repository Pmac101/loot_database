import React from "react";


const FilterButton = () => {
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="btn btn-outline-primary" htmlFor="flexRadioDefault1">Single toggle</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="btn btn-outline-primary" htmlFor="flexRadioDefault2">
                        Default checked radio
                    </label>
            </div>
        </div>
    );
};

export default FilterButton;