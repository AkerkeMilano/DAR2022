import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getFaculties } from "../../../services/faculties";
import { Faculty } from "../../../types";

const FacultiesList = () => {
    const [faculties, setFaculties] = useState<Faculty[]>([]);

    useEffect(() => {
        getFaculties().then((res) => {
            setFaculties(res);
        })
    }, []);
    return (
        <div>
            <h2>Faculties</h2>
            <Link to="/faculties/create">Create</Link>
            <table style={{width: "50%"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Faculty name</th>
                    </tr>
                </thead>
                <tbody>
                    {faculties.map((faculty) => (
                        <tr key={faculty.id}>
                            <td>{faculty.id}</td>
                            <td>{faculty.name}</td>
                            <Link to={`/faculties/${faculty.id}`}>View</Link>
                            <Link to={`/faculties/edit/${faculty.id}`}>Edit</Link>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
};

export default FacultiesList;