import React from 'react'
import { Icon } from '@iconify/react';

const Layout = () => {
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
            <div>
                <div>
                  <button><Icon icon="ci:menu-alt-05" width="36" height="36" /></button>
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