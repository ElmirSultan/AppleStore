import React, { useState } from "react";
import "./form.scss";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setLogin } from "../../toolkit/cartSlice";
import Button from "../../components/Button/Button";

const Form = ({ outsideLoginRef,isBoxOpen }) => {
  const dispatch = useDispatch();
  const [pageType, setPageType] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const togglePage = () => {
    setPageType((prevPageType) =>
      prevPageType === "register" ? "login" : "register"
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (pageType === "register" && !formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (
      pageType === "register" &&
      formData.password.trim() !== formData.confirmPassword.trim()
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const values = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      const endpoint = pageType === "register" ? "/auth/register" : "/auth/login";
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + endpoint,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await response.json();

      if (response.ok) {
        if (pageType === "register") {
          message.success("Registration is successful. Please log in.");
          setPageType("login");
        } else {
          dispatch(
            setLogin({
              user: result.user,
              token: result.token,
            })
          );
          isBoxOpen(false)
          message.success(`Welcome ${result.user.username}`);
        }
      } else {
        message.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      message.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <section className="login-and-register">
      <div className="box-in" ref={outsideLoginRef}>
        <h1>{pageType === "login" ? "Login" : "Register"} Box</h1>

        <form onSubmit={handleSubmit}>
          <div className="inputs">
            {pageType === "register" && (
              <div className="username-box">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <div style={{ color: "red" }}>{errors.username}</div>
              </div>
            )}

            <div className="email-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div style={{ color: "red" }}>{errors.email}</div>
            </div>

            <div className="password-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div style={{ color: "red" }}>{errors.password}</div>
            </div>

            {pageType === "register" && (
              <div className="confirm-box">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <div style={{ color: "red" }}>{errors.confirmPassword}</div>
              </div>
            )}
          </div>

          <Button
            buttonText={`${pageType === "login" ? "Login" : "Register"}`}
            buttonClick={handleSubmit}
          />

          {pageType === "login" ? (
            <div className="bottom-side">
              <span>Don't have an account? </span>
              <p onClick={togglePage}>Register now</p>
            </div>
          ) : (
            <div className="bottom-side">
              <span>Already have an account? </span>
              <p onClick={togglePage}>Login</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Form;
