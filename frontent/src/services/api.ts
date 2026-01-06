// /src/services/api.ts
const API_BASE_URL = "http://localhost:5000/api"; // Adjust if deploying

export const registerPharmacist = async (data: any) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Registration failed");

  return response.json();
};

export const loginPharmacist = async (data: any) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Login failed");

  return response.json();
};
