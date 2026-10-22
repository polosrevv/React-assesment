import '../styles/ClassCard.css'

function ClassCard({title, subtitle, children}) {
    return (
        <main>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <section>{children}</section>
        </main>
    )
}

export default ClassCard