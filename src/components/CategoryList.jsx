import { Store } from '/src/context/StoreProvider'
import React, { useContext, useEffect } from 'react'
import Dropdown from "/src/components/Dropdown"

const CategoryList = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        let listOfNotes = fetchAllCategories().then(
            category => {
                let action = {
                    type: "get-categories",
                    payload: category
                }
                dispatch(action)
            })
    }, [])

    const fetchAllCategories = async () => {
        let response = await fetch("http://localhost:8081/api/get/categories")
        let data = await response.json()
        return data
    }

    return (
        <div className="accordion accordion-flush" id="accordionExample">
            {state.categories.map(category =>
                <Dropdown category={category}
                    key={category.id} />
            )}
        </div>
    )
}

export default CategoryList