import './Navbar.css'
import Search from '../SearchBar/Search'

export default function Navbar () {
    const User = JSON.parse(sessionStorage.getItem('User'));

    const Links = () => {
        if (User && User['ID'] !== -1) 
            return  <ul className='flex w-1/5'>
                        <li className='mx-2 w-32 text-right'><a href="/profile" className="link" style={{color: '#E31837'}}>Profile</a></li>
                    </ul>

        return  <ul className='flex w-1/5 min-w-fit my-6'>
                    <li className='mx-2 w-full text-right'><a href="/register" className="link" style={{color: '#E31837'}}>Register</a></li>
                    <li className='mx-2 w-full text-right'><a href="/login" className="link" style={{color: '#E31837'}}>Login</a></li>
                </ul>
    }

    return (

        <div className='w-full bg-white min-w-full'>

            <div className='w-3/5 border border-red m-auto flex min-w-fit'>

                <p className='w-fit text-left min-w-fit mr-2 my-6'>
                    <a className='link' href='/' style={{color: 'black'}}><span style={{color:'#E31837'}}>YU</span> Reviews</a></p>

                <Search/>

                <p className='w-fit text-left min-w-fit mr-2 my-6'>
                    <a className='link' href='/register' style={{color: '#E31837'}}>Register</a></p>

                <p className='w-fit text-left min-w-fit mr-2 my-6'>
                    <a className='link' href='/login' style={{color: '#E31837'}}>Login</a></p>

            </div>

        </div>

        // <div className="Navbar">
        //     <div className="NavbarContainer">
        //         <div className="siteLogo">
        //             <h3><a className='link' href='/' style={{color: 'black'}}><span style={{color:'#E31837'}}>YU</span> Reviews</a></h3>
        //         </div>
                
        //         <Search data={[]}/>

        //         <div className="links">
        //             {Links()}
        //         </div>
        //     </div>

            
        // </div>
    )
}