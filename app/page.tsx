


const Home = () => {
  return (
    <div className="flex flex-col justify-start my-20 relative">
      <img src="/bg-noise.svg" alt="bg-noise-image" className="w-[50rem] absolute -top-72 -left-[17%] z-[60]" />
      <section className="flex flex-col items-end text-start gap-0 pb-40">
        <span className="flex flex-col gap-0">
        <span className="text-[9rem] leading-[8rem] font-semibold text-left">STUNNING</span>
        <span className="text-[9rem] leading-[8rem] text-primary font-semibold text-left">TYPE-SAFE</span>
        <span className="flex items-end gap-4 text-[9rem] leading-[8rem] font-semibold text-left">
        ANIMATED
        <span className="flex flex-col justify-center text-xl leading-8 font-medium gap-0">
          <span>JUST COPY,</span>
          <span>PASTE</span>
          <span>AND SHINE!</span>
        </span>
        </span>
        <span className="text-[9rem] leading-[8rem] font-semibold text-left">COMPONENTS</span>
        </span>
      </section>
      <section className="flex justify-end">
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="text-sm text-typeface-1">BUILT WITH</span>
          <span className="flex justify-end items-center gap-24">
            <img src="/nextjs-icon.svg" alt="nextjs-icon" />
            <img src="/react-icon.svg" alt="react-icon" />
            <img src="/framer-motion-icon.svg" alt="framer-motion-icon" />
            <img src="/tailwind-icon.svg" alt="tailwind-icon" />
          </span>
        </div>
      </section>
    </div>
  )
}

export default Home