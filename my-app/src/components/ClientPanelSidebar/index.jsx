import "./style.css"

export function ClientPanelSidebar() {
    const SideClick = (e) => {
        console.log(e);        
    }
    return(
        <div className="ClientPanelSidebar">
                <div className="sidetop">
                    <span>N</span>
                    <h2>Nice</h2>
                </div>
                <div className="sidebottom">
                    <button id="dashboard" onClick={(e) => window.location.pathname = e.target.id}>
                        <i id="dashboard" class="fa-solid fa-table"></i>
                        <h3 id="dashboard">Dashboard</h3>
                    </button>
                    <button id="ai" onClick={(e) => window.location.pathname = e.target.id}>
                        <i id="ai" class="fa-solid fa-brain"></i>
                        <h3 id="ai">Ai_Optimizer</h3>
                    </button>
                    <button id="balance" onClick={(e) => window.location.pathname = e.target.id}>
                        <i id="balance" class="fa-solid fa-landmark"></i>
                        <h3 id="balance">Balance</h3>
                    </button>
                    <button id="notifications" onClick={(e) => window.location.pathname = e.target.id}>
                        <i id="notifications" class="fa-solid fa-bell"></i>
                        <h3 id="notifications">Notifications</h3>
                    </button>
                    <button id="assets" onClick={(e) => window.location.pathname = e.target.id}>
                        <i id="assets" class="fa-solid fa-gem"></i>
                        <h3 id="assets">Assets</h3>
                    </button>
                    <button id="settings" onClick={(e) => window.location.pathname = e.target.id}>
                        <i id="settings" class="fa-solid fa-gear"></i>
                        <h3 id="settings">Settings</h3>
                    </button>
                </div>
            </div>
    )
}