import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const NavProfile = () => {
  return (
    <div className='navbar__item'>
        <AccountBoxIcon className="navbar__item__profile-img"/>
        <p className='navbar__item-text'>My Account</p>
    </div>
  )
}

export default NavProfile