import React from "react";
import FormRow from "../components/FormRow";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const {user} = useSelector((store)=>store.user)
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="bg-white p-4">
        <p className="text-center text-lg mb-6">Profile</p>
        <div className="flex flex-col">
          <FormRow name="name" value={user?.name}/>
          <FormRow name="email" value={user?.email}/>
          <FormRow name="lastName" value={user?.lastName}/>
          <FormRow name="location" value={user?.location}/>
          <button className="bg-[#fd5732] text-white px-2 py-1 rounded hover:bg-[#fd5732e4] text-center mt-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
