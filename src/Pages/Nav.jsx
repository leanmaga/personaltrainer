//import icons

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsChatSquareText } from 'react-icons/bs';
import { RxVideo } from 'react-icons/rx'
import { MdOutlineFitnessCenter } from 'react-icons/md'

//link

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed z-10 bottom-0 left-0 right-0'>
    <div className='container mx-auto '>
      {/*nav inner*/}
      <div className='w-full bg-black/20 h-[100px] rounded-full max-w-[360px] mx-auto p-5 flex justify-between text-white/50 '>
            <Link 
              to='home'
              activeClass='active'
              smooth={true}
              spy={true} 
              offset={0}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' 
            >
              <BiHomeAlt/>
            </Link>

            <Link 
              to='about'
              activeClass='active'
              smooth={true}
              spy={true} 
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' 
            >
              <BiUser/>
            </Link>

            <Link 
              to='services'
              activeClass='active'
              smooth={true}
              spy={true} 
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' 
            >
              <MdOutlineFitnessCenter/>
            </Link>

            <Link 
              to='video' 
              activeClass='active'
              smooth={true}
              spy={true} 
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' 
            >
              <RxVideo/>
            </Link>
            
            <Link 
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}  
              offset={200}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' 
            >
              <BsChatSquareText/>
            </Link>
          </div>
        </div> 
      </nav>
  )
}

export default Nav