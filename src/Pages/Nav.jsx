//import icons

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, /*BsBriefcase,*/ BsChatSquareText } from 'react-icons/bs';


//link

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed z-10 bottom-0 left-0 right-0'>
    <div className='container mx-auto '>
      {/*nav inner*/}
      <div className='w-full bg-black/20 h-[100px] rounded-full max-w-[300px] mx-auto p-5 flex justify-between text-white/50 '>
        <Link 
              to='home'
              activeClass='active'
              smooth={true}
              spy={true} 
              offset={-200}
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
              <BsClipboardData/>
            </Link>
            {/*<Link 
              to='work' 
              activeClass='active'
              smooth={true}
              spy={true} 
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center ' 
            >
              <BsBriefcase/>
      </Link>*/}
            <Link 
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}  
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