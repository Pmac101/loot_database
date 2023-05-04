import React from "react";
/** CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Make
 sure css files are named like so: componentName.module.css **/
import styles from './card.module.css'

// gets results from App component
const Cards = ({results}) => {

    let display;

    // maps results from API
    if (results) {
        display = results.map(x => {
            let {id, name, image, location, status} = x;

            return (
                <div key={id} className='col-4 mb-4 position-relative'>
                    <div className={styles.cards}>
                        {/* card image */}
                        <img src={image} alt="card image" className={`${styles.img} img-fluid`}/>
                        <div className={styles.content}>
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {/* controls badge color */}
                    {/* This block of code uses an IIFE(Immediately invoked Function Expression)*/}
                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                            );
                        }
                        else if (status === "Alive") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                            );
                        }
                        else {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                            );
                        }
                    })()}
                </div>
            )
        })
    }
    // error message: no results
    else {
        display = "No Characters found"
    }

    return <>{display}</>
}

export default Cards;