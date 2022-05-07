import React from 'react'
import NoteForm from "/src/components/NoteForm"
import CategoryList from "/src/components/CategoryList"
import { StoreProvider } from "/src/context/StoreProvider"

const MainPage = () => {
    return (
        <>
            <div className="container">
                <StoreProvider>
                    <NoteForm />
                    <CategoryList />
                </StoreProvider>
            </div>
        </>

    )
}

export default MainPage