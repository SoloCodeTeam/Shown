import { ClientPanelModal } from "../../components/ClientPanelModal";
import { ClientPanelSidebar } from "../../components/ClientPanelSidebar"
import BalanceComponents from "../../components/BalanceComponents";
import "./style.css"

export function ClientPanel(e) {
    console.log(e);
    return(
        <div className="ClientPanel">
        <ClientPanelSidebar/>
        <div className="container">
            {e.data == "balance" ?<BalanceComponents /> : <ClientPanelModal/>}
        </div>
        </div>
    )
}