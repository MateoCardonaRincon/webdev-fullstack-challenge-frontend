import Table from "/src/components/Table"
import React, { useState } from 'react'

const Dropdown = (props) => {

    const { category } = props

    const [toggle, setToggle] = useState(false)

    const toggleCollapse = () => {
        setToggle(!toggle)
    }

    return (
        <div className="accordion-item mb-1">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button"
                    type="button"
                    onClick={toggleCollapse}>
                    {category.description}
                </button>
            </h2>
            <div id="collapseOne" className={`accordion-collapse collapse ${toggle ? "show" : ""}`}>
                <div className="accordion-body">
                    <Table category={category} />
                </div>
            </div>
        </div>
    )
}

export default Dropdown