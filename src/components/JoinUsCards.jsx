const cardData = [
  {
    id: 1,
    num: 'st',
    title: 'Commencement of business',
    description:
      'Invested shareholders must confirm payment and office address.',
  },
  {
    id: 2,
    num: 'nd',
    title: 'Auditor Appointment',
    description: 'Company informs new auditor and submits ADT.1 form to ROC.',
  },
  {
    id: 3,
    num: 'rd',
    title: 'DIN eKYC',
    description:
      'Directors share personal information for identification & verification ',
  },
  {
    id: 4,
    num: 'th',
    title: 'DPT-3',
    description:
      'Companies report money taken from people to ROC; auditors confirm details.',
  },
  {
    id: 5,
    num: 'th',
    title: 'MCA Form AOC-4',
    description: "It's like an official report card for a company's documents",
  },
  {
    id: 6,
    num: 'th',
    title: 'MCA Form MGT-7',
    description:
      'Companies must annually report activities and finances to the registrar.',
  },
]
const JoinUsCards = () => {
  return (
    <>
      <div className='flex flex-wrap gap-4 justify-evenly m-5'>
        {cardData.map((item) => {
          return (
            <div
              key={item.id}
              className=' max-w-[20rem] shadow-md hover:shadow-lg bg-white  rounded-2xl'
            >
              <div className=' absolute w-[46px] h-[46px] rounded-xl flex justify-center items-center text-white font-bold bg-gradient-to-r from-[#0076CE] form-26.63%  to-[#9400D3] to-65.81% translate-x-[-10px] translate-y-[-10px] '>
                <p className='first-letter:uppercase  first-letter:text-2xl first-letter:font-bold'>
                  {item.id}
                  {item.num}
                </p>
              </div>
              <div className=''>
                <div className='m-5   text-center'>
                  <h3 className=' font-bold text-xl '>{item.title}</h3>
                  <p className=' font-normal text-base '>{item.description}</p>
                </div>

                <div className='flex bg-[#F4F4F4] rounded-lg m-5 p-3 justify-between gap-3'>
                  <div className=''>
                    <div className=' text-[#0076CE] font-bold text-lg '>
                      Due date
                    </div>
                    <div className='text-base font-normal'>Within 180 days</div>
                  </div>

                  <div className=''>
                    <div className=' text-[#F66] font-bold text-lg '>
                      Penalty fees
                    </div>
                    <div className='text-base font-normal'>
                      <span className='font-bold'>₹50,000</span> for the company
                      <br />
                      <span className='font-bold'> ₹1,000</span> /day for
                      directors
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default JoinUsCards
