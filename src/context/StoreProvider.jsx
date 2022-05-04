import { createContext, useReducer } from "react"
import reducer from "/src/context/reducer"

// This state going to be updated once the app is rendered, then a GET request to the DB is done
// After that, the fetched data is send through the dispatch to apdate this context state
const initialState = {
    categories: [],
    notes: []
}

// Setting the initialState as a context state
const Store = createContext(initialState)

// Component to wrap the components that will share the context state
const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Store.Provider value={{ state, dispatch }}>
            {children}
        </Store.Provider>
    )
}

export default StoreProvider

export { Store, initialState }