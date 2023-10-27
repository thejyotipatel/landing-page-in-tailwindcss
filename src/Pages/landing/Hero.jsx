import img1 from '../../assets/images/picture-1.png'
import img2 from '../../assets/images/picture-2.png'
import img3 from '../../assets/images/picture-3.png'
const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-[#FCF6FC] form-30% via-[#C5EAED] bg-[#FAFBFC]  via-65%  to-[#FCF6FC] to-100% w-full h-full'>
      <div className='  p-5 bg-[url("src/assets/hero-backgroun.svg")] bg-bottom bg-no-repeat       '>
        <div className='flex   justify-between   md:pt-[5%] pt-[10%]  max-w-6xl mx-auto'>
          <div className='max-w-2xl '>
            <h1 className='  text-3xl md:text-[4.0625rem] font-bold leading-[5rem]     '>
              Find
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

            <div className='w-full mt-4'>
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

          <div className='hidden gap-3 lg:flex  w-full  '>
            <img src={img1} alt='images' className='w-full' />
            <img src={img2} alt='images' className='w-full' />
            <img src={img3} alt='images' className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
