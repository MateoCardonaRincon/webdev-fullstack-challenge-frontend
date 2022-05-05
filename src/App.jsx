import { StoreProvider } from "/src/context/StoreProvider"
import NotesForm from "/src/components/NotesForm"
import CategoryList from "/src/components/CategoryList"
import "./index.css"

function App() {

  return (
    <StoreProvider>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <h1>To Do List Manager</h1>
        </div>
        <NotesForm />
        <CategoryList />
      </div>
    </StoreProvider>
  )
}

export default App
