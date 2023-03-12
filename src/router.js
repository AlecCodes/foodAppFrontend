import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
import Index from "./Pages/Index"
import Edit from "./Pages/Edit"
import Show from "./Pages/Show"
import Create from "./Pages/Create"
import { indexLoader, monthLoader } from "./loaders";
import ShowYears from "./Pages/ShowYears";
import ShowMonths from "./Pages/ShowMonths";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path = "/" element ={<App/>}>
            <Route path = "" element = {<Index/>} loader={indexLoader}/>
            <Route path = "edit/:id" element = {<Edit/>}/>
            <Route path = "showYears" element = {<ShowYears/>} loader={indexLoader}/>
            <Route path = "showMonths/:year" element = {<ShowMonths/>} loader={monthLoader}/>
            <Route path = "show/:id" element = {<Show/>} />
            <Route path = "create" element = {<Create/>}/>
        </Route>
    </>

))

export default router