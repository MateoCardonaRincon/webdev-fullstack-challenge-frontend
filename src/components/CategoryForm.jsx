import React, { useContext, useRef, useState } from 'react'
import { Store } from "/src/context/StoreProvider"

const CategoryForm = () => {

    const { state, dispatch } = useContext(Store)

    const formRef = useRef(null)

    const [categoryDescription, setCategoryDescription] = useState('')

    const onAddCategory = async (event) => {
        event.preventDefault();

        let currentCategoryDescriptions = state.categories.map(category => category.description)

        // Validates if the new category is not null and if exists another category
        // with the same name already exist, and if is not null
        if (categoryDescription && !currentCategoryDescriptions.includes(categoryDescription)) {

            const categoryFromForm = { description: categoryDescription }

            let categorySaved = await fetch("http://localhost:8081/api/save/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(categoryFromForm)
            }).then(response => response.json());

            dispatch({ type: "add-category", payload: categorySaved })
        }
        // Reset input values  
        formRef.current.reset()
        setCategoryDescription('')
    }

    // updates local state categoryDescription
    const addCategory = (event) => {
        setCategoryDescription(event.target.value)
    }

    return (
        <>
            <form className="form" ref={formRef}>
                <div className="container w-50 mt-5">
                    <div className="row mb-3">
                        <label className="form-label label">Create a new category:</label>
                        <input className="form-control" type="text"
                            name="category" onChange={addCategory}
                            placeholder="Type a description"
                            required />
                    </div>
                    <div className="row mb-3">
                        <button className="btn btn-primary" type="submit" onClick={onAddCategory}>Add Category</button>
                    </div>
                </div>
            </form >
        </>
    )
}

export default CategoryForm