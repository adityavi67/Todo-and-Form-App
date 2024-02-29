import { useState } from "react";
import "./form.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    skills: "",
  });
  
  const [userDetails, setUserDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails(formData);
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      skills: "",
    });
  };

  const resetForm = () => {
    setUserDetails(null);
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dob">DOB:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <select
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          >
            <option value="">Select a skill</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
          </select>
        </div>
        <div className="actions">
          <button className="action" type="submit">
            Submit
          </button>
          <button className="action" type="button" onClick={() => resetForm()}>
            Reset
          </button>
        </div>
      </form>

      {userDetails && (
        <div className="user-details">
          <h2>User Details</h2>
          <p>First Name: {userDetails.firstName}</p>
          <p>Last Name: {userDetails.lastName}</p>
          <p>DOB: {userDetails.dob}</p>
          <p>Skill: {userDetails.skills}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
