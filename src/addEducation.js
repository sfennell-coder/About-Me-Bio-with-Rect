// Add education for eduction section

export default function AddEducation({inst, deg, yr}){
    return(
        <div>
            <ul>
                <li>
                    <p><strong>{inst}</strong></p>
                    <p>{deg}</p>
                    <p><em>{yr}</em></p>
                </li>
            </ul>
        </div>
    )
}