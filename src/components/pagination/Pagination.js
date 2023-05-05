import React from "react";
import ReactPaginate from "react-paginate";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; // for customizing icons

// props passed from App.js useState
const Pagination = ({info, pageNumber, setPageNumber}) => {


    // if page count exists, set that as the value
    return (
        <ReactPaginate
            className="pagination justify-content-center gap-4 my-4"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1 }
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            onPageChange={(data) => {
                setPageNumber(data.selected + 1)
            }}
            pageCount={info?.pages}
            previousLabel={
                <IconContext.Provider value={{ color: "#0d6efd", size: "36px" }}>
                    <AiFillLeftCircle />
                </IconContext.Provider>
            }
            nextLabel={
                <IconContext.Provider value={{ color: "#0d6efd", size: "36px" }}>
                    <AiFillRightCircle />
                </IconContext.Provider>
            }
        />
    );
};

export default Pagination