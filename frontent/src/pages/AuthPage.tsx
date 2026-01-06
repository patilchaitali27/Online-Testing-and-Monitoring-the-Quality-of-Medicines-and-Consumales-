import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerPharmacist, loginPharmacist } from "../services/api";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    hospitalName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // 👈 Navigation hook

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const data = await loginPharmacist({
          email: formData.email,
          password: formData.password,
        });
        alert("Login successful");
        console.log(data); // optionally store token
        navigate("/test"); // 👈 Redirect after login
      } else {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
        const data = await registerPharmacist({
          fullName: formData.fullName,
          hospitalName: formData.hospitalName,
          email: formData.email,
          password: formData.password,
        });
        alert("Registration successful");
        console.log(data);
        navigate("/test"); // 👈 Redirect after registration
      }
    } catch (error) {
      alert("Something went wrong: " + error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          {isLogin ? "Pharmacist Login" : "Pharmacist Registration"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl"
              />
              <input
                type="text"
                name="hospitalName"
                placeholder="Hospital Name"
                value={formData.hospitalName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl"
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl"
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-xl"
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
