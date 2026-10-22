import './styles/App.css'
import StudentCard from './components/StudentCard.jsx'
import ClassCard from './components/ClassCard.jsx'

function App() {
    const students = [
  { studentId: 104829, name: "Steven Gonell", grade: "12th", role: "Team Lead" },
  { studentId: 392048, name: "Rodney Morris", grade: "12th", role: "Note Taker" },
  { studentId: 850294, name: "Joshua Fineboy", grade: "12th", role: "Researcher" },
  { studentId: 274910, name: "Juliano M. Ataides", grade: "12th", role: "Presenter" },
  { studentId: 639102, name: "Hailey Ferreira", grade: "12th", role: "Designer" },
  { studentId: 501938, name: "Darius Gabriel Macancela-Landi", grade: "12th", role: "Editor" },
  { studentId: 742091, name: "Yanzel Mejia", grade: "12th", role: "Team Lead" },
  { studentId: 193840, name: "Kaira Ximena Mora", grade: "12th", role: "Coder" },
  { studentId: 820491, name: "David T. Moreno-Viera", grade: "12th", role: "TimeKeeper" },
  { studentId: 472910, name: "Elhoussaine Nouri", grade: "12th", role: "Researcher" },
  { studentId: 930184, name: "Liz Abigail Osorto", grade: "12th", role: "Note Taker" },
  { studentId: 361092, name: "Brayan Parades-Angamarca", grade: "12th", role: "Designer" },
  { studentId: 582910, name: "Kenneth Eliezer Paz Serrano", grade: "12th", role: "Presenter" },
  { studentId: 104928, name: "Brayan Pineda", grade: "12th", role: "Coder" },
  { studentId: 693021, name: "Yandel Quinapanta", grade: "12th", role: "Editor" },
  { studentId: 284019, name: "Rous Mery Rosario", grade: "12th", role: "Team Lead" },
  { studentId: 850392, name: "Camila Sanchez", grade: "12th", role: "Presenter" },
  { studentId: 492018, name: "Jean Chrys Santander", grade: "12th", role: "TimeKeeper" },
  { studentId: 710294, name: "Anthony Miguel Siri", grade: "12th", role: "Researcher" }
];
  return (
    <>
    {/* islam you didn't teach us how to for loop in jsx */}

      <ClassCard title="Advanced Programming for IT" subtitle="Technology High School">
        {students.map((student) => (
          <StudentCard key={student.studentId} {...student} />
        ))}
      </ClassCard>
    </>
  )
}

export default App
