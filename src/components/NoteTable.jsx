import React, { useState, useContext } from 'react'
import NoteUpdateModal from '/src/components/NoteUpdateModal'
import { Store } from '/src/context/StoreProvider'
import { updateNote, deleteNote } from "/src/services/noteService"

const NoteTable = (props) => {

    const { category } = props

    const { state, dispatch } = useContext(Store)

    // hook to show/hide the note update modal
    const [show, setShow] = useState(false);

    // stores the note that will be updated and send it through the props of the modal
    const [noteToUpdate, setNoteToUpdate] = useState({});

    // notes that will be rendered in the current category
    const notesToRender = state.notes.filter(note => note.fkCategoryId === category.id)

    // sends a put request to update the done attribute of a note
    const onCheckbox = async (event, note) => {

        const isChecked = event.currentTarget.checked;

        const noteUpdatedFromForm = { ...note, done: isChecked }

        // calling to note service
        let noteUpdated = await updateNote(noteUpdatedFromForm)

        dispatch({ type: "update-note", payload: noteUpdated })
    }

    // sends a delete request of a note by its id
    const onDelete = async (e, note) => {
        // calling note service
        let response = await deleteNote(note);

        // checks if the note was succesfully deleted on the DB, if so, the dispatch is triggered
        if (response.status === 200) {
            dispatch({ type: "delete-note", payload: { ...note } })
        }
    }

    // shows the modal to update a note, setting the note that will be updated
    const onUpdate = (e, note) => {
        setNoteToUpdate(note)
        setShow(true)
    }

    // conditional rendering: if a category has not notes, show an alternative message
    if (notesToRender.length > 0) {
        return (
            <>
                <table className="table table-hover table-striped table-borderless">
                    <thead><tr>
                        <th>Id</th><th>Title</th><th>Message</th><th>Done</th><th>Delete</th><th>Update</th>
                    </tr></thead>
                    <tbody>
                        {notesToRender.map(note => {
                            return <tr className={note.done ? "checked" : "unchecked"} key={`${category.id}-${note.id}`}>
                                <td>{note.id}</td>
                                <td>{note.title}</td>
                                <td>{note.message}</td>
                                <td><input className="checkbox" type="checkbox" checked={note.done} onChange={(e) => onCheckbox(e, note)} /></td>
                                <td><button className="btn-danger delete-btn" onClick={(e) => onDelete(e, note)}>✖</button></td>
                                <td><button className={"btn-primary update-btn"} disabled={note.done}
                                    onClick={(e) => onUpdate(e, note)}>🖍</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <NoteUpdateModal note={noteToUpdate} show={show} setShow={setShow} />
            </>
        )
    } else {
        return <h4>😢 This category is empty! Add a note if you wish 😀</h4>
    }
}

export default NoteTable