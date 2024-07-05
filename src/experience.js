// Experience Section

import AddExperience from './addExperience.js';
export default function Exper({experiences}){
    <div>
        <h2>Work Experiences:</h2>
        <AddExperience
        jobTitle={experiences.jobTitle}
        companyName={experiences.companyName}
        duration={experiences.duration}
        />
    </div>
}