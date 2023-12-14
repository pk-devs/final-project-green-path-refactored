import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PersistGate } from "redux-persist/es/integration/react"
import { store, persistor } from "./store" 
import { Home } from "./components/Home"
import { Header } from "./components/Header"
import { Path } from "./components/paths/Path"

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                <Router>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/path/:pathId" element={<Path />} />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    )
}