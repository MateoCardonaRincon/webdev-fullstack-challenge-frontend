import { StoreProvider } from "/src/context/StoreProvider"
import Header from "/src/components/Header"
import MainPage from "/src/components/pages/MainPage"
import About from "/src/components/pages/About"
import NotFound from "/src/components/pages/NotFound"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./index.css"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path='*' element={<Navigate to="notfound" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
