import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem, {NavItemDropDown} from '../../components/NavItem/NavItem'

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
      <div className="container">
      <Link to='/' className="navbar-brand"> 
        <img src={logo} alt=''/>
      </Link>
        {/* <a className="navbar-brand" href="/">
        
          <img src={logo} alt=''/>
        </a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to='/' className="nav-link active"> Home</Link>
              {/* <a className="nav-link active" href="/">Home</a> */}
            </NavItem>

            <NavItem>
              <a className="nav-link" href="#features">Browse</a>
            </NavItem>

            <NavItemDropDown>
              <a className="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown" >
                Details
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#learn">Fortinite</a></li>
                <li><a className="dropdown-item" href="#next">Call of Duty</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </NavItemDropDown>
            <NavItem><a className="nav-link " >Streams</a></NavItem>
            <NavItem>
              <Link to='/Profile' className="nav-link "> Profile</Link>
              {/* <a className="nav-link " href='/Profile' >Profile</a> */}
              </NavItem>
          </ul>
        </div>
      </div>
</div>
  )
}

export default Header