// skill  list section

import AddSkill from './addSkill.js';
export default function SkillList({skill}){
    return(
        <div>
            <h2>Skill list:</h2>
            {skill.map(skill, index=>(
                <AddSkill key={index} name={skill.name}proficiency={skill.proficiency}/>
            ))}
        </div>
    )
}