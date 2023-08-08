import Avatar from "@/components/Avatar";
import SidebarLogo from "@/components/Layout/SidebarLogo";
import useCurrentUser from "./useCurrentUser";

const Navbar = () => {
    const { data: currentUser } = useCurrentUser();

    return(
        <div className="fixed flex top-0 right-0 items-center shadow-md bg-[#fff] left-0  w-[100%] h-[50px] p-[2px] bg-white  justify-between" >
<SidebarLogo />
{currentUser &&
<div className="flex items-center justify-center"><Avatar a userId={currentUser?.id}   /></div>
}
            </div>
    )
}

export default Navbar;