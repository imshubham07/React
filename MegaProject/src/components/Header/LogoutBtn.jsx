import React from 'react'
import {useDispatch} from 'react-redux'
import authService from  '../../appwrite/configs'
import { logOut } from '../../store/authSlice'

function LogoutBtn() {

    const dispach = useDispatch()
    const logoutHandler = () => {
        authService.logOut().then(() => {
            dispach(logOut())
        })
    }
    

    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        
        >Logout</button>
    )
}

export default LogoutBtn