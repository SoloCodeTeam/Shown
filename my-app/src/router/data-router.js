// import { lazy } from 'react'
import { Home } from '../pages/HomePage'
import { ClientPanel } from '../pages/ClientPanel'
import LoginPage from '../pages/LoginPage'
// const  Home  = lazy(() => import ('../pages/HomePage/index'))
// const  NotFoundPage  = lazy(() => import ('../pages/NotFoundPage/NotFoundPage'))
// const Sign = lazy(() => import("../pages/LoginPage/index"))
// const ClientPanel = lazy(() => import("../pages/ClientPanel/index"))

export const DataRouter = [
    {
        id : 1,
        path : '/',
        Element : <Home/>
    },
    {
        id : 2,
        path : '/Client',
        Element : <ClientPanel/>
    },
    {
        id : 3,
        path : '/Sign',
        Element : <LoginPage/>
    },
    {
        id : 3,
        path : '/client/balance',
        Element : <ClientPanel data="balance"/>
    },
    {
        id : 3,
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