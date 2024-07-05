// Add skill for skill list section

export default function Addskill({name, proficiency}){
    return(
        <div>
            <p>
                <ul>
                    <li>{name}: {proficiency}</li>
                </ul>
            </p>
        </div>
    )
}