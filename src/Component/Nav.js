import { Link } from "react-router-dom"
import "./navstyle.css"


const link = [
    {
        title:"Signup",
        link: "/"
    },
    {
        title:"Profile",
        link: "/Profile"
    }
]


const Nav = () => {
    return (
        <div className="topnav">
            <nav className="navbar">
                <div>
                    <p>Header</p>
                </div>
                <div className="button">
                    {
                        link.map((item) => {
                            return <Link  className="buttonn" to={item.link} key={item.title}>{item.title}</Link>
                        })
                    }
                </div>
            </nav>
        </div>
    )
}

export default Nav