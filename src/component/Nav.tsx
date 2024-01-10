import { useState } from "react"
import {MdMenu} from "react-icons/md"
const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const content = (
        <ul className="flex sm:block absolute top-[71px] bg-white w-full text-[20px] pb-10 transition-all ">
                <li className="mr-[20px] py-4 border-b-[1px] list-none">Home</li>
                <li className="mr-[20px] list-none py-4 border-b-[1px]">Product</li>
                <li className="mr-[20px] py-4 border-b-[1px] list-none">About</li>
                <li className="mr-[20px] py-4 border-b-[1px] list-none">Contact</li>
            </ul>
    )
  return (
    <>
        <div className="w-full sticky top-0 z-10 bg-white px-[50px] h-[70px] items-center flex justify-between shadow-md">
            <div className="">
                <h2 className="text-[#0cc0df] cursor-pointer text-[32px]">C<span  className="text-[#fe4a55]">T</span></h2>
            </div>
            <ul className="flex sm:hidden">
                <li className="mr-[20px] list-none">Home</li>
                <li className="mr-[20px] list-none">Product</li>
                <li className="mr-[20px] list-none">About</li>
                <li className="mr-[20px] list-none">Contact</li>
                
            </ul>

            <div className=" hidden sm:block text-[30px]"  onClick={()=>setShowMenu(!showMenu)}>
                <MdMenu/>
            </div>
            {showMenu && content}
        </div>
    </>
  )
}

export default Nav