import React from 'react'

const NoteUpdateForm = (props) => {

    const { note, setNewTitle, setNewMessage } = props

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
                            placeholder="Type a new title"
                            required />
                        <label className="form-label mt-3">Message:</label>
                        <input className="form-control" type="text"
                            name="message" onChange={addNewMessage}
                            placeholder="Type a new messagee"
                            required />
                    </div>
                </div>
            </form >
        </>
    )
}

export default NoteUpdateForm