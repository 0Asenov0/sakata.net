import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import type { Project } from './components/Projects';
import Footer from './components/Footer';
import './index.css';
import TechStack from './components/TechStack';

const App: React.FC = () => {
  const skills = [
    "C/C++", "C#","Java","Python","Verilog","SystemVerilog","Spring Framework","React",
    "JavaScript","PHP","HTML","CSS","JWT","REST API","Docker","Kafka",
    "Linux","TCP/IP","CI/CD","Git/Github","Arduino","Microsoft Office",
  ];

  const educationList = [
    {
      status: "Completed",
      institution: "Technical University Sofia, branch Plovdiv - Computer Systems and Technologies",
      courses: ["C/C++","Computer Architectures","Operating Systems","Networks","Data Structures and Alghoritms","Databases","Android","Web Development","C#","PHP","Java","HTML, CSS, JavaScript","Verilog","Git/Github","Linux","Microsoft Office"]
    }
  ];

  const experienceList = [
    {
      company: "Hardware Verification",
      description: "Performed hardware verification, including creating tests to ensure digital logic designs functioned correctly. Utilized simulation tools and waveform analysis to evaluate results. Participated in team meetings and discussions to identify and implement suitable solutions.",
      skills: ["Linux","System Verilog","Verilog","Microsoft Office","Python","Apache Subversion","JIRA"]
    }
  ];

  const projectsList: Project[] = [
    {
      image: "/images/test-system.png",
      title: "Online Test System Web App",
      description: "Web application for managing and executing tests and methods for cheating prevention using events and pre-trained ML model Blazeface and Tensorflow for execution in browser.",
      status: "Completed",
      tech: ["Java","Spring","MySQL","REST","JWT","Tensorflow","JavaScript","HTML","CSS"],
      url:"https://github.com/0Asenov0"
    },
    {
      image: "/images/weather.png",
      title: "Weather App",
      description: "Weather web app for real time weather data. Using OpenStreetMap API for city coordinates and Open-Meteo API for real-time weather data. Implemented automated tests and configured GitHub Actions to run tests on every code push.",
      status: "Completed",
      tech: ["React","Vite","JavaScript","Github Actions"],
      url:"https://github.com/0Asenov0"
    },
    {
      image: "/images/android.png",
      title: "Android App Smart Home",
      description: "Android app for controlling home appliances (lights, doors, fan and curtains) in real time. Using ESP8266 microcontroller in C using Arduino IDE as web server to handle device commands.",
      status: "Completed",
      tech: ["Android","Java","C","Arduino","ESP8266 microcontroller"],
      url:"https://github.com/0Asenov0"
    },
    {
      image: "/images/under-construction.png",
      title: "Ticket Platform Web App",
      description: "Web app platform for creating events and buying tickets. Events will have customizable seat layout suitable for the needs of every organiser.",
      status: "In progress",
      statusColor: "orange",
      tech: ["Java","Spring","SQL","JWT","Kafka","Redis","Docker"],
      url:"https://github.com/0Asenov0"
    },
    {
      image: "/images/car-data.png",
      title: "Car Data Log Summary",
      description: "Script generating summarized information about collected data log while driving using VagCom interface through the OBD-II port. Summary of relation between Oil and Coolant temperature during warmup. The relation between DPF temps, RPM, Boost Pressure, Oil temps, Coolant temps and Lamda sensor values during driving in different scenarios.",
      status: "Completed",
      tech: ["Python"],
      url:"https://github.com/0Asenov0"
    }
  ];

  const footerLinks = [
    { name: "Github", url: "https://github.com/0Asenov0", iconClass: "fab fa-github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/stoil-asenov-59273b387/", iconClass: "fab fa-linkedin-in" }
  ];

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <TechStack skills={skills}/>
      <Projects projects={projectsList} />
      <Education educationList={educationList} />
      <Experience jobs={experienceList} />
      <Footer links={footerLinks} />
    </>
  );
};

export default App;
