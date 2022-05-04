// This is the reducer function that is triggered by the context dispatcher
// Reduces the dispatch call to one of four cases:
//      get-categories: to set the state.categories after fetching all the categories from the DB
//      get-notes: to set the state.notes after fetching all the notes from the DB
//      add-category: to add a new gategory to the state.categories
//      add-note: to add a new note to the state.notes
//      update-note: to update a note in the state.notes
//      delete-category: to delete a category from the state.listOfNotes and all its related notes from state.notes
//      delete-note: to delete a note from the state.notes

/**
 * 
 * @param {Context state that is shared by all the components wrapped by the StoreProvider component} state 
 * @param {Carries the reducer case and the payload} action 
 * @returns returns the updated context state after add, save, update or delete a note or a category
 */


const reducer = (state, action) => {
    switch (action.type) {

        // the fetched lists of CATEGORIES is passed through the action.payload,
        // and stored in the context state using the spread operator
        case "get-categories":

            return state

        // the fetched lists of NOTES is passed through the action.payload,
        // and stored in the context state using the spread operator
        case "get-notes":

            return state

        // as the post request returns the created CATEGORY object, this response is sent through the action.payload
        // to update the CATEGORIES in the state of the context
        case "add-category":

            return state

        // as the post request returns the created NOTE object, this response is sent through the action.payload
        // to update the NOTES in the state of the context
        case "add-note":

            return state

        // the action.payload takes the CATEGORY object to be deleted, then the list of CATEGORIES is filtered
        // taking the CATEGORIES with an id different from the one the payload has.
        // All the NOTES related to the deleted CATEGORY are also deleted.
        case "delete-category":

            return state

        // the action.payload takes the NOTE object to be deleted, then the list of NOTES is filtered taking
        /// the NOTES with an id different from the one the payload has.
        case "delete-note":

            return state

        // the action.payload takes the NOTE object to be updated, then the list of NOTES is mapped, so that
        // all the NOTES keep being the same except for the NOTE that is being updated
        // A NOTE can only be updated if it isn't marked as done.
        case "update-note":

            return state
    }
}

export default reducer