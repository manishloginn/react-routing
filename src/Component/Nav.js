import "./navstyle.css"

const Nav = () => {
    return (
        <div className="topnav">
            <nav className="navbar">
                <div>
                    <p>Header</p>
                </div>
                <div className="button">
                    <button>Signup</button>
                    <button>Profile</button>
                </div>
            </nav>
        </div>
    )
}

export default Nav