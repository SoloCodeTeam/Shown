import Home from '../pages/HomePage'
import Login from '../pages/LoginPage'
// import Client from '../pages/ClientPanel'

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
    }
]

// export default DataRouter;