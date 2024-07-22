// pages/about/index.js
import CardView from '../../components/CardView';
import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
import Footer from '../../components/Footer';  // Import Footer

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Languages',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'Frameworks',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Tools',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        degree: 'BSc. Computer Science (Reading)',
        school: 'University Of Westminster = United Kingdom',
        year: '2022 Jan - Present',
        info: 'During my degree at Westminster University, I studied Mathematics for Computing, JavaScript, HTML, CSS, Java, OOP, UML, Flutter, PHP (Laravel), and Tailwind CSS.',
        link: 'https://www.westminster.ac.uk'
      },
      {
        degree: 'BSc. Physical Science',
        school: 'South Eastern University Sri Lanka',
        year: '2022 Sept - Present',
        info: 'Currently following BSc. Physical Science specialized in Computer Science degree.',
        link: 'https://www.seu.ac.lk'
      },
      {
        degree: 'G.C.E. Advanced Levels - Physical Science Stream',
        school: 'Kingswood College Kandy',
        year: '2007 Jan - 2020 Aug',
        info: 'Completed GCE A/Ls in physical science stream with 3 passes.',
        link: 'https://www.kingswoodcollege.edu.lk'
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer - Intern',
        content: 'Vetstoria - 2023 July to 2024 July',
        info: 'Worked on developing and maintaining software solutions.',
        link: 'https://www.vetstoria.com'
      },
      {
        title: 'Technical Writer',
        content: 'Medium - 2024 Feb to Present',
        info: 'Contributed to various web development projects.',
        link: 'https://medium.com/@thavindul'
      },
      {
        title: 'IT Support Admin',
        content: 'IseeQ Solutions - 2020 Nov to 2021 March',
        info: 'Gained experience in various facets of software development.',
        link: 'https://www.iseeq.lk/'
      },
    ],
  },
  // Other sections...
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Captivating <span className='text-accent'>stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I'm Thavindu Liyanage, A final year computer science undergraduate
            who is a tech savvy geek with passion for web
            development and backend engineering.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={14} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          {/* Interactive CardView for each section */}
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <CardView
                key={itemIndex}
                degree={item.degree}
                school={item.school}
                year={item.year}
                info={item.info}
                title={item.title}
                content={item.content}
                icons={item.icons}
                link={item.link}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
