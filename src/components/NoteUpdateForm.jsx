import React, { useEffect } from 'react'

const NoteUpdateForm = (props) => {

    const { note, newTitle, newMessage, setNewTitle, setNewMessage } = props

    useEffect(() => {
        setNewTitle(note.title)
        setNewMessage(note.message)
    }, [])

    const addNewTitle = (event) => {
        setNewTitle(event.target.value)
    }

    const addNewMessage = (event) => {
        setNewMessage(event.target.value)
    }

    const loadCurrentTitle = () => {
        setNewTitle(note.title)
    }

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