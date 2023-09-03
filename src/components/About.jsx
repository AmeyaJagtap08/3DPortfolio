import React from 'react'
import  {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

 const ServiceCard = ({index, title, icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right","spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
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
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>


    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I am a software developer proficient in a diverse range of programming languages and frameworks. My skill set encompasses HTML, CSS, and JavaScript, which I use to craft dynamic and visually appealing web applications. I'm also well-versed in ReactJS, allowing me to create interactive user interfaces and deliver seamless user experiences. In addition, my expertise extends to core Java programming, enabling me to develop robust and scalable backend systems. I am adept at utilizing frameworks like Spring Boot, leveraging its capabilities to build efficient and modular applications. With a passion for coding and a comprehensive understanding of these technologies, I am dedicated to producing high-quality software solutions that meet both user needs and industry standards.
    </motion.p>


    <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service,index )=>(

      <ServiceCard key ={service.title} index ={index} {...service}/>
    ))}
    </div>
    </>
  )
}

export default SectionWrapper (About,"about")