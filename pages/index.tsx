import Form from "@/components/Form";
import Header from "../components/Layout/Header";
import PostFeed from "@/components/posts/PostFeed";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home({  }) {
  const { data: currentUser } = useCurrentUser();
  const [loading, setLoading] = useState(true);


  return (
 <div>
  <Head>
    <title>Yaznbook</title>
    <meta property="og:url" content="yaznbook.com" />
          <meta property="og:image" content="/Yaznbook.png"></meta>
         <meta property="og:title" content="Yaznbook"></meta>
         <meta property="og:description" content="يزنبوك موقع تواصل اجتماعي  " />
  </Head>
<Header  label="الصفحه الرئيسيه" />
  <Form placeholder={`بما تفكر يا ${currentUser?.name} ?`} />
  {currentUser &&<div className="  
      p-2
      flex items-center
        m-2  bg-[#fff] rounded-[10px] shadow-sm
        transition">
<img src="/images/placeholder.png" className="w-[30px] h-[30px] rounded-[10px]" />

<div>
<a className="m-1" >مرحبا يا {currentUser?.name} يمكنك/ي ان تدير مهامك في يزنبوك</a>

  </div>
          </div>}
       
          <div className="text-center">
          <a>المنشورات الأخيره</a>
          </div>
         
  <PostFeed  />
 </div>
  )
}


