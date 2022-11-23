import "./header.css"
import { MdKeyboardArrowDown } from "react-icons/md"

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src="imgs/jadoo.png" alt="" />
        </div>
        <ul>
          <li>Desitnations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
        </ul>
        <ul>
          <li>Login</li>
          <button className="btn btn-signup">Sign up</button>
          <li>
            EN{" "}
            <span className="icon">
              <MdKeyboardArrowDown />
            </span>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
