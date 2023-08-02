import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "./Error"
import Favoritos from "./Favoritos"
import Filme from "./Filme"
import Home from "./Home"
import Header from "./components/Header"

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/filme/:id" element={<Filme></Filme>} />
                <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>

                <Route path="*" element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp