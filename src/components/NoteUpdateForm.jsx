import React from 'react'

const UpdateNoteForm = (props) => {

    const { newTitle, setNewTitle, newMessage, setNewMessage } = props

    const addNewTitle = (event) => {
        setNewTitle(event.target.value)
    }

    const addNewMessage = (event) => {
        setNewMessage(event.target.value)
    }

    return (
        <>
            <form className="form">
                <div className="container w-100 mt-3">

                    <div className="row mb-3">
                        <label className="form-label">Title:</label>
                        <input className="form-control" type="text"
                            name="title" onChange={addNewTitle}
                            value={newTitle}
                            placeholder={newTitle}
                            required />
                        <label className="form-label mt-3">Message:</label>
                        <input className="form-control" type="text"
                            name="message" onChange={addNewMessage}
                            value={newTitle}
                            placeholder={newMessage}
                            required />
                    </div>
                </div>
            </form >
        </>
    )
}

export default UpdateNoteForm