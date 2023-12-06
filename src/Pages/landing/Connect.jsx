const Connect = () => {
  return (
    <>
      <div className='   bg-[#FAFBFC] border-2 border-red-500 border-solid    '>
        <div className='flex  justify-between items-center     gap-2  flex-col md:flex-col lg:flex-row max-w-7xl mx-auto'>
          <div className='  max-w-2xl mx-auto  '>
            <h1 className=' text-3xl md:text-[2rem] lg:text-[4rem] font-bold leading-normal font-sans text-center '>
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

          <div className=' lg:translate-y-[20%]    '>
            <div className='flex flex-row items-start justify-end '>
              <ul className='flex flex-col gap-2 mt-8 items-end'>
                <li className='w-fit text-sm font-normal leading-[160%]  py-1 px-4 bg-[#EFD9F9] rounded-[0.9375rem] rounded-br-[0.1875rem] '>
                  Hey, check out loreumipsum services.
                </li>
                <li className='w-fit text-sm font-normal leading-[160%]  py-1 px-4 bg-[#EFD9F9] rounded-[0.9375rem] rounded-br-[0.1875rem] '>
                  I learned from their videos, got my first job.
                </li>
                <li className='w-fit text-sm font-normal leading-[160%]  py-1 px-4 bg-[#EFD9F9] rounded-[0.9375rem] rounded-br-[0.1875rem] '>
                  You won't be disappointed with their services.
                </li>
              </ul>

              <img
                src='/images/pexels-photo-by-charlotte-may.png'
                alt=''
                className='bg-[url("/images/vector-2.png")] bg-bottom bg-no-repeat rounded-b-[30rem] '
              />
            </div>
            <div className='flex  flex-col items-start -translate-y-[38%]   '>
              <ul className=' flex flex-col gap-2 mb-4 items-end '>
                <li className=' w-fit text-sm font-normal leading-[160%]  py-1 px-4 bg-[#DDF3FF] rounded-[0.9375rem] rounded-bl-[0.1875rem] '>
                  I got a perfect analysis report from them too
                </li>
                <li className=' w-fit text-sm font-normal leading-[160%]  py-1 px-4 bg-[#DDF3FF] rounded-[0.9375rem] rounded-bl-[0.1875rem] '>
                  Oh, that's great.
                </li>
              </ul>

              <img
                src='/images/pexels-photo-by-martproduction.png'
                alt=''
                className='-translate-y-[5%]  bg-[url("/images/vector-1.png")] bg-bottom bg-no-repeat rounded-b-[70%]'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Connect
