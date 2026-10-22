import './styles/App.css'
import StudentCard from './components/StudentCard.jsx'
import ClassCard from './components/ClassCard.jsx'

function App() {
    const students = [
  { studentId: 104829, name: "Steven Gonell", grade: "12th", role: "President" },
  { studentId: 392048, name: "Rodney Morris", grade: "12th", role: "Vice President" },
  { studentId: 850294, name: "Noah Williams", grade: "12th", role: "Member" },
  { studentId: 274910, name: "Emma Brown", grade: "12th", role: "Member" },
  { studentId: 639102, name: "Oliver Jones", grade: "12th", role: "Member" },
  { studentId: 501938, name: "Ava Garcia", grade: "12th", role: "Member" },
  { studentId: 742091, name: "Elijah Miller", grade: "12th", role: "Member" },
  { studentId: 193840, name: "Charlotte Davis", grade: "12th", role: "Member" },
  { studentId: 820491, name: "William Rodriguez", grade: "12th", role: "Member" },
  { studentId: 472910, name: "Sophia Martinez", grade: "12th", role: "Member" },
  { studentId: 930184, name: "James Hernandez", grade: "12th", role: "Member" },
  { studentId: 361092, name: "Amelia Lopez", grade: "12th", role: "Member" },
  { studentId: 582910, name: "Benjamin Gonzalez", grade: "12th", role: "Member" },
  { studentId: 104928, name: "Isabella Wilson", grade: "12th", role: "Member" },
  { studentId: 693021, name: "Lucas Anderson", grade: "12th", role: "Member" },
  { studentId: 284019, name: "Mia Thomas", grade: "12th", role: "Member" },
  { studentId: 850392, name: "Henry Taylor", grade: "12th", role: "Member" },
  { studentId: 492018, name: "Evelyn Moore", grade: "12th", role: "Member" },
  { studentId: 710294, name: "Alexander Jackson", grade: "12th", role: "Member" }
];
  return (
    <>
      <ClassCard title="Advanced Programming for IT" subtitle="Technology High School">
        {students.map((student) => (
          <StudentCard key={student.studentId} {...student} />
        ))}
      </ClassCard>
    </>
  )
}

export default App
