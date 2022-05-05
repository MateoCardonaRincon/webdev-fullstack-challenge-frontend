import { StoreProvider } from "/src/context/StoreProvider"
import Form from "/src/components/Form"
import CategoryList from "/src/components/CategoryList"
import "./index.css"

function App() {

  return (
    <StoreProvider>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <h1>To Do List Manager</h1>
        </div>
        <Form />
        <CategoryList />
      </div>
    </StoreProvider>
  )
}

export default App
