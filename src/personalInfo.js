// Personal Info Section

export default function PersonalInfo({name, uNumber, bio, email, link}){
    return(
        <div>
        <h2>{name},{uNumber}</h2>
        <p>{bio}</p>
        <p>{email}</p>
        <p>{link}</p>
        </div>
    )
}