// Add education for eduction section

export default function AddEducation({inst, deg, yr}){
    return(
        <div>
            <ul>
                <li>
                    <p><strong>{inst}</strong></p>
                    <p>{deg}</p>
                    <p>{yr}</p>
                </li>
            </ul>
        </div>
    )
}