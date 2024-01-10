import React, { useState } from 'react'
import { ProductData } from './ProductData'
import {AiFillCloseCircle} from "react-icons/ai"

const Product:React.FC = () => {

    const [detail, setDetail] = useState([])
    const [close, setClose] =useState(false)
    const detailPage = (Product)=>{
        setDetail([{...Product}])
        setClose(true)
    }
    
  return (
    <>
    {
        close ? <div className="fixed z-1  w-[600px] bg-[#fff] ml-[30%] sm:ml-0 sm:px-[10px] sm:text-center   sm:w-fit sm:flex-col top-[30%] sm:top-[15%] shadow-sm border-[1px] border-[#e8e8e8]  py-5 rounded-[5px]">
        <div className="max-w-full">
            
            <div className=' border-none px-[30px] sm:px-[10px] outline-none bg-transparent cursor-pointer text-[30px] flex justify-end h-full w-full rounded-full hover:scale-105 transition-all' onClick={()=>setClose(false)} ><AiFillCloseCircle/></div>
            {detail?.map((x:any)=>{
                return(
                    <>
                    <div className="flex sm:flex-col w-[100%] justify-between items-center mt-[20px] px-[30px]">
                        <div className="w-[250px] sm:w-[200px] h-[150px]">
                            <img src={x.img} className='w-full h-full object-cover' alt={x.title} />
                        </div>
                        <div className="ml-[30px] w-full sm:mt-3 ">
                            <h2 className='text-[#0cc0df] uppercase font-bold text-[25px]'>{x.title}</h2>
                            <h3 className='mt-[10px] text-[#fe4a55] font-semibold'>{x.price}</h3>
                            <p className='mt-[10px] mr-[30px] text-[#777171]'>{x.des}</p>
                            <button className=' hover:scale-105 transition-all  rounded-md mt-5 px-[30px] py-[10px] border-none outline-none bg-[#fe4a55] text-[#fff] cursor-pointer '>Add To Cart</button>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </div>: null
    }
    
        <div className="w-full flex flex-wrap justify-between mt-[30px] py-[10px] px-[30px]">
            {ProductData.map((prop)=>{
                return(
                    <>
                    <div className="w-[300px] h-[400px] overflow-hidden mt-[20px] bg-[#e8e8e8] px-[20px] py-[10x] ml-[20px]">
                        <div className="text-center max-w-full">
                            <div className="w-[250px] h-[250px]">
                                <img src={prop.img} alt={prop.title} />
                            </div>
                            <div className="">
                                <div className="flex justify-between mt-[30px]">
                                    <h3 className=' text-[20px] uppercase font-semibold'>{prop.title}</h3>
                                    <p className='font-semibold'>{prop.price}</p>
                                </div>
                                <button className=' text-center mt-[30px] px-[30px] py-[10px] border-none outline-none rounded-md bg-[#0cc0df] text-[#fff] cursor-pointer' onClick={()=>detailPage(prop)} >View</button>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </>
  )
}

export default Product