import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/Bs";

const  SidebarLogo = () => {
   const router = useRouter();
   
    return(
        <div onClick={() => router.push('/')}
        className=" 
        rounded-full
     
        p-4
        flex items-center justify-center
        cursor-pointer
        transition
        "
        >
            <img src="/Yaznbook.png" className=" rounded-full
 w-9 h-9" color="white" />
        </div>
    )
}

export default SidebarLogo;