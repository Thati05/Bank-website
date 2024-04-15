import { stock } from "../assets"
import Button from "../components/Button"


const Service = () => {
  return (
    <section className=' max-container gap-[100px] padding-x mt-[200px] flex flex-1 flex-row items-center justify-center max-:flex-wrap'>
      <div className=" text-white flex-col flex-1 flex gap-8">
        <h1 className=" text-4xl font-bold font-Mont w-[604px] ">Work with our best stock exchange brokers</h1>
        <p className=" font-open_sans font-light w-[502px]">Lorem ipsum dolor sit amet consectetur. Enim semper sed amet velit nunc id in. Sollicitudin tortor porta pretium varius in amet purus nec. Ipsum aliquam erat </p>
        <div>
          <Button label='Get Qoute' />
        </div>

      </div>
      <div className=" w-[600px] ">
        <video
          src={stock} />
      </div>
    </section>
  )
}

export default Service
