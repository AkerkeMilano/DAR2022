import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FacultyContext } from "../../../contexts/FacultyContext";
import { ToastContext } from "../../../contexts/ToastContext";
import { deleteFaculty, getFaculties } from "../../../services/faculties";
import { Faculty } from "../../../types";

const FacultiesList = () => {
  const { state, dispatch } = useContext(FacultyContext);
  const { dispatch: toastDispatch } = useContext(ToastContext);

  useEffect(() => {
    getFaculties()
      .then((res) => {
        dispatch({ type: "GET_FACULTIES", payload: res });
        toastDispatch({
          type: "SUCCESS",
          payload: { message: "Got faculties", props: { autoClose: 1000 } },
        });
      })
      .catch((err) => {
        toastDispatch({
          type: "ERROR",
          payload: { message: err.message || "Couldn't get faculties" },
        });
      });
  }, [dispatch, toastDispatch]);

  const deleteCurrentFaculty = (id: string) => {
    const newFacultyList = state.faculties.filter((faculty: Faculty) => faculty.id !== id);
    dispatch({ type: "DELETE_FACULTY", payload: newFacultyList });
    deleteFaculty(id).then((res) => {
      toastDispatch({type: "SUCCESS", payload: {message: "Faculty was deleted"}})
    });
  };

  return (
    <div>
      <h2>Faculties</h2>
      <Link to="/faculties/create">Create</Link>
      <table style={{ width: "50%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Faculty name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>
                <Link to={`/faculties/${faculty.id}`}>View</Link>
                <Link to={`/faculties/edit/${faculty.id}`}>Edit</Link>
                <button onClick={() => deleteCurrentFaculty(`${faculty.id}`)}>
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

export default FacultiesList;
