import NoteTable from "/src/components/NoteTable"
import React, { useState, useContext } from 'react'
import { Store } from '/src/context/StoreProvider'
import { deleteCategory } from '/src/services/categoryService'

const Dropdown = (props) => {

    const { category } = props

    const { dispatch } = useContext(Store)

    const [toggle, setToggle] = useState(false)

    const toggleCollapse = () => {
        setToggle(!toggle)
    }

    const onDeleteCategory = async () => {
        // calling to category service
        let response = await deleteCategory(category)

        // checks if the note was succesfully deleted on the DB, if so the dispatch is triggered
        if (response.status === 200) {
            dispatch({ type: "delete-category", payload: category })
        }
    }

    return (
        <div className="row">
            <div className="accordion-item mb-3">
                <button className="accordion-button category-dropdown"
                    type="button"
                    onClick={toggleCollapse}>
                    {category.description}
                </button>
                <div id="collapseOne" className={`accordion-collapse collapse ${toggle ? "show" : ""}`}>

                    <div className="accordion-body">
                        <NoteTable category={category} />
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