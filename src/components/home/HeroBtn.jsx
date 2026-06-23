import {Link} from 'react-router-dom'

const HeroBtn = () => {
  return (
    <div className='font-[font2] flex items-center justify-center mt-3 lg:gap-8 gap-5 text-white'>
      <Link className='lg:text-[5vw] text-[6vw] border-3 border-white rounded-full lg:px-10 px-1.5 lg:pt-3 pt-1 uppercase leading-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/projets'>Projets</Link>
      <Link className='lg:text-[5vw] text-[6vw] border-3 border-white rounded-full lg:px-10 px-1.5 lg:pt-3 pt-1 uppercase leading-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/agence'>Agence</Link>
    </div>
  )
}

export default HeroBtn
