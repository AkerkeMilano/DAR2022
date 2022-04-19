import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../../../contexts/StudentContext";
import { ToastContext } from "../../../contexts/ToastContext";
import { deleteStudent, getStudents } from "../../../services/students";
import { Student } from "../../../types";

const StudentsList = () => {
  const { state, dispatch } = useContext(StudentContext);
  const { dispatch: toastDispatch } = useContext(ToastContext);

  useEffect(() => {
    getStudents()
      .then((res) => {
        dispatch({ type: "GET_STUDENTS", payload: res });
        toastDispatch({ type: "SUCCESS", payload: {message: "Got students", props: {autoClose: 3000,}} });
      })
      .catch((err) => {
        toastDispatch({
          type: "ERROR",
          payload: { message: err.message || "Custom error text"},
        });
      });
  }, [dispatch, toastDispatch]);

  const deleteCurrentStudent = (id: string) => {
    const newStudentList = state.students.filter((student: Student) => student.id !== id);
    deleteStudent(id).then((res) => {
      dispatch({ type: "DELETE_STUDENT", payload: newStudentList });
      toastDispatch({type: "SUCCESS", payload: {message: "Student was deleted"}})
    });
  };

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
                <button onClick={() => deleteCurrentStudent(`${student.id}`)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
