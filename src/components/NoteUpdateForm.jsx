import React, { useEffect } from 'react'

const NoteUpdateForm = (props) => {

    const { note, newTitle, newMessage, setNewTitle, setNewMessage } = props

    // before the form is rendered, the title and message of the note that will be rendered
    // are loaded in the inputs
    useEffect(() => {
        setNewTitle(note.title)
        setNewMessage(note.message)
    }, [])

    // sets the value of the title that will be updated
    const addNewTitle = (event) => {
        setNewTitle(event.target.value)
    }

    // sets the value of the message that will be updated
    const addNewMessage = (event) => {
        setNewMessage(event.target.value)
    }

    // loads the current title if the user modified it but then want to keep the same title
    const loadCurrentTitle = () => {
        setNewTitle(note.title)
    }

    // loads the current message if the user modified it but then want to keep the same title
    const loadCurrentMessage = () => {
        setNewMessage(note.message)
    }

    return (
        <>
            <form className="form">
                <div className="container w-100 mt-3">
                    <div className="row mb-3">

                        <label className="form-label">
                            Title: <span className="update-span" type="submit" onClick={loadCurrentTitle}>
                                load current title</span>
                        </label>
                        <input className="form-control" type="text"
                            name="title" onChange={addNewTitle}
                            value={newTitle}
                            placeholder="Type a new title"
                            required />

                        <label className="form-label mt-3">
                            Message: <span className="update-span" type="submit" onClick={loadCurrentMessage}>
                                load current message</span>
                        </label>
                        <input className="form-control" type="text"
                            name="message" onChange={addNewMessage}
                            value={newMessage}
                            placeholder="Type a new messagee"
                            required />
                    </div>
                </div>
            </form >
        </>
    )
}

export default NoteUpdateForm