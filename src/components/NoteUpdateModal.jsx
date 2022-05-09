import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import NoteUpdateForm from "/src/components/NoteUpdateForm"
import { Store } from '/src/context/StoreProvider'
import { updateNote } from "/src/services/noteService"

const UpdateNoteModal = (props) => {

    const { note, show, setShow } = props

    const { dispatch } = useContext(Store)

    const [newTitle, setNewTitle] = useState('')

    const [newMessage, setNewMessage] = useState('')

    const onUpdate = async (event, note) => {

        const noteUpdatedFromForm = { ...note, title: newTitle, message: newMessage }

        if (newTitle && newMessage) {
            // calling to note service
            let noteUpdated = await updateNote(noteUpdatedFromForm)

            dispatch({ type: "update-note", payload: noteUpdated })

            // resets the local state and close the modal if the update was successfull
            setShow(false)
            setNewTitle('')
            setNewMessage('')
        }
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <h5>{`Updating note with id ${note.id}`}</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>You can update the title and message:</h6>
                    <NoteUpdateForm note={note}
                        newTitle={newTitle}
                        newMessage={newMessage}
                        setNewTitle={setNewTitle}
                        setNewMessage={setNewMessage} />

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
}

export default UpdateNoteModal