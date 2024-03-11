import React from "react";
import UpdateProfileForm from "../components/UpdateProfileForm";

const ProfilePage = () => {
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Cập nhật thông tin cá nhân</h2>
            <UpdateProfileForm />
          </div>
        </div>
      </div>
    </div>
  </div>
    // <div>
    //   <h1>Cập nhật thông tin cá nhân</h1>
    //   <UpdateProfileForm />
    // </div>
  );
};

export default ProfilePage;
