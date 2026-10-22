import '../styles/ClassCard.css'

function ClassCard({title, subtitle, children}) {
    return (
        <main className="ClassCard">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <section className="student-grid">{children}</section>
        </main>
    )
}

export default ClassCard