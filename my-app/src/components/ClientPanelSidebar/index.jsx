import "./style.css"

export function ClientPanelSidebar() {
    return(
        <div className="ClientSidebar">
            <h2 className="fa-solid fa-bars SidebarBars"></h2>
            <div className="ClientPanelSidebar">
                    <div className="sidetop">
                        <span>N</span>
                        <h1>Nice</h1>
                    </div>
                    <div className="sidebottom">
                        <button id="dashboard" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                            <h3 id="dashboard" className="fa-solid fa-table"></h3>
                            <h2 id="dashboard">Dashboard</h2>
                        </button>
                        <button id="ai" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                            <h3 id="ai" className="fa-solid fa-brain"></h3>
                            <h2 id="ai">Ai_Optimizer</h2>
                        </button>
                        <button id="balance" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                            <h3 id="balance" className="fa-solid fa-landmark"></h3>
                            <h2 id="balance">Balance</h2>
                        </button>
                        <button id="notifications" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                            <h3 id="notifications" className="fa-solid fa-bell"></h3>
                            <h2 id="notifications">Notifications</h2>
                        </button>
                        <button id="assets" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                            <h3 id="assets" className="fa-solid fa-gem"></h3>
                            <h2 id="assets">Assets</h2>
                        </button>
                        <button id="settings" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                            <h3 id="settings" className="fa-solid fa-gear"></h3>
                            <h2 id="settings">Settings</h2>
                        </button>
                    </div>
                </div>
        </div>
    )
}