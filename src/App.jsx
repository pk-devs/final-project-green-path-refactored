import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { store } from "./components/redux/store" 
import { Home } from "./components/Home"
import { Header } from "./components/Header"
import { Path } from "./components/paths/Path"

export const App = () => {
  return (
        <Provider store={store}>
            <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/path/:pathId" element={<Path />} />
                </Routes>
            </Router>
        </Provider>
    )
}