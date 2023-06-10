import gitLogo from '../../assets/ion-social-github.png'

const Foter = () => {
  return (
    <div className='flex flex-row items-center justify-center
    bg-gradient-to-b from-[#485563] to-[#29323c] p-4 cursor-pointer hover:underline
    hover:underline-offset-2 text-white ' >
      <div>
        <img className=' max-h-8    ' src={gitLogo} alt="GitHub" />
      </div>
      <div className='font-bold text-2xl pl-2 '>
      Fork on GitHub
      </div>      
    </div>
  )
}

export default Foter