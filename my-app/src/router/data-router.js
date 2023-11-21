import Home from '../pages/HomePage'
import Login from '../pages/LoginPage'
import { ClientPanel } from '../pages/ClientPanel'

export const DataRouter = [
    {
        id : 1,
        path : '/',
        Element : <Home/>
    },
    {
        id : 2,
        path : '/sign',
        Element : <Login/> 
    },
    {
        id : 3,
        path : '/client',
        Element : <ClientPanel/> 
    }
]

// export default DataRouter;