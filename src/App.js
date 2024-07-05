// U86364709: About Me Page Challenge Using React
import React from 'react';
import PersonalInfo from './personalInfo.js';
import SkillList from './skillList.js';
import Exper from './experience.js';
import Education from './education.js';

const name= "Scott Fennell",
uNumber= "U86364709",
bio= "23 years old. From Polk County, FL. Publix Super Markets Employee. Former bull-rider. Outdoorist.",
email="fennells1@usf.edu",
link= <a href="https://www.linkedin.com/in/scott-fennell-22874714a">scott fennell link</a>,
skills=[
  {
    name: "MS office/356",
    proficiency: "Advanced"
  },
  {
    name: 'Tableau',
    proficiency: "Intermeidate"
  },
  {
    name: "Hardware/Networking Troubleshooting",
    profiency: "Intermediate"
  },
  {
    name: "Programming: C/C++, C#, & Python",
    proficiency: "Intermediate"
  },
  {
    name: "Web: HTML, CSS, JavaScript",
    proficiency: "Intermediate"
  },
  {
    name: "IDE: Visual Studio Code",
    proficiency: "Intermeidate"
  },
  {
    name: "Repository: Visual Studio Code",
    proficiency: "Advanced"
  }
],
experiences=[
  {
    jobTitle: "Grocery Clerk",
    companyName: "Publix Super Markets",
    duration: "5 years"
  }
],
education=[
  {
    inst: "University of South Florida",
    deg: "Business Analyitcs and Information Systems",
    yr: "IP: estimated graduation spring 2026"
  },
  {
    inst: "Hillsborough Community College",
    deg: "Computer Information Systems",
    yr: "Fall 2023"
  },
  {
    inst: "George Jenkins High School",
    deg: "Highschool Diploma",
    yr: "Spring 2020"
  }
];

function App(){
  return(
    <div>
      <PersonalInfo name={name} bio={bio} email={email} link={link}/>
      <SkillList skills={skills}/>
      <Exper experiences={experiences}/>
      <Education education={education}/>
    </div>
  )
}