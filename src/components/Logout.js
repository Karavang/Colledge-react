import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import "./Logout.css";

const Logout = () => {
  const user = useSelector(selectUser); // Get the entire user object
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        Welcome, <span className="user_name">{user.name}</span>
      </h1>
      <button
        className="logout_button"
        onClick={handleSubmit}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
