import { useNavigate } from "react-router-dom"
import FacultyForm from "../../../components/faculty-form/FacultyForm";
import { createFaculty } from "../../../services/faculties";
import { Faculty } from "../../../types";

const FacultyCreate = () => {
    const navigate = useNavigate();
    const onFormSubmit = (data: Partial<Faculty>) => {
        console.log("REQUEST", data);
        createFaculty(data).then((res) => {
            console.log("RESPONSE", data)
            if(res.id){
                navigate('/faculties');
            }
        })
    }
    return (
        <div>
            <h2>Create faculty</h2>
            <FacultyForm onSubmit={onFormSubmit}></FacultyForm>
        </div>
    )
};

export default FacultyCreate;