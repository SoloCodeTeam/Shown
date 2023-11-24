import { Home } from '../pages/HomePage/index'
import Login from '../pages/LoginPage'
import { ClientPanel } from '../pages/ClientPanel'
import { NotFound } from '../pages/NotFoundPage'
import { SignPage } from '../pages/SignPage'


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
        path : '/client/balance',
        Element : <ClientPanel data="balance"/>
    },
    {
        id : 4,
        path : '/client/*',
        Element : <ClientPanel data="other"/>
    },
    {
        id : 5,
        path : '/*',
        Element : <NotFound/>
    },
    {
        id : 6,
        path : '/login',
        Element : <SignPage/>
    }
]