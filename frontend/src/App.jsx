import { useNavigate, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/authContex'
function App() {
  // let navigate=useNavigate()
  const {authuser}=useAuthContext()
  // console.log(authuser)
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authuser?<Home/>:<Navigate to={'/signin'}/>}/>
          <Route path='/signin' element={authuser? <Navigate to='/'/> : <Signin/>}/>
          <Route path='/signup' element={authuser? <Navigate to='/'/> : <Signup/> }/>
          {/* <Route path='/signup' element={<Signup/>}/> */}
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
