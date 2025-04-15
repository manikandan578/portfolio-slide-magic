import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";
import NavigationDots from "../components/NavigationDots";
import Footer from "../components/Footer";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" }
];

const Index = () => {
  useEffect(() => {
    document.title = "Manikandan S - Portfolio";
  }, []);

  const homeLeftContent = (
    <div className="flex flex-col gap-6">
      <motion.img 
        src="/lovable-uploads/fdd266d3-2f11-4665-af87-491d6ce382d3.png" 
        alt="Manikandan S" 
        className="w-64 h-64 rounded-full object-cover border-4 border-white/30 shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="space-y-1">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Manikandan S
        </motion.h1>
        <motion.p 
          className="text-xl text-white/80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          AI Engineer & Trainer
        </motion.p>
      </div>
    </div>
  );

  const homeRightContent = (
    <div className="space-y-6 text-white flex items-center justify-center h-full">
      <motion.div 
        className="text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-medium mb-2">Professional Summary</h2>
        <p className="text-white/80 max-w-md mx-auto">
          Passionate AI Engineer and Trainer dedicated to pushing the boundaries of artificial intelligence and empowering the next generation of tech innovators.
        </p>
      </motion.div>
    </div>
  );

  const aboutLeftContent = (
    <div>
      <h2 className="section-title text-white">About Me</h2>
      <div className="mt-6 space-y-4 text-white/90">
        <p>
          Final-year Artificial Intelligence student at Periyar Maniammai Institute of Science and Technology, 
          driven by a passion for achieving excellence in the field.
        </p>
        <p>
          Experienced in training students in programming languages, with a solid foundation in AI research and development.
        </p>
        <p>
          Enthusiastic about applying AI solutions to real-world problems and eager to contribute to a 
          forward-thinking organization as an AI Engineer and Trainer.
        </p>
      </div>
    </div>
  );

  const aboutRightContent = (
    <div className="flex justify-center items-center h-full">
      <div className="space-y-6 text-white/90 max-w-md">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
          <h3 className="text-xl font-semibold mb-4 text-portfolio-purple">Professional Journey</h3>
          <p>
            With a passion for AI and technology, I'm constantly learning and evolving. 
            My goal is to leverage cutting-edge technologies to solve real-world problems 
            and create innovative solutions.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
          <h3 className="text-xl font-semibold mb-4 text-portfolio-blue">Career Aspiration</h3>
          <p>
            Aspiring to contribute to transformative AI projects that push the boundaries 
            of what's possible, while continuously expanding my skills and knowledge.
          </p>
        </div>
      </div>
    </div>
  );

  const educationLeftContent = (
    <div>
      <h2 className="section-title text-white">Education</h2>
      <div className="mt-8 space-y-8">
        <div className="resume-item">
          <h3 className="resume-title text-white">Periyar Maniammai University</h3>
          <p className="resume-subtitle text-white/70">B.Sc. Artificial Intelligence</p>
          <p className="resume-date text-white/60">Aug 2022 - May 2025</p>
          <p className="text-white/80">Periyar Maniammai University, Thanjavur, India.</p>
        </div>
        
        <div className="resume-item">
          <h3 className="resume-title text-white">Higher Secondary Education</h3>
          <p className="resume-subtitle text-white/70">12th Standard</p>
          <p className="resume-date text-white/60">Jun 2020 - May 2022</p>
          <p className="text-white/80">Srinivasa Rao Higher Secondary School Thiruvaiyaru, Thanjavur.</p>
        </div>
      </div>
    </div>
  );

  const educationRightContent = (
    <div className="flex justify-center items-center h-full">
      <div className="relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-portfolio-purple to-portfolio-blue opacity-75 blur"></div>
        <div className="relative bg-black/80 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Learning Path</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-portfolio-purple flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Higher Secondary</h4>
                <p className="text-sm text-white/70">Foundation in sciences</p>
              </div>
            </div>

            <div className="h-10 border-l-2 border-dashed border-portfolio-purple/50 ml-6"></div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-portfolio-blue flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">University</h4>
                <p className="text-sm text-white/70">Specialized in AI</p>
              </div>
            </div>

            <div className="h-10 border-l-2 border-dashed border-portfolio-blue/50 ml-6"></div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-portfolio-teal flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20h2m-4 6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Career</h4>
                <p className="text-sm text-white/70">AI Engineer & Trainer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const experienceLeftContent = (
    <div>
      <h2 className="section-title text-white">Professional Experience</h2>
      <div className="mt-8">
        <div className="resume-item">
          <h3 className="resume-title text-white">Front-end Developer Intern</h3>
          <p className="resume-subtitle text-white/70">G tec Education, Trichy</p>
          <p className="resume-date text-white/60">June 2024 - July 2024</p>
          <ul className="list-disc list-inside space-y-2 text-white/80 mt-3">
            <li>Responsive web applications using HTML, CSS, and JavaScript, improving user experience and increasing engagement.</li>
            <li>Utilized frameworks like React and Angular to build reusable UI components, reducing development time and improving code quality.</li>
            <li>Collaborated with designers and back-end developers to deliver high-quality web applications, meeting project deadlines and exceeding expectations.</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const experienceRightContent = (
    <div className="flex flex-col justify-center h-full">
      <h3 className="text-2xl font-bold mb-6 text-white">Key Responsibilities</h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-portfolio-purple rounded-md mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-white">UI Development</h4>
              <p className="text-sm text-white/70">Built responsive interfaces using modern HTML, CSS, and JavaScript</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-portfolio-blue rounded-md mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-white">Component Development</h4>
              <p className="text-sm text-white/70">Created reusable UI components with React and Angular</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-portfolio-teal rounded-md mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20h2m-4 6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-white">Team Collaboration</h4>
              <p className="text-sm text-white/70">Worked with designers and back-end developers to deliver complete web applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const skillsLeftContent = (
    <div>
      <h2 className="section-title text-white">Skills & Technologies</h2>
      
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-white text-xl mb-4">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="tag bg-portfolio-purple/20 text-white">C</span>
            <span className="tag bg-portfolio-purple/20 text-white">C++</span>
            <span className="tag bg-portfolio-purple/20 text-white">Python</span>
            <span className="tag bg-portfolio-purple/20 text-white">SQL</span>
            <span className="tag bg-portfolio-purple/20 text-white">HTML</span>
            <span className="tag bg-portfolio-purple/20 text-white">CSS</span>
            <span className="tag bg-portfolio-purple/20 text-white">JavaScript</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-xl mb-4">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            <span className="tag bg-portfolio-blue/20 text-white">VSCode</span>
            <span className="tag bg-portfolio-blue/20 text-white">Jupyter Notebook</span>
            <span className="tag bg-portfolio-blue/20 text-white">Scikit-learn</span>
            <span className="tag bg-portfolio-blue/20 text-white">TensorFlow</span>
            <span className="tag bg-portfolio-blue/20 text-white">Keras</span>
            <span className="tag bg-portfolio-blue/20 text-white">PyTorch</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-xl mb-4">Platforms</h3>
          <div className="flex flex-wrap gap-2">
            <span className="tag bg-portfolio-teal/20 text-white">Google Cloud AI</span>
            <span className="tag bg-portfolio-teal/20 text-white">AWS SageMaker</span>
            <span className="tag bg-portfolio-teal/20 text-white">Azure ML</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-xl mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="tag bg-white/20 text-white">Tamil (Native)</span>
            <span className="tag bg-white/20 text-white">English (Proficient)</span>
          </div>
        </div>
      </div>
    </div>
  );

  const skillsRightContent = (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-md">
        <h3 className="text-2xl font-bold mb-6 text-white">Skill Proficiency</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">Python</span>
              <span className="text-white/70">90%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5">
              <div className="bg-portfolio-purple h-2.5 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">Machine Learning</span>
              <span className="text-white/70">85%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5">
              <div className="bg-portfolio-blue h-2.5 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">Web Development</span>
              <span className="text-white/70">80%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5">
              <div className="bg-portfolio-teal h-2.5 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">C/C++</span>
              <span className="text-white/70">75%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5">
              <div className="bg-portfolio-purple h-2.5 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">SQL</span>
              <span className="text-white/70">70%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5">
              <div className="bg-portfolio-blue h-2.5 rounded-full" style={{ width: "70%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-white">Cloud Platforms</span>
              <span className="text-white/70">65%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5">
              <div className="bg-portfolio-teal h-2.5 rounded-full" style={{ width: "65%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const projectsLeftContent = (
    <div>
      <h2 className="section-title text-white">Projects</h2>
      
      <div className="mt-8">
        <div className="resume-item">
          <h3 className="resume-title text-white">Machine Learning</h3>
          <p className="resume-subtitle text-white/70">
            <a href="https://github.com/Manikandan578" className="flex items-center gap-1 text-portfolio-blue hover:underline" target="_blank" rel="noopener noreferrer">
              github.com/Manikandan578
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
          <div className="mt-4 text-white/80">
            <p className="mb-4">Machine learning (ML) is a subset of artificial intelligence (AI) that enables systems to learn from data, identify patterns, and make decisions without explicit programming.</p>
            
            <h4 className="font-medium text-white mb-2">Tools Used:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Libraries: Scikit-learn, TensorFlow, Keras, PyTorch</li>
              <li>Platforms: Google Cloud AI, AWS SageMaker, Azure ML</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const projectsRightContent = (
    <div className="flex flex-col justify-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-portfolio-purple flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Image Recognition</h3>
          <p className="text-sm text-white/70">Deep learning model for accurate image classification and object detection</p>
        </div>
        
        <div className="p-5 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-portfolio-blue flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">NLP Chatbot</h3>
          <p className="text-sm text-white/70">Interactive chatbot using natural language processing techniques</p>
        </div>
        
        <div className="p-5 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-portfolio-teal flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Predictive Analytics</h3>
          <p className="text-sm text-white/70">Data analysis system for business forecasting and decision-making</p>
        </div>
        
        <div className="p-5 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-portfolio-purple flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Responsive Web App</h3>
          <p className="text-sm text-white/70">Modern web application with React and advanced UI components</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar sections={SECTIONS} />
      <NavigationDots sections={SECTIONS.map(section => section.id)} />

      <PortfolioSection
        id="home"
        bgClass="bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]"
        leftContent={homeLeftContent}
        rightContent={homeRightContent}
      />
      
      <PortfolioSection
        id="about"
        bgClass="bg-gradient-to-br from-[#1976D2] to-[#64B5F6]"
        leftContent={aboutLeftContent}
        rightContent={aboutRightContent}
      />
      
      <PortfolioSection
        id="education"
        bgClass="bg-gradient-to-br from-[#26A69A] to-[#80CBC4]"
        leftContent={educationLeftContent}
        rightContent={educationRightContent}
      />
      
      <PortfolioSection
        id="experience"
        bgClass="bg-gradient-to-br from-[#9b87f5] to-[#1976D2] via-[#26A69A]"
        leftContent={experienceLeftContent}
        rightContent={experienceRightContent}
      />
      
      <PortfolioSection
        id="skills"
        bgClass="bg-gradient-to-br from-[#7E69AB] to-[#9b87f5]"
        leftContent={skillsLeftContent}
        rightContent={skillsRightContent}
      />
      
      <PortfolioSection
        id="projects"
        bgClass="bg-gradient-to-br from-[#1976D2] to-[#26A69A]"
        leftContent={projectsLeftContent}
        rightContent={projectsRightContent}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
