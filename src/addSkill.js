// Add skill for skill list section

export default function Addskill({name, profiency}){
    return(
        <div>
            <p>
                <ul>
                    <li>{name}: {profiency}</li>
                </ul>
            </p>
        </div>
    )
}