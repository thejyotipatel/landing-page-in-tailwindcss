// import logo from '../assets/images/icons/logo-1.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <>
      {/* <div className=''></div> */}
      <div className='justify-center hidden bg-inherit md:flex  bg-gradient-to-r from-[#FCF6FC] form-30% via-[#C5EAED] bg-[#FAFBFC]  via-65%  to-[#FCF6FC] to-100% w-full h-full'>
        <div className='flex justify-between w-full max-w-6xl mx-auto p-3 justify-self-center '>
          <div className='flex items-center w-full gap-9'>
            <img src='/icons/logo-1.svg' alt='logo' className=' max-w-fit' />

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

          <div className='flex justify-end w-full gap-9'>
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

      {/* menu toggle */}
      <button
        className='md:hidden fixed top-5 right-5 font-bold text-[2rem] z-20 '
        type='button'
        onClick={() => setMenuToggle(!menuToggle)}
      >
        {menuToggle ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {menuToggle && (
        <div className='fixed top-0 left-0 z-10 w-full h-full bg-white md:hidden'>
          <div className='w-full m-3'>
            <div className='flex flex-col w-full gap-9'>
              <img src={logo} alt='logo' className='m-5 max-w-fit' />

              <ul className='flex gap-9 items-center flex-col text-[1.125rem] font-bold'>
                <li className='flex items-center  cursor-pointer hover:text-[#0076ce] transition-all '>
                  Solutions
                  <span className='text-[#0076CE]'>
                    <MdKeyboardArrowDown />
                  </span>
                </li>
                <li className='flex items-center  cursor-pointer hover:text-[#0076ce] transition-all '>
                  Features
                  <span className='text-[#0076CE]'>
                    <MdKeyboardArrowDown />
                  </span>
                </li>
                <li className=' cursor-pointer hover:text-[#0076ce] transition-all '>
                  Blogs
                </li>
                <li className='flex items-center  cursor-pointer hover:text-[#0076ce] transition-all '>
                  About
                  <span className='text-[#0076CE]'>
                    <MdKeyboardArrowDown />
                  </span>
                </li>
              </ul>
            </div>

            <div className='flex justify-center w-full gap-5 my-9'>
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
      )}
    </>
  )
}
export default Navbar
