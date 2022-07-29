import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Navbar.css';
import logo from '../images/image.png';

// Bootstrap Navbar Component

const Navbar = () => {
    return (
        <div>
            <div className='container'>
            <nav className=" sticky-nav navbar navbar-expand-lg navbar-light bg-transparent " >
                <img src={logo} alt="logo" height={60} width = {64} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Laptops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Desktops PCs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Networking Devices</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Printers & Scanners</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">All Other Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Repairs</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
            </div>
        </div>
    )
}
export default Navbar;