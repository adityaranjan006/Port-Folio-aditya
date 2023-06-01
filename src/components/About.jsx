import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../style'
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import { services } from "../constants"

import {SectionWrapper} from '../hoc'

const ServiceCard= ({index,title,icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right","spring",0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[50px] shadow-card"
          >
            <div option={{
              max:45,
              scale:1,
              speed:450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      variants={fadeIn("","",0.1,1)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquam quisquam mollitia libero iste tenetur doloribus possimus autem. Similique harum modi necessitatibus. Consectetur, ut pariatur possimus suscipit aliquam non, placeat delectus eum reprehenderit quos ducimus ea. Ad, ipsa maxime illo esse ullam, neque perspiciatis veniam minima dolores ipsam aspernatur ab mollitia nemo eligendi animi velit, tempore sunt eveniet laboriosam laudantium quisquam a adipisci. Tempora nostrum quos perspiciatis asperiores magni tenetur, repudiandae assumenda deleniti magnam sequi molestiae voluptate voluptas doloribus aspernaturtae ipsum natus? Optio provident quibusdam nobis!
      </motion.p>
      {/* cards about section mapping used in service */}
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index}{...service}
          />
        ))}
      </div>
     
    </>
  )
}

export default SectionWrapper(About,"about")