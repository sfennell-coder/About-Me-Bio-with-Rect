// Add skill section for skill list

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