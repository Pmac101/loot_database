import React from "react";
import styles from './search.module.css'

// prop from App component
const Search = ({setPageNumber, setSearch}) => {
    return (
        <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
            {/* stores user input as search parameter for API request */}
            <input
                type="text"
                className={styles.input}
                placeholder="Enter an item name"
                onChange={e => {
                    setPageNumber(1);
                    setSearch(e.target.value);
                }}
            />
            <button onClick={e => {e.preventDefault()}} className={`${styles.btn} btn btn-primary fs-5>Search`}>Search</button>
        </form>
    );
}

export default Search;