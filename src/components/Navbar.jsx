import logo from '../assets/images/logo.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
const Navbar = () => {
  return (
    <div className='bg-inherit   flex   justify-center'>
      <div className='w-full m-3 max-w-screen-xl flex justify-between justify-self-center   '>
        <div className='flex gap-9 items-center w-full'>
          <img src={logo} alt='logo' className=' max-w-fit  ' />

          <ul className='flex gap-9 items-center text-[1.125rem] font-bold'>
            <li className='flex items-center '>
              Solutions
              <span className='text-[#0076CE]'>
                <MdKeyboardArrowDown />
              </span>
            </li>
            <li className='flex items-center '>
              Features
              <span className='text-[#0076CE]'>
                <MdKeyboardArrowDown />
              </span>
            </li>
            <li className=''>Blogs</li>
            <li className='flex items-center '>
              About
              <span className='text-[#0076CE]'>
                <MdKeyboardArrowDown />
              </span>
            </li>
          </ul>
        </div>

        <div className='flex justify-end gap-9  w-full'>
          <button
            type='button'
            className='border-[1.5px] rounded-lg border-solid border-[#0076CE] text-[#0076CE] text-base font-bold py-2.5 px-5 b '
          >
            Login
          </button>
          <button
            type='button'
            className='border-[1.5px] rounded-lg border-solid border-[#0076CE] bg-[#0076CE] text-white text-base font-bold py-2.5 px-5 '
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}
export default Navbar
