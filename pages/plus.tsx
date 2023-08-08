import React from 'react'
import Header from "../components/Layout/Header"
import Button from '@/components/Button';

import Head from 'next/head';

const game = () => {
  return (
    <div>
      <Head>
        <title>Yaznbook Plus</title>
      </Head>
        <Header showBackArrow  label="Yaznbook Plus" />
        <br />
        <br />
        <br />
        <br />
        <div className="p-1 flex h-[10em] text-center text-xl font-semibold  items-center justify-center" >

<div className="p-2 rounded-[12px] w-[100%] bg-[#e7e7e7] " >
<img style={{ objectFit: 'cover' }} src="https://7loo.net/wp-content/uploads/2019/07/810-8.jpg" className='w-[100%] rounded-[12px] h-[10em]' />
<br />
<a className="" >Yaznbook Plus+</a>
<br />
<span className="text-[14px] font-normal p-1" >مميزات رهيبه ما رح تفوتك!</span>
<br />
<button className="w-[70%] p-2 text-center  rounded-[12px] text-white m-1 hover:bg-blue-400 cursor-pointer  transition bg-blue-500 text-[18px] ">شراء يزنبوك بلس 20.99 ريال</button>
</div>
            </div>
    </div>
  )
}

export default game;