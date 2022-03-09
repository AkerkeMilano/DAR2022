
interface Users {
    name?: string;
    surname?: string;
    age?: number;
    country?: string;
    hobby?: string;
    image?: string;
}

function User(props: Users) {
return (
    <div className="user_info">
        <img src={props.image} alt="User avatar" className="user_img"/>
        <div className="user_text">
            <p className="user_name_surname">I'm {props.name} {props.surname}</p>
            <p className="user_age_country">I'm {props.age} years old and my homecountry is {props.country}</p>
            <p className="user_hobby">I like {props.hobby}</p>
        </div>

    </div>
);
}

export default User;