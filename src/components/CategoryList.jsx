import { Store } from '/src/context/StoreProvider'
import React, { useContext, useEffect } from 'react'
import Dropdown from "/src/components/Dropdown"
import CategoryForm from "/src/components/CategoryForm"

const CategoryList = () => {

    const { state, dispatch } = useContext(Store)

    // Loads the categories and notes (through the backend DTOs) when the component is first rendered
    useEffect(() => {
        fetchAllCategories().then(
            category => {
                dispatch({ type: "get-categories", payload: category })
            })

        fetchAllNotes().then(
            notes => {
                dispatch({ type: "get-notes", payload: notes })
            })
    }, [])

    const fetchAllCategories = async () => {
        let response = await fetch("http://localhost:8081/api/get/categories")
        let data = await response.json()
        return data
    }

    const fetchAllNotes = async () => {
        let response = await fetch("http://localhost:8081/api/get/notes")
        let data = await response.json()
        return data
    }

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