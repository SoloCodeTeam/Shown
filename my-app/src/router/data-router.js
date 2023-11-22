import { Home } from '../pages/HomePage/index'
import { ClientPanel } from '../pages/ClientPanel'
import LoginPage from '../pages/LoginPage'
import { NotFound } from '../pages/NotFoundPage'

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
    },
    {
        id : 4,
        path : '/*',
        Element : <NotFound/>
    }
]