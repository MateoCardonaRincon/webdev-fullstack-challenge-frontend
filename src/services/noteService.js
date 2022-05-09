export const getNotes = async () => {
    let response = await fetch("http://localhost:8081/api/get/notes")
    let data = await response.json()
    return data
}

export const saveNote = async (noteFromForm) => {
    let noteSaved = await fetch("http://localhost:8081/api/save/note", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteFromForm)
    }).then(response => response.json());

    return noteSaved
}

export const updateNote = async (noteUpdatedFromForm) => {
    let noteUpdated = await fetch("http://localhost:8081/api/update/note", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteUpdatedFromForm)
    }).then(response => response.json());

    return noteUpdated
}

export const deleteNote = async (note) => {
    let response = await fetch(`http://localhost:8081/api/delete/note/${note.id}`,
        { method: "DELETE" });

    return response
}