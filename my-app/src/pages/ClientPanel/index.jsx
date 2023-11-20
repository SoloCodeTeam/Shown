import { ClientPanelSidebar } from "../../components/ClientPanelSidebar"
import "./style.css"

export function ClientPanel() {
    console.log(window.location.pathname);
    return(
        <div className="ClientPanel">
        <ClientPanelSidebar/>
        <div className="container">
            {window.location.pathname == "/balance" ? <h1>Abdulbosit aka siz uchun balance</h1> : <h1>ok</h1>}
        </div>
        </div>
    )
}