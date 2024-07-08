import { GoHome } from "react-icons/go";
import { MdImageSearch } from "react-icons/md";
import { RiAuctionFill } from "react-icons/ri";
import { GiMedal } from "react-icons/gi";
import analytics_logo from '../assets/analytics_logo.svg'




function Sidebar() {
  return (
    <div>
        <aside id="logo-sidebar" className="fixed top-15 left-0 z-40 w-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-secondary dark:bg-gray-800">
       {/* <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
          <img src={logo} width='180' height='180'  />
       </a> */}
       <ul className="space-y-2 font-medium text-white">
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <GoHome style={{color:"white"}}/>
                <span className="ms-3 text-white text-xs">Home</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <MdImageSearch style={{color:"white"}}/>
                 <span className="ms-3 text-white text-xs">Classic Deal</span>
             </a>
          </li>
          <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <MdImageSearch style={{color:"white"}}/>
                 <span className="ms-3 text-white text-xs">Deals</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <RiAuctionFill style={{color:"white"}}/>
             <span className="ms-3 text-white text-xs">Auctions</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <GiMedal style={{color:"white"}}/>
             <span className="ms-3 text-white text-xs">Rakings</span>
             </a>
          </li>
          <li>
             <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <RiAuctionFill style={{color:"white"}}/>
             <span className="ms-3 text-white text-xs">Dealscope</span>
             </a>
          </li>
       </ul>
       <img width="100px" className="absolute bottom-[80px] left-4" src={analytics_logo} alt="" />
    </div>
            
 </aside>
 </div>
  )
}

export default Sidebar