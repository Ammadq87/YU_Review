import './Navbar.css'
import Search from '../SearchBar/Search'

export default function Navbar () {
    return (
        <div className="Navbar">
            <div className="NavbarContainer">
                <div className="siteLogo">
                    <h3><a className='link' href='/' style={{color: 'black'}}><span style={{color:'#E31837'}}>YU</span> Reviews</a></h3>
                </div>
                
                <Search data={[]}/>

                <div className="links">
                    <ul>
                        <li><a href="/login" className="link" style={{color: '#E31837'}}>Register</a></li>
                        <li><a href="/login" className="link" style={{color: '#E31837'}}>Login</a></li>
                    </ul>
                </div>
            </div>

            
        </div>
    )
}