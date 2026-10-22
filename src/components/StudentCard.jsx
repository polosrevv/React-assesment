import '../styles/StudentCard.css'

function StudentCard({name, studentId, grade, role}) {
    return (
        <article className="StudentCard">
            <header className="StudentCard-header">
                <h2>{name}</h2>
                <span className="StudentCard-id">#{studentId}</span>
            </header>
            <p>{grade}</p>
            <p>{role}</p>
        </article>
    )
}

export default StudentCard