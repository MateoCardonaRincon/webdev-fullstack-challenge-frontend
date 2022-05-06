import { StoreProvider } from "/src/context/StoreProvider"
import NoteForm from "/src/components/NoteForm"
import CategoryList from "/src/components/CategoryList"
import "./index.css"

function App() {

  return (
    <StoreProvider>
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1>To Do List Manager</h1>
        </div>
        <NoteForm />
        <CategoryList />
      </div>
    </StoreProvider>
  )
}

export default App
