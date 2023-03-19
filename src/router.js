import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
import Index from "./Pages/Index"
import Edit from "./Pages/Edit"
import Show from "./Pages/Show"
import Create from "./Pages/Create"
import ShowDays from "./Pages/ShowDays"
import { dayLoader, daysLoader, indexLoader, monthLoader, singleDayLoader } from "./loaders";
import ShowYears from "./Pages/ShowYears";
import ShowMonths from "./Pages/ShowMonths";
import ShowDay from './Pages/ShowDay'
import { createAction, editAction, deleteAction} from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path = "/" element ={<App/>}>
            <Route path = "" element = {<Index/>} loader={indexLoader}/>
            <Route path = "edit/:id" element = {<Edit/>} loader={singleDayLoader} action={editAction}/>
            <Route path = "delete/:id" action={deleteAction}/>
            <Route path = "showYears" element = {<ShowYears/>} loader={indexLoader}/>
            <Route path = "showMonths/:year" element = {<ShowMonths/>} loader={monthLoader}/>
            <Route path = "showDays/:year/:month" element = {<ShowDays/>} loader={daysLoader}/>
            <Route path = "showDay/:day" element = {<ShowDay/>} loader={dayLoader}/>
            <Route path = "show/:id" element = {<Show/>} />
            <Route path = "create" element = {<Create/>} action={createAction}/>
        </Route>
    </>

))

export default router