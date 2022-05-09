export const getCategories = async () => {
    let response = await fetch("http://localhost:8081/api/get/categories")
    let data = await response.json()
    return data
}

export const saveCategory = async (categoryFromForm) => {
    const categorySaved = await fetch("http://localhost:8081/api/save/category", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoryFromForm)
    }).then(response => response.json())

    return categorySaved
}

export const deleteCategory = async (category) => {
    let response = await fetch(`http://localhost:8081/api/delete/category/${category.id}`,
        { method: "DELETE" })

    return response
}