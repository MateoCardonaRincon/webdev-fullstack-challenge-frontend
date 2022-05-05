import React, { useState, useEffect, useContext } from 'react'
import { Store } from '/src/context/StoreProvider'

const Table = (props) => {

    const { category } = props

    const { state, dispatch } = useContext(Store)

    const [tableNotes, setTableNotes] = useState([])

    useEffect(() => {
        let listOfNotes = fetchAllNotes().then(
            notes => {
                let action = {
                    type: "get-notes",
                    payload: notes
                }
                dispatch(action)


                setTableNotes(notes)
            })
    }, [])

    const fetchAllNotes = async () => {
        let response = await fetch(`http://localhost:8081/api/get/notes/${category.id}`)
        let data = await response.json()
        return data
    }

    return (
        <table className="table table-success table-hover table-striped">
            <thead><tr>
                <th>id</th><th>title</th><th>message</th><th>done</th><th>delete</th>
            </tr></thead>
            <tbody>
                {tableNotes.map(note => <tr key={note.id}>
                    <td>{note.id}</td>
                    <td>{note.title}</td>
                    <td>{note.message}</td>
                    <td>{note.done ? "✔" : "✖"}</td>
                    <td><button className="delete-btn" onClick={(e) => onDelete(e, note)}>✖</button></td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default Table