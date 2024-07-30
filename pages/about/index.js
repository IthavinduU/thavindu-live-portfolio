import Head from "next/head";
import CardView from "../../components/CardView";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaJava,
  FaPython,
  FaRust
} from "react-icons/fa";
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiKotlin,
  SiCsharp,
  SiSpringboot,
  SiDart,
  SiPreact,
  SiNextdotjs,
  SiNodedotjs,
  SiBitbucket,
  SiVuedotjs,
  SiFalcon,
  SiAmazonaws,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiGnubash
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Footer from "../../components/Footer";
import CountUp from "react-countup";

export const aboutData = [
  {
    title: "Tech Stack",
    info: [
      {
        title: "Languages",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJava key="java" />,
          <FaJs key="js" />,
          <FaPython key="python" />,
          <SiPhp key="php" />,
          <SiKotlin key="kotlin" />,
          <SiCsharp key="csharp" />,
          <SiDart key="dart" />,
          <SiGnubash key="gnubash" />,
          <FaRust key="rust" />
        ]
      },
      {
        title: "Frameworks",
        icons: [
          <SiPreact key="preact" />,
          <SiNextdotjs key="nextjs" />,
          <SiNodedotjs key="nodejs" />,
          <SiSpringboot key="springboot" />,
          <SiVuedotjs key="vuejs" />,
          <SiFalcon key="falcon" />
        ]
      },
      {
        title: "Tools",
        icons: [
          <SiAmazonaws key="aws" />,
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiBitbucket key="bitbucket" />,
          <SiMysql key="mysql" />,
          <SiMongodb key="mongodb" />,
          <SiAdobephotoshop key="photoshop" />,
          <SiGit key="git" />,
          <SiGithub key="github" />,
          <SiDocker key="docker" />,
          <SiKubernetes key="kubernetes" />
        ]
      }
    ]
  },
  {
    title: "Education",
    info: [
      {
        degree: "BSc. Computer Science (Reading)",
        school: "University Of Westminster - United Kingdom",
        year: "2022 Jan - Present",
        info: "During my degree at Westminster University, I studied Mathematics for Computing, JavaScript, HTML, CSS, Java, OOP, UML, Flutter, PHP (Laravel), and Tailwind CSS.",
        link: "https://www.westminster.ac.uk"
      },
      {
        degree: "BSc. Physical Science",
        school: "South Eastern University Sri Lanka",
        year: "2022 Sept - Present",
        info: "Currently following BSc. Physical Science specialized in Computer Science degree.",
        link: "https://www.seu.ac.lk"
      },
      {
        degree: "G.C.E. Advanced Levels - Physical Science Stream",
        school: "Kingswood College Kandy",
        year: "2007 Jan - 2020 Aug",
        info: "Completed GCE Advanced Levels in physical science stream with 3 passes.",
        link: "http://www.kingswood.sch.lk/index.html"
      }
    ]
  },
  {
    title: "Experience",
    info: [
      {
        title: "Software Engineer - Intern",
        content: "Vetstoria - 2023 July to 2024 July",
        info: "Worked on a real-time appointment booking system running on a PHP(Phalcon) back-end and Vue front-end.",
        link: "https://www.vetstoria.com"
      },
      {
        title: "Technical Writer",
        content: "Medium - 2024 Feb to Present",
        info: "Contributing to the community with knowledge I pursuit throughout my journey.",
        link: "https://medium.com/@thavinduwrites"
      },
      {
        title: "IT Support Admin",
        content: "IseeQ Solutions - 2020 Nov to 2021 March",
        info: "Assisted in administration work and IT support.",
        link: "https://www.iseeq.lk/"
      }
    ]
  }
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Learn more about Thavindu Liyanage."
        />
      </Head>
      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
        <Circles />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <Avatar />
        </motion.div>
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Captivating <span className="text-accent">stories</span> birth
              magnificent designs.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              I'm Thavindu Liyanage, A final year computer science undergraduate
              with passion for web development and backend engineering.
            </motion.p>
            {/* counters */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={4} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
                {/* clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied clients
                  </div>
                </div>
                {/* projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={14} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            {/* Interactive CardView for each section */}
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
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
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;
