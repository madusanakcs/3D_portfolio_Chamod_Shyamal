import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import the image
import myPhoto from '../components/ch.png';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-2/3 w-full">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I am a skilled software and game developer with experience 
            in JavaScript, Python, C++, C#, and Java. I have expertise 
            in frameworks like React, Node.js, Three.js, and Next.js, 
            as well as game engines such as Unity and Unreal Engine. 
            Additionally, I'm an AI/ML engineer with experience in Python,
            CUDA/C++, and proficiency in frameworks like PyTorch and 
            TensorFlow. I'm a quick learner and work closely with clients 
            to create efficient, scalable, and user-friendly solutions 
            that address real-world problems. Let's collaborate to bring 
            your ideas to life!
          </motion.p>
        </div>

        {/* Adjusted the image container */}
        <div className="lg:w-1/3 w-full mt-10 lg:mt-0 flex justify-center lg:justify-end">
  <img 
    src={myPhoto} 
    alt="My Photo" 
    className="rounded-full shadow-lg max-w-[300px] h-auto" 
  />
</div>

      </div>

      {/* Service Cards Section */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
