import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; // for customizing icons


// props passed from App.js useState
const Pagination = ({info, pageNumber, setPageNumber}) => {
    let [width, setWidth] = useState(window.innerWidth);

    let updateDimension = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimension);
        return () => window.removeEventListener("resize", updateDimension);
    },[]);

    // if page count exists, set that as the value
    return (
        <>
            <style jsx>
                {`
                  @media (max-width: 768px) {
                    .pagination {
                    font-size: 14px;
                    }
                  }
                `}
            </style>
            <ReactPaginate
                className="pagination justify-content-center gap-4 my-4"
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1 }
                pageClassName="page-item"
                pageLinkClassName="page-link"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
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
        </>
    );
};

export default Pagination