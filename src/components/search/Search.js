import React from "react";
import styles from './search.module.css'


const Search = () => {
    return (
        <form className="">
            <input type="text" className="" placeholder="Enter an item name"/>
            <button className="btn btn-primary">Search</button>
        </form>
    );
}

export default Search;