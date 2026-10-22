import '../styles/StudentCard.css'
function StudentCard({name,studentId, grade, role}){
    
    return(
        <article className="StudentCard">
            <h2>
                {name}
            </h2>
            <p>
                {studentId}
            </p>
            <p>{grade}</p>
            <p>{role}</p>
        </article>
    )
}

export default StudentCard