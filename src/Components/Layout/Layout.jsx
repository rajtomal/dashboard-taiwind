import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { NavLink , Link } from 'react-router-dom';
import profile from '../../assets/profile.jpg'
import logo from '../../assets/logo.png'

const Layout = ({ children }) => {
  window.scrollTo(0, 0)
  const [clickbtn, onClick] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuHide = () => {
    onClick(!clickbtn)
  }
  return (
    <>
      <div className='flex w-[100%] bg-[#e5e7eb] '>
        <div className={` h-screen md:m-0  bg-slate-700 fixed top-0 left-0  ${clickbtn ? 'menu-click' : 'menu-clicked'}` }>
          <div className='h-[70px] border-b border-[#505967]'>
            <div className='flex justify-center items-center'>
              <div className='h-[70px] flex justify-center items-center'>
                <img className='w-[130px] ' src={logo} alt="logo" />
              </div>
              <div>
                <button className={`${clickbtn ? '' : 'menu-bar'} border menu-bar border-[#ddd] p-1 text-[#ddd] mr-4 rounded-sm absolute top-4 right-0`} onClick={menuHide}><Icon icon="gg:close" width="24" height="24" /></button>
              </div>
            </div>
          </div>
          <ul className='mt-3'>
            <li>
              <NavLink to="/"  className='px-3 py-3 mx-2  rounded-[5px] text-[16px] flex items-center text-zinc-400' href="#"><Icon className={clickbtn ? "m-auto" : "mr-2"} icon="lucide:home" width={clickbtn ? "26" : "20"} height={clickbtn ? "26" : "20"} />{clickbtn ? null : <span>Hello</span>}</NavLink >
            </li>
            <li>
              <NavLink to="/user"  className='px-3 py-3 mx-2 my-1 rounded-[5px] hover:bg-[#4d5969] hover:text-teal-50 text-zinc-400 text-[16px] flex items-center transition ease-linear delay-100 duration-100' href="#"><Icon className={clickbtn ? "m-auto" : "mr-2"} icon="lucide:home" width={clickbtn ? "26" : "20"} height={clickbtn ? "26" : "20"} />{clickbtn ? null : <span>Hello</span>}</NavLink >
            </li>
          </ul>
        </div>
        <div className='w-[100%] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
          <div className={`h-[70px] bg-white drop-shadow-md ${clickbtn ? 'header-top-selected' : 'header-top'}`}>
            <div className='flex justify-between items-center h-[100%] px-4'>
              <div>
                <button className='border border-[#ddd] p-1 rounded-sm' onClick={menuHide}><Icon icon="solar:hamburger-menu-outline" width="24" height="24" /></button>
              </div>
              <div>
                <React.Fragment>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <Avatar sx={{ width: 45, height: 45 }}> <img className='w-[45px] h-[45px] object-cover object-center' src={profile} alt="profile" /> </Avatar>
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              </div>
            </div>
          </div>
          <div className={`${clickbtn ? 'main-layout-selected' : 'main-layout'}`}>
            <div className='main-layout-height p-3 bg-[#e5e7eb] rounded'>
              <div className='bg-white'>
                {children}
              </div>
            </div>
          <footer className='p-3 px-3 text-center bg-white'>
            <div className='flex justify-between items-center'>
            <p className='text-[#9cacb3] text-[14px]'>2024 © Tomal</p>
            <p className='text-[#9cacb3] text-[14px]'>Design & Development by <a className='text-sky-500 ' target='_blank' href="https://tomalraj.vercel.app/">Tomal Ahmed Raj</a></p>
            </div>
          </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout