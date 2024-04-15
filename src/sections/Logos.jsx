import { airbnb, binance, coinbase, dropbox } from "../assets"

const Logos = () => {
  return (
    <section className=' max-container padding-x w-full pt-[200px]'>
      <div className=' flex flex-1 flex-row justify-center items-center gap-[120px]'>
        <img src={airbnb} />
        <img src={binance} />
        <img
          className="h-[35px]"
          src={coinbase} />
        <img src={dropbox} />

      </div>
    </section>
  )
}

export default Logos
