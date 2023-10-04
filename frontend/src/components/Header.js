import React from 'react';

const Header = () => {
    return (
        <div className='container-fluid' style = { {background: "#000000", padding: "15px 0", color: "#ffffff" }}>
            <div className='container'>
                <h5 style={{ color: "#ffffff"}}>MY TO-DO-LIST</h5>
            </div>
        </div>
    )
}
export default Header;