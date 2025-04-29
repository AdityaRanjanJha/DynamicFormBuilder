import React, { useState } from "react";
import { FormResponse } from "../types";

interface LoginProps {
  onSuccess: (data: FormResponse, roll: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async () => {
    const res = await fetch(
      "https://dynamic-form-generator-9rl7.onrender.com/create-user",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rollNumber, name }),
      }
    );

    if (res.ok) {
      const formRes = await fetch(
        `https://dynamic-form-generator-9rl7.onrender.com/get-form?rollNumber=${rollNumber}`
      );
      const data = await formRes.json();
      onSuccess(data, rollNumber);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
