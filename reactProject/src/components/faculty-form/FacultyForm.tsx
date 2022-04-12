import { useState } from "react";
import { Faculty } from "../../types";

type Props = {
    initialValues?: Partial<Faculty>;
    onSubmit: (data: Partial<Faculty>) => void;
  };

const FacultyForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState<Partial<Faculty>>(
    initialValues ?? {
      name: "",
    }
  );
  const changeField = (fieldName: keyof Faculty) => {
    return (e: any) => {
      setValues((v) => ({ ...v, [fieldName]: e.target.value }));
    };
  };
  return (
    <div>
      <label>Faculty Name</label>
      <input type={"text"} value={values.name} onChange={changeField("name")} />
      <button onClick={() => onSubmit(values)}>Submit</button>
    </div>
  );
};

export default FacultyForm;