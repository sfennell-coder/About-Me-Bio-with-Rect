// skill  list section

import AddSkill from './addSkill.js';
export default function SkillList({skills}){
    return(
        <div>
            <h2>Skill list:</h2>
            {skills.map(skill=>(
                <AddSkill 
                name={skill.name}
                profiency={skill.profiency}
                />
            ))}
        </div>
    )
}