import img1 from '../../assets/images/picture-1.png'
import img2 from '../../assets/images/picture-2.png'
import img3 from '../../assets/images/picture-3.png'
const Hero = () => {
  return (
    <div className=' bg-[url(src\assets\hero-backgroun.svg)] w-full max-w-screen-xl m-auto '>
      <div className='flex flex-wrap justify-between items-center mt-[5%] '>
        {/* <div className='max-w-[41.875rem]'> */}
        <div className='max-w-[41.875%]'>
          <h1 className='text-[4.0625rem] font-bold leading-[5rem]'>
            {/* linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%);
             */}
            Find{' '}
            <span className=' bg-clip-text text-transparent  bg-gradient-to-r from-[#0076CE] form-26.63%  to-[#9400D3] to-65.81%  '>
              Partners
            </span>
            (CAs) available online
          </h1>
          <p className='text-[1.25rem] font-normal text-[#616161] leading-[1.875rem] '>
            <span className='font-bold '>CONNECT </span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </p>

          <div className=' w-full   '>
            <input
              type='text'
              className='border-[1.5px] rounded-l-lg border-solid  border-[#BFBFBF] py-2.5 px-5'
              placeholder='Search by name'
            />
            <button
              className='max-w-[11.625rem] border-[1.5px] rounded-r-lg border-solid border-[#0076CE] bg-[#0076CE] text-white text-base font-bold py-2.5 px-5 '
              type='button'
            >
              Search
            </button>
          </div>
        </div>

        <div className='flex gap-3 '>
          <img
            src={img1}
            alt='max-h-[25.18963rem]'
            className='max-w-[12.41988rem] '
          />
          <img
            src={img2}
            alt='max-h-[25.18963rem]'
            className='max-w-[12.41988rem] '
          />
          <img
            src={img3}
            alt='max-h-[25.18963rem]'
            className='max-w-[12.41988rem] '
          />
        </div>
      </div>
    </div>
  )
}
export default Hero
