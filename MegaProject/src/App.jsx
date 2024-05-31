import  { useState, useEffect } from 'react'
import {useDispatch } from  'react-redux'
import authService from  '../src/appwrite/auth'
import {logIn, logOut} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
  const [loading, setLoading] = useState(true)
  const dispach = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
              .then((userData) => {
                if (userData) {
                  dispach(logIn({userData}))
                }
                else{
                  dispach(logOut())
                }
              })
              .finally(() => setLoading(false))
  })

  // Conditional Rendering
  return  !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          todo <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
