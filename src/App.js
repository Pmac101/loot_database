import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { Component, useState, useEffect } from "react";
import Filters from "./components/filters/Filters";
import Cards from "./components/cards/Card";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from "./components/cards/CardDetails";


// main program component
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<CardDetails/>}/>
                <Route path="/episodes" element={<Episodes/>}/>
                <Route path="/episodes/:id" element={<CardDetails/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/location/:id" element={<CardDetails/>}/>
            </Routes>
        </Router>
    )
}

const Home = () => {

    // sets default page number. This only works because the api has pages...needs modification for other api
    let [pageNumber, setPageNumber] = useState(1);
    let [fetchData, updateFetchData] = useState([]);
    let [search, setSearch] = useState("")
    let [status, setStatus] = useState("")
    let [gender, setGender] = useState("")
    let [species, setSpecies] = useState("")

    let {info, results} = fetchData;
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
            <h1 className="text-center mb-4">Characters</h1>
            {/* passes setPageNumber and setSearch to Search component */}
            <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
            <div className='container'>
                <div className='row'>
                    {/* passes setPageNumber, status, and setGender to Filter component */}
                    <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}/>
                    <div className='col-lg-8 col-12'>
                        <div className='row'>
                            {/* passes results to Card component */}
                            <Cards page="/" results={results} />
                        </div>
                    </div>
                </div>
            </div>
            {/* passes setPageNumber and pageNumber to Pagination component */}
            <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        </div>
    )
}

export default App;