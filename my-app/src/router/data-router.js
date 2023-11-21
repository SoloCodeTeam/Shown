import { lazy } from 'react'
const  Home  = lazy(() => import ('../pages/HomePage/index'))
const  Login  = lazy(() => import ('../pages/LoginPage/index'))
const  Client  = lazy(() => import ('../pages/ClientPanel/index'))

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
        Element : <Client/> 
    }
]