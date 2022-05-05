import React, { useContext } from 'react'
import { Store } from '/src/context/StoreProvider'

const Table = (props) => {

    const { category } = props

    const { state, dispatch } = useContext(Store)

    const notesToRender = state.notes.filter(note => note.fkCategoryId === category.id)

    const onCheckbox = (e, note) => {
    }

    const onDelete = (e, note) => {
    }

    const onUpdate = (e, note) => {
    }

    if (notesToRender.length > 0) {
        return (
            <table className="table table-light table-hover table-striped">
                <thead><tr>
                    <th>id</th><th>title</th><th>message</th><th>done</th><th>delete</th><th>update</th>
                </tr></thead>
                <tbody>
                    {notesToRender.map(note => {
                        return <tr key={`${category.id}-${note.id}`}>
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