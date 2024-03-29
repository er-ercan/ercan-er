const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="images/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Front-end Developer with over 8 years of experience.{" "}
                </h3>
                <p>
                  {`I'm`} from Turkey. I code and create web elements for
                  amazing company around the world. I like work with new people.
                  New people means new Experiences.
                </p>
                <p>
                  If you want to see my personal notes you would click{" "}
                  <em>
                    <b>My notes</b>
                  </em>{" "}
                  button.
                </p>
                <div className="row"></div>
                <div className="btn-bar">
                  <a
                    target="_blank"
                    className="px-btn px-btn-theme"
                    href="https://ercan-er.github.io"
                  >
                    <span>My Notes</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience & Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2022-Current</span>
                <h6>Senior Front-end Developer</h6>
                <p>Thundra</p>
              </li>
              <li>
                <span>2019-2022</span>
                <h6>Senior Front-end developer and Team Lead</h6>
                <p>OBSS</p>
              </li>
              <li>
                <span>2017-2019</span>
                <h6>ATOS</h6>
                <p>Software Engineer</p>
              </li>
              <li>
                <span>2015-2017</span>
                <h6>Bilginc IT Academy</h6>
                <p>Junior Software Engineer</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Front-end Developer with over 8 years of experience.
                My principle is easy and based on producing the best solution,
                using software architectures to develop reusable code. I am
                working on projects that are aware of the importance of teamwork
                so that the projects are completed accurately and successfully
                in a timely manner.
              </p>
              <div className="skill-lt">
                <h6>React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Vue</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "52%" }}>
                    <span data-toggle="tooltip" title="52%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>React Native</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "71%" }}>
                    <span data-toggle="tooltip" title="71%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Node Js</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "44%" }}>
                    <span data-toggle="tooltip" title="44%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>CSS 3 / SCSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              {/* /skill */}
              <div className="skill-lt">
                <h6>UI/UX</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "50%" }}>
                    <span data-toggle="tooltip" title="50%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience Detail</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="images/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Senior Front-end Developer</h6>
                  <label>Thundra | 2022 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    I working on the Foresight (CI/CD Observability) project to
                    develop all application pages. In addition to I develop some
                    services with Node.js. I use React, Javascript, Scss, CSS3,
                    HTML 5 in this project
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="images/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Senior Front-end Developer & Team Lead</h6>
                  <label>OBSS | 2019 - 2022</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    I started to work as the Senior Front-End developer of the
                    "Ağ Destekli Yönetim" system at the Aselsan location. After
                    1 year, I continued my duty as the team leader. Currently, I
                    am developing as a Technical Lead in the field of Front end
                    and I also support different projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div
                  className="rb-left"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src="images/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer</h6>
                  <label>ATOS | 2017 - 2019</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    I worked in the TYBS project to develop the financial module
                    and develop components with the Pebble template engine in
                    the lower structure. Minor modules I completed in the
                    financial module TTS (Transfer Tracking System), budget
                    item, flow issues and Limit integration. Technologies I use
                    - Java Spring MVC - HTML 5 - SCSS - JavaScript, jQuery -
                    Pebble Template Engine - Red Hat BPM - Adobe Photoshop,
                    Illustration - JIRA, Slack Adobe Photoshop - Git - XML - PDF
                    Conversion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
