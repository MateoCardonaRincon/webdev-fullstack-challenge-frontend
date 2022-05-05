import { Store } from '/src/context/StoreProvider'
import React, { useContext, useEffect } from 'react'
import Dropdown from "/src/components/Dropdown"
import CategoryForm from "/src/components/CategoryForm"

const CategoryList = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        fetchAllCategories().then(
            category => {
                let action = {
                    type: "get-categories",
                    payload: category
                }
                dispatch(action)
            })

        fetchAllNotes().then(
            notes => {
                let action = {
                    type: "get-notes",
                    payload: notes
                }
                dispatch(action)
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