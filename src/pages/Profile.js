import React from "react";
import FormRow from "../components/FormRow";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Features/users/UserSlice";

const Profile = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({ ...user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = formData;
    dispatch(updateUser({ name, email, lastName, location }));
  };
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="bg-white p-4 w-[80%] sm:w-[60%] md:w-1/2 shadow-md">
        <p className="text-center text-lg mb-6">Profile</p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <FormRow name="name" value={formData?.name} onChange={handleChange} />
          <FormRow
            name="email"
            value={formData?.email}
            onChange={handleChange}
          />
          <FormRow
            name="lastName"
            value={formData?.lastName}
            onChange={handleChange}
          />
          <FormRow
            name="location"
            value={formData?.location}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#fd5732] text-white px-2 py-1 rounded hover:bg-[#fd5732e4] text-center mt-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
