import react from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Screens/Login/Login'
import Signup from './Screens/Signup/Signup'
import StudentList from './Screens/Students/StudentList'
import StudentRegistration from './Screens/Students/StudentRegistration'
import TeacherRegistration from './Screens/Teachers/TeacherRegistration'
import TeacherList from './Screens/Teachers/TeacherList'
import SubjectAdd from './Screens/Subjects/SubjectAdd'
import SubjectList from './Screens/Subjects/SubjectList'
import SyllabusForm from './Screens/Syllabus/SyllabusForm'
import SyllabusList from './Screens/Syllabus/SyllabusList'
import AdmissionForm from './Screens/Admission/AdmissionForm'
import ClassForm from './Screens/Class/ClassForm'
import ClassList from './Screens/Class/ClassList'
import Dashboard from './Screens/Home/Dashboard'
import FeeStructure from './Screens/Fees/FeeStructure'
import FeeVoucher from './Screens/Fees/FeeVoucher'
import ExamSchedule from './Screens/Exam/ExamSchedule'
import ExamResult from './Screens/Exam/ExamResult'
import FeeSubmission from './Screens/Fees/FeeSubmission'
import AuthState from './Routes/AuthState'
import PrivRoute from './Routes/PrivRoute'


function App() {

  return (
    <>
      <Routes>
        <Route element={<AuthState/>}>
            <Route index element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
        </Route>
        <Route element={<PrivRoute/>}>
            <Route path='Dashboard' element={<Dashboard/>}/>
            <Route path='Student/StudentRegistration' element={<StudentRegistration/>}/>
            <Route path='Student/StudentList' element={<StudentList/>}/>
            <Route path='Teacher/TeacherRegistration' element={<TeacherRegistration/>}/>
            <Route path='Teacher/TeacherList' element={<TeacherList/>}/>
            <Route path='Subjects/SubjectAdd' element={<SubjectAdd/>}/>
            <Route path='Subjects/SubjectList' element={<SubjectList/>}/>
            <Route path='Syllabus/SyllabusForm' element={<SyllabusForm/>}/>
            <Route path='Syllabus/SyllabusList' element={<SyllabusList/>}/>
            <Route path='Admission/AdmissionForm' element={<AdmissionForm/>}/>
            <Route path='Class/ClassForm' element={<ClassForm/>}/>
            <Route path='Class/ClassList' element={<ClassList/>}/>
            <Route path='Fees/FeeStructure' element={<FeeStructure/>}/>
            <Route path='Fees/FeeVoucher' element={<FeeVoucher/>}/>
            <Route path='Fees/FeeSubmission' element={<FeeSubmission/>}/>
            <Route path='Exam/ExamSchedule' element={<ExamSchedule/>}/>
            <Route path='Exam/ExamResult' element={<ExamResult/>}/>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
