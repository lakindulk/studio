import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../../contexts/FirebaseContext";

function Register() {
  const [input, setInput] = useState({ email: "", password: "", role: "user", firstName:"",lastName:"",mobilenumber:"" }); // Default role is user
  const { register, authError } = useFirebaseAuth();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let email = input.email.toLowerCase().trim();
      let password = input.password;
      let role = input.role; 
      let firstName = input.firstName; 
      let lastName = input.lastName; 
      let mobilenumber = input.mobilenumber; 

      // Call the register function with email, password, and role
      await register(email, password, role, firstName,lastName,mobilenumber);

      // Redirect to login page
      window.location = "/login";
    } catch (err) {
      setError(authError);
    }
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-body">
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>Fill the form below to create your account.</p>
        <div className="email-input">
          <input
            name="email"
            placeholder="Enter email"
            type="text"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        <div className="password-input">
          <input
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            autoComplete="true"
          />
          <label htmlFor="password" className="label-name">
            <span className="content-name">Password</span>
          </label>
        </div>
        <div className="role-input">
          <input
            name="role"
            placeholder="Enter role (e.g., user or admin)"
            type="text"
            onChange={handleChange}
            value={input.role}
            required
          />
          <label htmlFor="role" className="label-name">
            <span className="content-name">Role</span>
          </label>
        </div>

        <div className="firstName-input">
          <input
            name="firstName"
            placeholder="Enter First Name"
            type="text"
            onChange={handleChange}
            value={input.firstName}
            required
          />
          <label htmlFor="firstName" className="label-name">
            <span className="content-name">First Name</span>
          </label>
        </div>


        <div className="lastName-input">
          <input
            name="lastName"
            placeholder="Enter Last Name"
            type="text"
            onChange={handleChange}
            value={input.lastName}
            required
          />
          <label htmlFor="lastName" className="label-name">
            <span className="content-name">last Name</span>
          </label>
        </div>

        
        <div className="mobilenumber-input">
          <input
            name="mobilenumber"
            placeholder="Enter Mobile Number"
            type="text"
            onChange={handleChange}
            value={input.mobilenumber}
            required
          />
          <label htmlFor="mobilenumber" className="label-name">
            <span className="content-name">Mobile Number</span>
          </label>
        </div>
        <div className="btn">
          {error ? <p className="login-error">{error}</p> : null}
          <button title="Sign up" aria-label="Signup" type="submit">
            Create account
          </button>
        </div>
      </form>
      <div className="option">
        <p>
          Already have an account?
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
