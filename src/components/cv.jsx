import Pro from "../components/img profile.webp"
function Cv() {
  return(
    <>
       <div className="main-con">
        <div className="main-1">
          <div className="imgcv">
             <img className="pic" src={Pro} width={"100%"} height={"100%"} />
          </div>
                <div className="content">
                    <h1>Hira Hameed</h1>
                  <div className="line"></div>
          
                      <p> Frontend Developer (React & js) </p>
           
            </div>
            <div className="details-con">
                    <h1>Details</h1>
                  <ul>
                    <li><span>Adress:</span>Lahore,Pakistan </li>
                    <li><span>Email:</span>hirahameed78@gmail.com</li>
                    <li><span>Phone:</span>0309-9013242</li>
                  </ul>
                </div>
                <div className="skill-con">

                    <h1 className="skill">Skills</h1>
                  <div className="skill-wrap1">
                        <h4>HTML</h4>
                            <div className="outer">
                              <div className="inner1"></div>
                            </div>
                    </div>
                      <div className="skill-wrap2">
                        <h4>CSS</h4>
                          <div className="outer">
                            <div className="inner2"></div>
                          </div>
                      </div>
                      <div className="skill-wrap3">
                       <h4>Javascript</h4>
                          <div className="outer">
                            <div className="inner3"></div>
                          </div>
                      </div>
                      <div className="skill-wrap4">
                          <h4>React</h4>
                            <div className="outer">
                                <div className="inner4"></div>
                            </div>
                      </div>
                </div>
        </div>
               
        <div className="main-2">
          <div className="objective">
            <h1>Objectives</h1>
                <ul>
                   <li>Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings.</li>  
                   <li>To get an opportunity where I can make the best of my potential and contribute to the organizations growth.</li>
                 </ul>
                      <div className="language">
                          <h1>Languages</h1>
                           <ul>
                            <li>English</li>
                            <li>Urdu</li>
                           </ul>
                      </div>
                      <div className="edu">
                          <h1>Education</h1>
                           <ul>
                            <li>M.sc Statistics</li>
                            <li>MERN Stack</li>
                           </ul>
                      </div>
                          <div className="summery">
                              <h1>Summery</h1>
                                <p>Strong experience with git, github, HTML, CSS, SASS, Bootstrap, React and Javascript. </p>
                          </div>
          </div>
        </div>
       </div>



    </>
  )
}
export default Cv; 