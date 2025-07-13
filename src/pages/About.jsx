import React from 'react'
import { motion } from 'motion/react'


const About = () => {
  return (
    <motion.div className='about' id='about'
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}
    >
      <div className="intro">
        <h2>Know Me Better</h2>
        <p>I'm a final-year BCA student at Goel Institute of Higher Studies, Lucknow, currently holding a GPA of <strong>9.17</strong></p>
        <h2>MERN Stack Developer</h2>
        <p>I'm a passionate MERN Stack Developer with a focus on building responsive, user-friendly web applications. I love turning ideas into real-world projects using modern web technologies like React, Node.js, and MongoDB.</p>
        
        <div className='techStack'>
          <motion.div className="mongo">
            <img src="/MongoDB.png" alt="Mongo" />
            <h3>M</h3>
          </motion.div>


          <motion.div className="express">
            <img src="/Express.png" alt="Express" />
            <h3>E</h3>
          </motion.div>


          <motion.div className="react">
            <img src="/React.png" alt="React" />
            <h3>R</h3>
          </motion.div>

          <motion.div className="node">
            <img src="/Node.js.png" alt="Node" />
            <h3>N</h3>
          </motion.div>

        </div>
      </div>
      <div className="skills">
        <h2>Skills Earned</h2>
        <div className='allSkills'>
            <motion.div
            initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0.6
            }}
            viewport={{ amount : 0.3  }}
            >
              <img src="/MongoDB.png" alt="" />
              <p>Mongo Db</p>
            </motion.div>

            <motion.div
            initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0
            }}
            viewport={{ amount : 0.3 }}
            >
              <img src="/React.png" alt="" />
              <p>React js</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0.6
            }}
            viewport={{ amount : 0.3 }}
            >
              <img src="/Node.js.png" alt="" />
              <p>Node js</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.8,
              delay : 0.4
            }}
            viewport={{ amount : 0.3  }}
            >
              <img src="/Express.png" alt="" />
              <p>Express js</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0.2
            }}
            viewport={{ amount : 0.3  }}
            >
              <img src="/Git.png" alt="" />
              <p>Git</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0.4
            }}
            viewport={{ amount : 0.3  }}
            >
              <img src="/GitHub.png" alt="" />
              <p>GitHub</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0
            }}
            viewport={{ amount : 0.3  }}
            >
              <img src="/NPM.png" alt="" />
              <p>Npm</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0.3
            }}
            viewport={{ amount : 0.3  }}
            >
              <img src="/Material UI.png" alt="" />
              <p>Material UI</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.9,
              delay : 0.4
            }}
            viewport={{ amount : 0.3  }}
            >
              <img src="/JavaScript.png" alt="" />
              <p>JS</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0
            }}
            viewport={{ amount : 0.3  }}
            >
              <img src="/HTML5.png" alt="" />
              <p>HTML</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.3,
              delay : 0.6
            }}
            viewport={{ amount : 0.3  }}
            >
              <img src="/CSS3.png" alt="" />
              <p>CSS</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.2,
              delay : 0.7
            }}
            viewport={{ amount : 0.3 }}
            >
              <img src="/Bootstrap.png" alt="" />
              <p>Bootstrap</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.7,
              delay : 0.4
            }}
            viewport={{ amount : 0.3 }}
            >
              <img src="/Vite.js.png" alt="" />
              <p>Vite Framework</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.9,
              delay : 0.4
            }}
            viewport={{ amount : 0.3 }}  //when 30% visible all time
            >
              <img src="/Tailwind CSS.png" alt="" />
              <p>Tailwind css</p>
            </motion.div>

        </div>
        <h2>Programming Language's</h2>
        <div className="allSkills">
           <motion.div
            initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0.4
            }}
            viewport={{ once: true }}
           >
              <img src="/Java.png" alt="" />
              <p>Java</p>
            </motion.div>

             <motion.div
             initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.5,
              delay : 0.6
            }}
             >
              <img src="/C.png" alt="" />
              <p>C</p>
            </motion.div>

             <motion.div
               initial ={{
              opacity : 0,
            }}
            whileInView = {{
              opacity : 1
            }}
            transition={{
              duration : 0.8,
              delay : 0.2
            }}
             >
              <img src="/Python.png" alt="" />
              <p>Python</p>
            </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
