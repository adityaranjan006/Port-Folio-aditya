import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { textVariant } from '../utils/motion'

const Hero = () => {
  return (
    // Full section of computer model
    <section className="relative w-full h-screen mx-auto">
      {/* heading I'M Aditya */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* purple vertical line */}
          <div className="w-5 sm:h-40 h-20 violet-gradient" />
        </div>
        <div className={`${styles.heroHeadText} text-white`}>
          <motion.h1 className={textVariant()}
          >Hi, I'm<span className="text-[#915eff]"> ADITYA RANJAN</span></motion.h1>
          <p className={`${styles.heroSubText} text-[#fbfafe]`}>Learning by making projects . . .</p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero
