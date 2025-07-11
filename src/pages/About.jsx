import React from 'react'


const About = () => {
  return (
    <div className='about' id='about'>
      <div className="intro">
        <h2>Know Me Better</h2>
        <p>I'm a final-year BCA student at Goel Institute of Higher Studies, Lucknow, currently holding a GPA of <strong>9.17</strong></p>
        <h2>MERN Stack Developer</h2>
        <p>I'm a passionate MERN Stack Developer with a focus on building responsive, user-friendly web applications. I love turning ideas into real-world projects using modern web technologies like React, Node.js, and MongoDB.</p>
        
        <div className='techStack'>
          <div className="mongo">
            <img src="/MongoDB.png" alt="Mongo" />
            <h3>M</h3>
          </div>
          <div className="express">
            <img src="/Express.png" alt="Express" />
            <h3>E</h3>
          </div>
          <div className="react">
            <img src="/React.png" alt="React" />
            <h3>R</h3>
          </div>
          <div className="node">
            <img src="/Node.js.png" alt="Node" />
            <h3>N</h3>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2>Skills Earned</h2>
        <div className='allSkills'>
            <div>
              <img src="/MongoDB.png" alt="" />
              <p>Mongo Db</p>
            </div>
            <div>
              <img src="/React.png" alt="" />
              <p>React js</p>
            </div>
             <div>
              <img src="/Node.js.png" alt="" />
              <p>Node js</p>
            </div>
             <div>
              <img src="/Express.png" alt="" />
              <p>Express js</p>
            </div>
             <div>
              <img src="/Git.png" alt="" />
              <p>Git</p>
            </div>
             <div>
              <img src="/GitHub.png" alt="" />
              <p>GitHub</p>
            </div>
             <div>
              <img src="/NPM.png" alt="" />
              <p>Npm</p>
            </div>
             <div>
              <img src="/Material UI.png" alt="" />
              <p>Material UI</p>
            </div>
             <div>
              <img src="/JavaScript.png" alt="" />
              <p>JS</p>
            </div>
             <div>
              <img src="/HTML5.png" alt="" />
              <p>HTML</p>
            </div>
             <div>
              <img src="/CSS3.png" alt="" />
              <p>CSS</p>
            </div>
             <div>
              <img src="/Bootstrap.png" alt="" />
              <p>Bootstrap</p>
            </div>
             <div>
              <img src="/Vite.js.png" alt="" />
              <p>Vite Framework</p>
            </div>
             <div>
              <img src="/Tailwind CSS.png" alt="" />
              <p>Tailwind css</p>
            </div>
        </div>
        <h2>Programming Language's</h2>
        <div className="allSkills">
           <div>
              <img src="/Java.png" alt="" />
              <p>Java</p>
            </div>
             <div>
              <img src="/C.png" alt="" />
              <p>C</p>
            </div>
             <div>
              <img src="/Python.png" alt="" />
              <p>Python</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
