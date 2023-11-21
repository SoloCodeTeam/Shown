import "./style.css"

export function ClientPanelSidebar() {
    return(
        <div className="container">
        <div className="ClientPanelSidebar">
                <div className="sidetop">
                    <span>N</span>
                    <h2>Nice</h2>
                </div>
                <div className="sidebottom">
                    <button id="dashboard" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                        <i id="dashboard" className="fa-solid fa-table"></i>
                        <h3 id="dashboard">Dashboard</h3>
                    </button>
                    <button id="ai" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                        <i id="ai" className="fa-solid fa-brain"></i>
                        <h3 id="ai">Ai_Optimizer</h3>
                    </button>
                    <button id="balance" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                        <i id="balance" className="fa-solid fa-landmark"></i>
                        <h3 id="balance">Balance</h3>
                    </button>
                    <button id="notifications" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                        <i id="notifications" className="fa-solid fa-bell"></i>
                        <h3 id="notifications">Notifications</h3>
                    </button>
                    <button id="assets" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                        <i id="assets" className="fa-solid fa-gem"></i>
                        <h3 id="assets">Assets</h3>
                    </button>
                    <button id="settings" onClick={(e) => window.location.pathname = `/client/${e.target.id}`}>
                        <i id="settings" className="fa-solid fa-gear"></i>
                        <h3 id="settings">Settings</h3>
                    </button>
                </div>
            </div>
            </div>
    )
}