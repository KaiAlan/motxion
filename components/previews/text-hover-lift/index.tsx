import TextLift from "./text-lift"

const TextHoverLift = () => {
  return (
    <div className='h-[50vh] w-full flex justify-center items-center '>
      <div className='flex flex-col justify-start items-start gap-2'>
        <TextLift value="EXTREME" className="text-[11rem]" />
      </div>
    </div>
  )
}

export default TextHoverLift