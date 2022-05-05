import React, { useContext, useRef, useState } from 'react'
import { Store } from "/src/context/StoreProvider"

const NotesForm = () => {

    // useRef hook to clean the inputs after adding a note
    const formRef = useRef(null)

    // useState hook to control the states of the inputs in the Form component
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [fkCategoryId, setCategory] = useState('')

    // call the context state and the dispatcher to update the state after
    // add, update and delete events
    const { state, dispatch } = useContext(Store)

    // set the value of the title through the useState hook, taking the onChange event value
    const addTitle = (event) => {
        setTitle(event.target.value)
    }

    // set the value of the message through the useState hook, taking the onChange event value
    const addMessage = (event) => {
        setMessage(event.target.value)
    }

    // set the value of the category through the useState hook, taking the onChange event value
    const addCategory = (event) => {
        setCategory(parseInt(event.target.value))
    }

    // Triggers the dispatch when a new note is added with not empty title, message and category
    const onAdd = async (event) => {
        event.preventDefault();
        if (title && message && fkCategoryId) {

            const noteFromForm = { title, message, fkCategoryId, done: false }

            let noteSaved = await fetch("http://localhost:8081/api/save/note", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(noteFromForm)
            }).then(response => response.json());

            dispatch({ type: "add-note", payload: noteSaved })

            // Reset input values of the Form component   
            formRef.current.reset()
            setCategory('')
        }
    }

    return (
        <>
            <h1>Create a new note</h1>
            <form className="form" ref={formRef}>
                <div className="container w-50 mt-5">

                    <div className="row mb-3">
                        <label className="form-label label">Title:</label>
                        <input className="form-control" type="text" name="title" onChange={addTitle} />
                    </div>

                    <div className="row mb-3">
                        <label className="form-label label">Message:</label>
                        <input className="form-control" type="text" name="message" onChange={addMessage} />
                    </div>

                    <div className="row mb-3">
                        <label className="form-label label">Category:</label>
                        <select className="form-select" type="select" name="category" onChange={addCategory} >
                            <option value=''>Choose...</option>
                            {state.categories.map(category =>
                                <option value={category.id} key={category.id}>{category.description}</option>
                            )}
                        </select>
                    </div>

                    <div className="row mb-3">
                        <button className="btn btn-primary" onClick={onAdd}>Add</button>
                    </div>
                </div>
            </form >
        </>
    )
}

export default NotesForm