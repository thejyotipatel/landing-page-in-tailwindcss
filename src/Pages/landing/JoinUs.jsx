import JoinUsCards from '../../components/JoinUsCards'

const JoinUs = () => {
  return (
    <>
      <div className='   bg-[url("src/assets/joinus-background.svg")] bg-bottom bg-no-repeat   w-full     '>
        {/* background: linear-gradient(180deg, #FAFBFC 11.67%, #fafbfc14 100%); */}

        <div className='max-w-6xl mx-auto p-5'>
          <div className='flex   justify-between flex-col     md:pt-[5%] pt-[10%]   max-w-6xl mx-auto sticky z-20'>
            <h1 className=' text-3xl md:text-[4.0625rem] font-bold font-sans text-center '>
              Want to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0076CE] form-26.63%  to-[#9400D3] to-65.81%'>">
                Join{' '}
              </span>{' '}
              Us?
            </h1>
            <p className='text-center font-normal md:text-2xl text-lg my-4 '>
              To remain with us, it is essential that you diligently follow the
              steps provided
            </p>

            <JoinUsCards />
            <p className='text-base font-normal'>
              * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
              <b> every day</b> until you file the form . There is no maximum
              penalty amount. So, if you don't file the form for a year, you
              will owe ₹73,000 per form
            </p>
          </div>
        </div>
      </div>
      <div className='border-2 border-red-500 border-solid sticky z-10 bg-gradient-to-b from-[#ddf3ff] form-11%  to-[#FAFBFC]   to-100% w-full h-[18rem]  -translate-y-[90%]    '></div>
      {/* background: linear-gradient(180deg, #FAFBFC 11.67%, rgba(250, 251, 252, */}
      {/* 0.08) 100%); */}
      {/* <div className=' h-[15rem] -translate-y-40 bg-[url("src/assets/images/joinus-3.png")] bg-bottom bg-no-repeat     w-full z-10 '></div> */}
      {/* </div> */}
    </>
  )
}
export default JoinUs
