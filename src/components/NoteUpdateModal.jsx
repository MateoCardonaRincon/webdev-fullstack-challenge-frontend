import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import UpdateNoteForm from "/src/components/UpdateNoteForm"
import { Store } from '/src/context/StoreProvider'

const UpdateNoteModal = (props) => {

    const { note, show, setShow } = props

    const { state, dispatch } = useContext(Store)

    const [newTitle, setNewTitle] = useState('')

    const [newMessage, setNewMessage] = useState('')

    const onUpdate = async (event, note) => {

        const noteUpdatedFromForm = { ...note, title: newTitle, message: newMessage }

        if (newTitle && newMessage) {
            let noteUpdated = await fetch("http://localhost:8081/api/update/note", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(noteUpdatedFromForm)
            }).then(response => response.json());

            dispatch({ type: "update-note", payload: noteUpdated })
        }
        setShow(false)
        setNewTitle('')
        setNewMessage('')
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>You can update the title and message:</h6>
                    <UpdateNoteForm newTitle={noteTitle} newMessage={noteMessage}
                        setNewTitle={setNewTitle} setNewMessage={setNewMessage} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => onUpdate(e, note)}>
                        Update note
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )


    return (
        <Modal />
    )
}

export default UpdateNoteModal