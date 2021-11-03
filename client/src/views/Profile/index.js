import { logoutUser } from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";

function Profile() {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="mainWrapper">
        <div>
          <p>This is profile</p>
          <strong
            onClick={() => {
              console.log("logout");
              dispatch(logoutUser());
              window.location.reload();
            }}
          >
            Logout
          </strong>
        </div>
      </div>
    </>
  );
}

export default Profile;
