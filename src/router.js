import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
import Index from "./Pages/Index"
import Edit from "./Pages/Edit"
import Show from "./Pages/Show"
import Create from "./Pages/Create"
import { indexLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path = "/" element ={<App/>}>
            <Route path = "" element = {<Index/>} loader={indexLoader}/>
            <Route path = "edit/:id" element = {<Edit/>}/>
            <Route path = "show/:id" element = {<Show/>} />
            <Route path = "create" element = {<Create/>}/>
        </Route>
    </>

))

export default router