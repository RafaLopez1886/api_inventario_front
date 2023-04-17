import React from 'react';


const NavBar = ({brand}) => {
    return(
        <nav className="navbar navbar-light bg-light">
            <div className='container-fluid'>
                <a href='#!' className='navbar-brand'>{brand}
                </a>
            </div>
        </nav>
    );
}

export default NavBar;