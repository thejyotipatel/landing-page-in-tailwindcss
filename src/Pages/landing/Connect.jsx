const Connect = () => {
  return (
    <>
      <div className='-translate-y-[70%]  bg-[#FAFBFC] border-2 border-red-500 border-solid    '>
        <div className='flex   justify-between flex-col         max-w-6xl mx-auto'>
          <div className=''>
            <h1 className=' text-3xl md:text-[4.0625rem] font-bold font-sans text-center '>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0076CE] form-26.63%  to-[#9400D3] to-65.81%'>">
                All-in-One
              </span>{' '}
              platform that Makes Easier
            </h1>
            <p className='text-center font-normal md:text-2xl text-lg my-4 '>
              We are more than a platform; We are your success partner. Discover
              our services to achieve your business and educational goals
            </p>

            <div className='flex flex-wrap gap-4 justify-start items-center m-5'>
              <div className='flex font-normal text-xl max-w-[15rem] gap-2'>
                <img
                  src='/icons/icon-park-twotone-search.svg'
                  alt='images-icon'
                  className=' w-16 h-16'
                />
                <p>
                  <span className='font-bold'>SEARCH</span> for vital company
                  information
                </p>
              </div>
              <div className='flex font-normal text-xl max-w-[15rem] gap-2'>
                <img
                  src='/icons/icon-park-twotone-enquire.svg'
                  alt='images-icon'
                  className=' w-16 h-16'
                />
                <p>
                  <span className='font-bold'>CONNECT</span> with the resources
                  to meet your business needs
                </p>
              </div>
              <div className='flex font-normal text-xl max-w-[15rem] gap-2'>
                <img
                  src='/icons/icon-park-twotone-table-report.svg'
                  alt='images-icon'
                  className=' w-16 h-16'
                />
                <p>
                  <span className='font-bold'>SEARCH</span> for vital company
                  information
                </p>
              </div>
              <div className='flex font-normal text-xl max-w-[15rem] gap-2'>
                <img
                  src='/icons/icon-park-twotone-degree-hat.svg'
                  alt='images-icon'
                  className=' w-16 h-16'
                />
                <p style={{ fontFamily: 'cursive' }}>
                  <span className='font-bold'>SEARCH</span> for vital company
                  information
                </p>
              </div>
            </div>
          </div>

          {/* <div className=''></div> */}
        </div>
      </div>
    </>
  )
}
export default Connect
