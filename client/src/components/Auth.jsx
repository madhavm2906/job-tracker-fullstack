import { useState } from "react";

function Auth({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    const bodyData = isLogin
      ? {
          email: formData.email,
          password: formData.password,
        }
      : formData;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
      } else {
        alert("Account created successfully. Please log in.");
        setIsLogin(true);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log("Auth error:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="hero-tag">{isLogin ? "Welcome Back" : "Create Account"}</p>
        <h1>{isLogin ? "Login to your account" : "Sign up to get started"}</h1>
        <p className="hero-subtext">
          {isLogin
            ? "Access your personal job tracker dashboard."
            : "Create an account and start tracking applications."}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
        </form>

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;