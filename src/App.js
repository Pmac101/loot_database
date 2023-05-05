import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { Component, useState, useEffect } from "react";
import Filters from "./components/filters/Filters";
import Cards from "./components/cards/Card";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";


// main program component
function App() {

    // sets default page number. This only works because the api has pages...needs modification for other api
    let [pageNumber, setPageNumber] = useState(1);
    let [fetchData, updateFetchData] = useState([]);
    let [search, setSearch] = useState("")
    let {info, results} = fetchData;
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

    // whenever app page changes, this will fetch the new data
    useEffect(() => {
        (async function () {
            // wait for data to be fetched form API
            let data = await fetch(api).then(res => res.json());
            updateFetchData(data);
        })()
    }, [api])

    return (
        <div className='App'>
            <h1 className='text-center my-4'>Loot Database</h1>
            <Search setSearch={setSearch}/>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <Filters/>
                    </div>
                    <div className='col-8'>
                        <div className='row'>
                            {/* passes results to Card component */}
                            <Cards results={results} />
                        </div>
                    </div>
                </div>
            </div>
            {/* passes setPageNumber and pageNumber to Pagination component */}
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        </div>
    )
}

export default App;