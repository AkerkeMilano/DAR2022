import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentsList from "./pages/students/list/StudentsList";
import StudentDetails from "./pages/students/details/StudentDetails";
import HomePage from "./pages/homepage/HomePage";
import StudentCreate from "./pages/students/create/StudentCreate";
import StudentEdit from "./pages/students/edit/StudentEdit";
import FacultiesList from "./pages/faculties/list/FacultiesList";
import FacultyDetails from "./pages/faculties/details/FacultyDetails";
import FacultyCreate from "./pages/faculties/create/FacultyCreate";
import FacultyEdit from "./pages/faculties/edit/FacultyEdit";
import { StudentProvider } from "./contexts/StudentContext";
import Header from "./components/header/Header";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <Router>
      <StudentProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/students"} element={<StudentsList />} />
            <Route path={"/students/:id"} element={<StudentDetails />} />
            <Route path={"/students/create"} element={<StudentCreate />} />
            <Route path={"/students/edit/:id"} element={<StudentEdit />} />
            <Route path={"/faculties"} element={<FacultiesList />} />
            <Route path={"/faculties/:id"} element={<FacultyDetails />} />
            <Route path={"/faculties/create"} element={<FacultyCreate />} />
            <Route path={"/faculties/edit/:id"} element={<FacultyEdit />} />
          </Routes>
          <button onClick={notify}>Notify!</button>
          <ToastContainer />
        </div>
      </StudentProvider>
    </Router>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Main from './pages/main/Main';
// import Navbar from './pages/navBar/Navbar'
// import { MovieProvider } from './contexts/MovieContext';
// import { UserProvider } from './contexts/UserContext';
// function App() {
//   return (
//     <div className="App">
//       <MovieProvider>
//         <UserProvider>
//           <Navbar></Navbar>
//           <Main></Main>
//         </UserProvider>
//       </MovieProvider>

//     </div>
//   );
// }

// export default App;
