import { useNavigate } from "react-router-dom";
import StudentForm from "../../../components/student-form/StudentForm";
import { createStudent } from "../../../services/students";
import { Student } from "../../../types";


const StudentCreate = () => {
    const navigate = useNavigate();
    const onFormSubmit = (data: Partial<Student>) => {
        console.log("REQUEST", data);
        createStudent(data).then((res) => {
            console.log("RESPONSE", data)
            if(res.id){
                navigate('/students');
            }
        })
    };
    return (
        <div>
            <h2>Create student</h2>
            <StudentForm onSubmit={onFormSubmit}/>
        </div>
    )
}

export default StudentCreate;