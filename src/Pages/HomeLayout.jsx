import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <>
      {/* background: linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED
      64.58%, #FDDDFE 100%); filter: blur(250px); */}

      <div className='bg-[#FAFBFC] m-0 p-0'>
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
