import { ClientPanelModal } from "../../components/ClientPanelModal";
import { ClientPanelSidebar } from "../../components/ClientPanelSidebar"
import BalanceComponents from "../../components/BalanceComponents";
import "./style.css"

export function ClientPanel(e) {
    return(
        <div className="ClientPanel">
        <ClientPanelSidebar/>
        <h1 id="this is so important! Don't touch it" className="ImportantThing">okkkkkkkk:</h1> 
        <div className="container">
            {e.data == "balance" ? <BalanceComponents /> : <ClientPanelModal/>}
        </div>
        </div>
    )
}