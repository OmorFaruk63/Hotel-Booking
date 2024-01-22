import { useState } from "react";
import "./ProfilePage.css";
import { authContext } from "../../context/AuthContext";
import Modal from "../../components/modal/Modal";
import axios from "axios";

const ProfilePage = () => {
  const { state, token, dispatch } = authContext();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(state?.user || "");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const editData = async () => {
    setLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:8800/api/users/${state.user._id}`,
        userData,
        { headers: { token } }
      );
      dispatch({ type: "EDITE", payload: { data: res.data } });
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="profile-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="profile-left">
            {/* Profile Photo */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtOi_cnSoT5uC88eHwpEmeE450S877HFzR2HNYRhH6Q&s"
              alt="Profile"
              className="profile-photo"
            />
          </div>
          <div className="profile-right">
            <div className="profile-data">
              {/* Display Profile Data */}
              <div>
                <label>Name:</label>
                <span>{userData.name}</span>
              </div>
              <div>
                <label>Username:</label>
                <span>{userData.username}</span>
              </div>
              <div>
                <label>Email:</label>
                <span>{userData.email}</span>
              </div>
              <div>
                <label>Country:</label>
                <span>{userData.country}</span>
              </div>
              <div>
                <label>City:</label>
                <span>{userData.city}</span>
              </div>
              <div>
                <label>Phone:</label>
                <span>{userData.phone}</span>
              </div>
            </div>
            {/* Edit Button */}
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Edit
            </button>
          </div>

          {/* Edit Modal */}
          {isEditing && (
            <Modal
              editData={editData}
              handleInputChange={handleInputChange}
              userData={userData}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProfilePage;
