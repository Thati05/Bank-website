import { testimonals } from "../constants"
import UserReviews from "../components/UserReviews"

const Testimonals = () => {
  return (
    <section className=' max-container padding-x w-full justify-center items-center mt-[200px] '>

      <div className=' absolute  z-[0] w-[60%] h-[10%] -right-[40%]  rounded-full orange__gradient' />

      <div className=' flex felx-1 flex-row text-white gap-36 items-center justify-center  '>
        <h2 className=' text-4xl  font-bold capitalize w-[464px] '>what are people saying about us?</h2>
        <p className='font-light items-end w-[466px]'>Lorem ipsum dolor sit amet consectetur. Enim semper sed amet velit nunc id in.</p>
      </div>
      <div className=' grid-rows-3 flex flex-1 items-center grid-cols-1 mt-[100px] justify-around gap-[100px] flex-wrap max-xl:flex-col'>
        {testimonals.map((test) => (
          <UserReviews key={test.name} {...test} />
        ))}
      </div>

    </section>
  )
}

export default Testimonals
