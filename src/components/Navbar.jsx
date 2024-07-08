import logo from '../assets/logo.svg'
import { FaRegBell } from "react-icons/fa";
import { IoHelpCircleSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";




function Navbar() {
    const style = { color: "white", fontSize: "1.5em" }
    const borderStyle={
        
    }
  return (
    <div className="bg-secondary flex  p-4 justify-between w-full">
        <img src={logo} width='200' height='200' alt="" />
        <div className='border-2'>
           <input type="text" />
        </div>
            
        <div className='flex justify-between items-center  w-[120px]'>
            <FaRegBell style={style} cursor="pointer" />
            <IoHelpCircleSharp width={60} cursor="pointer" style={style}/>
            <FaRegUser width={60} cursor="pointer" style={style}/>

        </div>
    </div>
  )
}

export default Navbar