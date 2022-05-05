import React, { useContext } from 'react'
import { Store } from '/src/context/StoreProvider'

const Table = (props) => {

    const { category } = props

    const { state, dispatch } = useContext(Store)

    const notesToRender = state.notes.filter(note => note.fkCategoryId === category.id)

    const onCheckbox = async (event, note) => {
        const isChecked = event.currentTarget.checked;

        const noteUpdatedFromForm = { ...note, done: isChecked }

        // here, promises are treated using async/await and .then() approaches
        let noteUpdated = await fetch("http://localhost:8081/api/update/note", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteUpdatedFromForm)
        }).then(response => response.json());

        dispatch({ type: "update-note", payload: noteUpdated })
    }

    const onDelete = async (e, note) => {
        let response = await fetch(`http://localhost:8081/api/delete/note/${note.id}`,
            { method: "DELETE" });

        // checks if the note was succesfully deleted on the DB, if so, the dispatch is triggered
        if (response.status === 200) {
            dispatch({ type: "delete-note", payload: { ...note } })
        }
    }

    const onUpdate = (e, note) => {
    }

    if (notesToRender.length > 0) {
        return (
            <table className="table table-hover table-striped">
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
                            <td><button className="btn-primary update-btn" onClick={(e) => onUpdate(e, note)}>🖍</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    } else {
        return <h4>😢 This category is empty! Add a note if you wish 😀</h4>
    }
}

export default Table