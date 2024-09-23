
import { WavyWord } from './wavy-word'

const WavyWordMenu = () => {
  return (
    <div className='h-[50vh] w-full flex justify-center items-center'>
      <div className='flex flex-col justify-start items-start gap-2'>
        <WavyWord value='HOME' className='text-2xl h-14' />
        <WavyWord value='ABOUT' className='text-2xl h-14' />
        <WavyWord value='WORK' className='text-2xl h-14' />
        <WavyWord value='PORTFOLIO' className='text-2xl h-14' />
        <WavyWord value='CONTACT' className='text-2xl h-14' />
      </div>
    </div>
  )
}

export default WavyWordMenu