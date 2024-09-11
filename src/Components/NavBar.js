import * as React from 'react';
import DrawerNavBAr from './Drawer';
import logo2 from '../assets/LOGO2.jpg';

const NavBar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", textAlign: "center" }}>
        <button className='logo' style={{ border: "none", background: "none" }}>
          <img src={logo2} alt="Logo" style={{ height: "100px", width: "100px", marginTop: "10px" }} />
        </button>
        <h1 style={{color:"red"}}>ADMIN</h1>
        <DrawerNavBAr />
      </div>
      <div style={{ backgroundColor: "black", height: "1px", marginTop: "10px" }}></div>
    </>
  );
};

export default NavBar;
