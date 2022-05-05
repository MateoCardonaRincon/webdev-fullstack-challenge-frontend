import Table from "/src/components/Table"
import React, { useState, useContext } from 'react'
import { Store } from '/src/context/StoreProvider'

const Dropdown = (props) => {

    const { category } = props

    const { state, dispatch } = useContext(Store)

    const [toggle, setToggle] = useState(false)

    const toggleCollapse = () => {
        setToggle(!toggle)
    }

    const onDeleteCategory = async () => {
        let response = await fetch(`http://localhost:8081/api/delete/category/${category.id}`,
            { method: "DELETE" });

        // checks if the note was succesfully deleted on the DB, if so, the dispatch is triggered
        if (response.status === 200) {
            dispatch({ type: "delete-category", payload: category })
        }
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
                        <button className="btn-danger w-100 delete-btn"
                            type="button"
                            onClick={onDeleteCategory}>Delete Category</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown