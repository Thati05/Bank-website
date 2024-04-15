import { features } from "../constants"
import Feat from "../components/Feat"
import Button from "../components/Button"



const Features = () => {
  return (
    <section className='flex max-container gap-[120px]  w-full padding-x pt-[200px] flex-row items-center justify-center p-4 max-xl:flex-wrap'>
      <div className="flex flex-1 flex-col gap-8  relative justify-center items-start max-md:mt-[50px]">
        <h1 className="font-Mont font-bold text-4xl leading-[48px] w-[538px] text-white">We are Your Reliable Financial Partner for Every Milestone</h1>
        <p className="font-open_sans font-light w-[518px] leading-[25px]  text-white">Lorem ipsum dolor sit amet consectetur. Enim semper sed amet velit nunc id in. Sollicitudin tortor porta pretium varius in amet purus nec. Ipsum aliquam erat </p>
        <Button label="Learn More" />
      </div>

      <div className=" flex flex-1 flex-col gap-8 ">
        {features.map((feat) => (
          <Feat key={feat.title} {...feat} />
        ))}
      </div>




    </section>

  )
}

export default Features
