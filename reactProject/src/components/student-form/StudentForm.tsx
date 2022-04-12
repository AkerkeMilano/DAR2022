import { useState } from "react";
import { Course, Student } from "../../types";

type Props = {
  initialValues?: Partial<Student>;
  onSubmit: (data: Partial<Student>) => void;
};

const StudentForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState<Partial<Student>>(
    initialValues ?? {
      firstName: "",
      lastName: "",
      score: 0,
      courses: [],
    }
  );
  const [courseName, setCourseName] = useState("");
  const changeField = (fieldName: keyof Student) => {
    return (e: any) =>
      setValues((v) => ({ ...v, [fieldName]: e.target.value }));
  };

  const addCourse = () => {
    console.log(courseName);
    if (courseName && courseName.trim()) {
      setValues((v) => ({
        ...v,
        courses: [
          ...(v.courses ?? []),
          {
            name: courseName,
          },
        ],
      }));
      setCourseName("");
    }
  };

  const deleteCourse = (course: Course) => {
      const indexEl = values.courses?.indexOf(course);
      if(typeof indexEl === 'number'){
        values.courses?.splice(indexEl, 1);
      }
      setValues((v) => ({
        ...v,
        courses: [
          ...(v.courses || []),
        ]
      }))
      
  }

  return (
    <div>
      <div>
        <label>First Name</label>
        <input
          type={"text"}
          value={values?.firstName}
          onChange={changeField("firstName")}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type={"text"}
          value={values?.lastName}
          onChange={changeField("lastName")}
        ></input>
      </div>
      <div>
        <label>Score</label>
        <input
          type={"text"}
          value={values?.score}
          onChange={changeField("score")}
        ></input>
      </div>
      <div>
        <label>Courses</label>
        <div>
          <input
            type="text"
            value={courseName}
            onChange={(e: any) => setCourseName(e.target.value)}
          />
        </div>
        <button onClick={addCourse}>Add</button>
        <ul>
          {values.courses?.map((course, idx) => (
            <li key={`${course}-${idx}`}>
              <input
                type="text"
                value={course.name}
                onChange={changeField("courses")}
              />
               <button onClick={() => deleteCourse(course)}>Delete</button>

            </li>
          ))}
        </ul>

        <button onClick={() => onSubmit(values)}>Submit</button>
      </div>
    </div>
  );
};

export default StudentForm;
