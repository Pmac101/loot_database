import React from "react";
import styles from './search.module.css'

// prop from App component
const Search = ({setSearch}) => {
    return (
        <form className="d-flex justify-content-center gap-4 mb-5">
            {/* stores user input as search parameter for API request */}
            <input
                type="text"
                className={styles.input}
                placeholder="Enter an item name"
                onChange={e => {
                    setSearch(e.target.value)
                }}
            />
            <button className={`${styles.btn} btn btn-primary fs-5>Search`}></button>
        </form>
    );
}

export default Search;