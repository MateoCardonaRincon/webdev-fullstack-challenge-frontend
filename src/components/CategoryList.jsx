import { Store } from '/src/context/StoreProvider'
import React, { useContext, useEffect } from 'react'
import Dropdown from "/src/components/Dropdown"
import CategoryForm from "/src/components/CategoryForm"
import { getNotes } from "/src/services/noteService"
import { getCategories } from "/src/services/categoryService"

const CategoryList = () => {

    const { state, dispatch } = useContext(Store)

    // Loads the categories and notes (through the backend DTOs) when the component is first rendered
    useEffect(() => {
        getCategories().then(
            category => {
                dispatch({ type: "get-categories", payload: category })
            })

        getNotes().then(
            notes => {
                dispatch({ type: "get-notes", payload: notes })
            })
    }, [])

    return (
        <div className="category-div">
            <h1>Your Categories</h1>
            <CategoryForm />
            <div className="accordion accordion-flush" id="accordionExample">
                {state.categories.map(category =>
                    <Dropdown category={category}
                        key={category.id} />
                )}
            </div>
        </div>
    )
}

export default CategoryList