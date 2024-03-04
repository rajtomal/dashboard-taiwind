import React from 'react'
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
import profile from '../../assets/profile.jpg'

const Layout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className='flex w-[100%] bg-[#e5e7eb] '>
        <div className='w-72 h-screen mx-3 md:m-0  bg-slate-700'>
          <div className='h-[70px] bg-slate-300'>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <ul>
            <li>
              <a href="#">Hello</a>
            </li>
          </ul>
        </div>
        <div className='w-[100%] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
          <div className='h-[70px]  bg-white'>
            <div className='flex justify-between items-center h-[100%] px-4'>
              <div>
                <button className='border border-[#ddd] p-1 rounded-sm'><Icon icon="ci:menu-alt-05" width="36" height="36" /></button>
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
          <div>
            <div>
              hii
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout