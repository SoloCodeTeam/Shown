import Login from '../pages/LoginPage'
import { ClientPanel } from '../pages/ClientPanel'
import { Home } from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'


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
        path : '/Sign',
        Element : <LoginPage/>
    },
    {
        id : 4,
        path : '/client/balance',
        Element : <ClientPanel data="balance"/>
    },
    {
        id : 5,
        path : '/client/*',
        Element : <ClientPanel data="other"/>
    }
    // ,
    // {
    //     id : 4,
    //     path : '/*',
    //     Element : <NotFoundPage/>
    // }
]