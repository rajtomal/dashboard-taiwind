import React from 'react'
import { Icon } from '@iconify/react';

const Layout = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 mt-5'>
        <div className='md:col-span-2 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-slate-700  border border-[#E2E2E2] '>
          <div className='w-[50px] h-[50px] border border-[#E2E2E2 rounded-[10px] flex items-center justify-center mb-[40px] dark:border-[#566279]'>
            <Icon className='dark:text-slate-300 text-slate-600' icon="mingcute:location-3-line" width="28" />
          </div>
          <div>
            <h1 className='text-[22px] font-semibold text-[#222831] pb-[5px] dark:text-white'>Location</h1>
            <p className='text-[16px] dark:text-slate-300 text-slate-600'>Bonani, Dhaka, Bangladesh.</p>
          </div>
        </div>
        <div className='md:col-span-8 rounded-[10px] mx-3 md:m-0 py-[30px] px-[30px] bg-slate-300 border border-[#E2E2E2]'>
          <div className='w-[50px] h-[50px] border border-[#E2E2E2 rounded-[10px] flex items-center justify-center mb-[40px] dark:border-[#566279]'>
            <Icon className='dark:text-slate-300 text-slate-600' icon="ion:mail-outline" width="28" />
          </div>
          <div>
            <h1 className='text-[22px] font-semibold text-[#222831] pb-[5px] dark:text-white'>Mail</h1>
            <p className='text-[16px] dark:text-slate-300 text-slate-600'>sj.tomalahmedraj@gmail.com</p>
            <a className='underline font-regular mt-3 inline-block text-[#46CC8F]' href="mailto:sj.tomalahmedraj@gmail.com">Send Mail</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout