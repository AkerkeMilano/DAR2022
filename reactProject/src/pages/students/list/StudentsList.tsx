import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../../../contexts/StudentContext";
import { getStudents } from "../../../services/students";

// import { Student } from "../../../types";

const StudentsList = () => {
  // const [students, setStudents] = useState<Student[]>([]);
  const {state, dispatch} = useContext(StudentContext);
  useEffect(() => {
    getStudents().then((res) => {
      dispatch({type: "GET_STUDENTS", payload: res})
    });
  }, [dispatch]);
  
  return (
    <div>
      <h2>Students</h2>
      <Link to="/students/create">Create</Link>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
            <th>Courses</th>
            <th>Faculties</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.score}</td>
              <td>
                {student.courses?.map((course) => course.name).join(", ")}
              </td>
              <td>
                <Link to={`/students/${student.id}`}>View</Link>
                <Link to={`/students/edit/${student.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
