import Table from "/src/components/Table"
import React, { useState, useEffect, useContext } from 'react'

const Dropdown = (props) => {

    const { category } = props

    const [toggle, setToggle] = useState(false)

    const toggleCollapse = () => {
        setToggle(!toggle)
    }

    return (
        <div className="row">
            <div className="accordion-item mb-2">
                <h2 className="accordion-header justify-content-around">
                    <button className="accordion-button"
                        type="button"
                        onClick={toggleCollapse}>
                        {category.description}
                    </button>
                </h2>
                <div id="collapseOne" className={`accordion-collapse collapse ${toggle ? "show" : ""}`}>

                    <div className="accordion-body">
                        <Table category={category} />
                        <button className="btn-danger w-100 delete-btn" type="button">Delete Category</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown