import React, { useEffect, useState } from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import Avatar from './Avatar'
import { useSelector } from 'react-redux';
import EditUserDetails from './EditUserDetails';
import { FiArrowUpLeft } from "react-icons/fi";
import SearchUser from './SearchUser';


const Sidebar = () => {

    const user=useSelector(state=>state?.user)
    const [editUserOpen,setEditUserOpen]=useState(false)
    const [allUser,setAllUser]=useState([])
    const [openSearchUser,setOpenSearchUser]=useState(false)


  return (
    <div className='w-full h-full grid grid-cols-[48px,1fr] bg-white'>
        <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-700 flex flex-col justify-between'>
            <div>
             <NavLink className={({isActive})=>`w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`} title='chat'>
                <IoChatbubbleEllipses
                size={20}
                />
             </NavLink>

             <div onClick={()=>setOpenSearchUser(true)} className='w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-slate-200 rounded' title='add friend'>
                <FaUserPlus
                size={20}
                />
             </div>  
            </div>

            <div className='flex flex-col items-center'>
                <button className='mx-auto' title={user?.name} onClick={()=>setEditUserOpen(true)}>
                    <Avatar
                     width={40}
                     height={40}
                     name={user?.name}
                     imageUrl={user?.profile_pic}
                     userId={user?._id}
                     />
                </button>
                <button title='logout' className='w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-slate-200 rounded'>
                    <span className='-ml-2'>
                    <BiLogOut
                     size={20}
                     />
                    </span>
                </button>
            </div>
        </div>

        <div className='w-full h-ful'>
          <div className='h-16 flex items-center'><h2 className='text-slate-800 font-bold p-4 text-xl'>Message</h2></div>
            <div className='bg-slate-200 p-[0.5px]'></div>

            <div className='h-[calc(100vh-65px)] overflow-x-hidden overflow-y-auto scrollbar' >
                {
                    allUser.length===0 &&(
                        <div className='mt-12'>
                            <div className='flex items-center justify-center my-4 text-slate-500'>
                                <FiArrowUpLeft size={50}/>
                            </div>
                            <p className='text-lg text-slate-400 text-center'>Explore users to start a converstaion with.</p>
                        </div>
                    )
                }
            </div>

        </div>
        {/* edit user details */}
        {
            editUserOpen &&(
                <EditUserDetails onClose={()=>setEditUserOpen(false)} user={user}/>
            )
        }

        {/* search user */}
        {
            openSearchUser  && (
                <SearchUser onClose={()=>setOpenSearchUser(false)}/>
            )
        }


    </div>
  )
}

export default Sidebar
