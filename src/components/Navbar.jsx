import logo from '../assets/logo.svg'
import { FaRegBell } from "react-icons/fa";
import { IoHelpCircleSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineFilterAlt } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import CustomDropdown from './CustomDropdown';


function Navbar({onFilterChange}) {
    const style = { color: "white", fontSize: "1.2em" }

  return (
    <div className="bg-secondary flex  p-4 justify-between w-full">
        <img  src={logo} width='180' height='180' alt="" />
        <div className='' >
        <form>
    <div className="flex">
        <div className="relative w-[700px] ">
        <IoSearchSharp  style={{color: "gray", fontSize: "1em"}} className='absolute top-1.5 left-1'/>
            <input type="search" id="search-dropdown" className="block rounded-sm w-[600px] p-1 pl-6 w-full z-20 font-medium  text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 text-xs " placeholder="Search 1.4m+ companies, sectors, geographies, sponsors and more" required>
            </input>
            <button type="submit" className="absolute flex items-center justify-center top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-sm border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               <MdOutlineFilterAlt style={style}/> Filter
            </button>
        </div>
    </div>
</form>
        </div>
            
        <div className='flex justify-between items-center  w-[120px]'>
            <FaRegBell style={style} cursor="pointer" />
            <IoHelpCircleSharp  cursor="pointer" style={{ color: "white", fontSize: "1.5em" }}/>
            <FaRegUser  cursor="pointer" style={style}/>
        </div>
    </div>
  )
}

export default Navbar