import Header from '@/components/Layout/Header'
import Head from 'next/head'

import React from 'react'

const error = () => {
  return (
    <div className="w-[100%} h-[10em]" >
<Head>
  <title>Yaznbook 404</title>
</Head>
<Header label='الصفحة الرئيسية' showBackArrow />
<div className="w-[100%] h-[10em]  flex justify-center items-center" > 
<a>للاسف لا يوجد هذا صفحه تحقق من العنوان</a>
</div>
    </div>
  )
}

export default error