// Education Section

import AddEducation from './addEducation.js';
export default function Education({education}){
    <div>
        <h2>Education:</h2>
        {education.map(({inst, deg, yr})=>{
            <AddEducation
            inst={inst}
            deg={deg}
            yr={yr}
            />
        })}
    </div>
}