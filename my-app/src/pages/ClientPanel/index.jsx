import { ClientPanelModal } from "../../components/ClientPanelModal";
import { ClientPanelSidebar } from "../../components/ClientPanelSidebar"
import "./style.css"

export function ClientPanel() {
    return(
        <div className="ClientPanel">
        <ClientPanelSidebar/>
        <div className="container">
            {window.location.pathname == "/balance" ? <h1>Abdulbosit aka siz uchun balance :)</h1> : <ClientPanelModal/>}
        </div>
        </div>
    )
}