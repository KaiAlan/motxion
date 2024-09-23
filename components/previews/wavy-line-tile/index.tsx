import { WavyLine } from "./wavy-line"


const WavyLineTile = () => {
  return (
    <div className='h-[30vh] w-full flex justify-center items-center'>
      <div className='flex flex-col justify-start items-end gap-2'>
        <WavyLine value='"Words are, of course, the most powerful drug used by mankind."' className="text-lg h-12" />
        <span className="text-sm">— Rudyard Kipling</span>
      </div>
    </div>
  )
}

export default WavyLineTile