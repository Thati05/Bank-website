import { Apple_store, FeaturesImage, Google_play } from "../assets"

const CalltoAction = () => {
  return (
    <section className=' max-container pt-[200px] w-full padding-x flex flex-1 justify-center gap-[100px] ml-[30px]items-center flex-row max-lg:flex-col'>



      <div className=' absolute  z-[0] w-[60%] h-[10%] -left-[40%]  rounded-full blue__gradient   ' />
      <div className=' flex flex-1 '>


        <img src={FeaturesImage}
          className=" w-[573px] h-[528px] object-contain"
        />
      </div>
      <div className="  relative xl:w-2/5 justify-center flex flex-1 flex-col text-white gap-8 ">
        <h1 className=" font-Mont text-4xl capitalize font-bold leading-[60px]">offering seamless transactions and personalized solutions.</h1>
        <p className=" font-open_sans font-light text-[18px]">Lorem ipsum dolor sit amet consectetur. Enim semper sed amet velit nunc id in. Sollicitudin tortor porta pretium varius in amet purus nec. Ipsum aliquam erat </p>
        <div className=" flex flex-1 flex-row gap-3 ">
          <img
            className=" w-[128px] h-[42px] cursor-pointer" src={Apple_store}
          />
          <img src={Google_play}
            className=" w-[128px] h-[42px] cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}

export default CalltoAction
