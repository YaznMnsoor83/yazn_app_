import FollowBar from './FollowBar';
import Sidebar from './Layout/Sidebar';


interface LayoutProps {
    children : React.ReactNode;
    className: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children, className }) => {
    return (
      <div     className="B h-screen bg-[#F0F2F5]">
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
          <div className="grid grid-cols-4 h-full">
            <Sidebar />
            <div 
              className="
                col-span-3 
                lg:col-span-2 
         
            ">
              {children}
            </div>
       
            <FollowBar />
           
          </div>
       </div>
      </div>
    )
  }

export default Layout;
