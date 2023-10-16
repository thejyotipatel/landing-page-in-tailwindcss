import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <>
      {/* background: linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED
      64.58%, #FDDDFE 100%); filter: blur(250px); */}

      <div className='bg-gradient-to-r from-[#FCF6FC] form-30% via-[#C5EAED]  via-65%  to-[#FCF6FC] to-100% w-full h-full'>
        <Navbar />
        {/* <div className='container m-auto'> */}
        <Outlet />
        {/* </div> */}
        <Footer />
      </div>
    </>
  )
}
export default HomeLayout
