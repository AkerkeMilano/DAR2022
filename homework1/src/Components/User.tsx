interface Users {
    name?: string;
    surname?: string;
    age?: number;
    country?: string;
    occupation?: string;
}

function User(props: Users) {
return (
    <div className="user_info">
        <p>Personal information</p>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Age</td>
                    <td>Country</td>
                    <td>Occupation</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.surname}</td>
                    <td>{props.age}</td>
                    <td>{props.country}</td>
                    <td>{props.occupation}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
);
}

export default User;